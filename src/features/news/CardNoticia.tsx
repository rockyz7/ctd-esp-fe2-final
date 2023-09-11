import React from "react";
import {
  BotonLectura,
  DescripcionTarjetaNoticia,
  FechaTarjetaNoticia,
  ImagenTarjetaNoticia,
  TarjetaNoticia,
  TituloTarjetaNoticia,
} from "./styled";
import { INoticiasNormalizadas } from "./interfaces/noticiasNormalizadas";
import { useNoticias } from "./customHooks/useNoticias";

interface CardNoticiaProps {
  noticia: INoticiasNormalizadas;
  openModal: (noticia: INoticiasNormalizadas | null) => void;
}

const CardNoticia = ({ noticia, openModal }: CardNoticiaProps) => {
  const { imagen, titulo, fecha, descripcionCorta } = noticia;
  return (
    <>
      <TarjetaNoticia>
        <ImagenTarjetaNoticia src={imagen} />
        <TituloTarjetaNoticia>{titulo}</TituloTarjetaNoticia>
        <FechaTarjetaNoticia>{fecha}</FechaTarjetaNoticia>
        <DescripcionTarjetaNoticia>
          {descripcionCorta}
        </DescripcionTarjetaNoticia>
        <BotonLectura onClick={() => openModal(noticia)}>Ver más</BotonLectura>
      </TarjetaNoticia>
    </>
  );
};

export default CardNoticia;
