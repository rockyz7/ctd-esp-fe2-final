import { waitFor, screen, act } from "@testing-library/react";

import Cita from "./Cita";
import userEvent from "@testing-library/user-event";
import { server } from "../../test/mocks/server";
import { customRender } from "../../test-utils";

let borrarBtn: HTMLElement;
let input: HTMLElement;
let obtenerCitaBtn: HTMLElement;
let randomCitaBtn: HTMLElement;

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Cita component", () => {
  beforeEach(() => {
    customRender(<Cita />);
    borrarBtn = screen.getByRole("button", {
      name: /borrar/i,
    });
    input = screen.getByRole("textbox", { name: /author cita/i });
    obtenerCitaBtn = screen.getByRole("button", {
      name: /obtener cita/i,
    });
    randomCitaBtn = screen.getByRole("button", {
      name: /obtener cita aleatoria/i,
    });
  });

  describe("Testing default component render", () => {
    test("Should render correctly", () => {
      expect(borrarBtn).toBeInTheDocument();
      expect(input).toBeInTheDocument();
    });

    test('Should display a "No se encontro ninguna cita" message', () => {
      const initialQuoteMessage = screen.getByText(
        "No se encontro ninguna cita"
      );
      expect(initialQuoteMessage).toBeInTheDocument();
    });
  });

  describe("Testing no input value", () => {
    test("Should display loading message while data is being fetched", async () => {
      act(() => {
        userEvent.click(randomCitaBtn);
      });

      await waitFor(() => {
        const cargandoMessage = screen.getByText("CARGANDO...");
        expect(cargandoMessage).toBeInTheDocument();
      });
    });

    test("Should display a random quote when the user clicks the 'Obtener cita aleatoria' button", async () => {
      act(() => {
        userEvent.click(randomCitaBtn);
      });

      await waitFor(() => {
        const citaData = screen.getByText(
          "Ah, be creative. Instead of making sandwiches with bread, use Pop-Tarts. Instead of chewing gum, chew bacon."
        );
        expect(citaData).toBeInTheDocument();
      });
    });
  });

  describe("When user enters a character name in the input before pressing the button", () => {
    test("Should display a quote if the entered character is valid", async () => {
      await userEvent.type(input, "homer");

      act(() => {
        userEvent.click(obtenerCitaBtn);
      });

      await waitFor(() => {
        const citaData = screen.getByText("I hope I didn't brain my damage.");
        expect(citaData).toBeInTheDocument();
      });
    });

    test("Should display an error message if the entered character is invalid", async () => {
      await userEvent.type(input, "lisa");

      act(() => {
        userEvent.click(obtenerCitaBtn);
      });

      await waitFor(() => {
        const errorMessage = screen.getByText(
          "Por favor ingrese un nombre válido"
        );
        expect(errorMessage).toBeInTheDocument();
      });
    });

    test("Should display an error message if the input is a number", async () => {
      await userEvent.type(input, "1234");

      await userEvent.click(obtenerCitaBtn);

      await waitFor(() => {
        const errorMessage = screen.getByText(
          "Por favor ingrese un nombre válido"
        );
        expect(errorMessage).toBeInTheDocument();
      });
    });
  });

  describe("When the user clicks 'clear' after searching for a quote succesfully", () => {
    test("Should remove the found quote", async () => {
      await userEvent.type(input, "homer");

      await userEvent.click(obtenerCitaBtn);

      await waitFor(() => {
        const citaData = screen.getByText("I hope I didn't brain my damage.");
        expect(citaData).toBeInTheDocument();
      });

      await userEvent.click(borrarBtn);

      await waitFor(() => {
        expect(
          screen.queryByText("I hope I didn't brain my damage.")
        ).not.toBeInTheDocument();
      });
    });
  });
});
