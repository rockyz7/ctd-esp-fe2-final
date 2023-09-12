import { rest } from "msw";
import { API_URL } from "../../app/constants";
import { ICita } from "../../features/quote/types";
import { ESTADO_FETCH } from "../../features/quote/constants";
import { mockData } from "../mockData";

const queries = mockData.map((name) => name.query);

export const handlers = [
  rest.get(`${API_URL}`, (req, res, ctx) => {
    const character = req.url.searchParams.get("character");

    if (character === null) {
      const citaData = mockData[0].data;

      return res(ctx.status(200), ctx.json([citaData]));
    }

    if (queries.includes(character)) {
      const characterInfo = mockData.find((query) => query.query === character);
      const citaData = characterInfo?.data;

      return res(ctx.status(200), ctx.json([citaData]));
    }

    return res(ctx.json([]), ctx.delay(150));
  }),
];
