import { useState } from "react";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";

import {
  BotonBio,
  ContenedorBio,
  ContenedorBotones,
  DescripcionBio,
  ImagenBio,
  NombreBio,
} from "./styled";

const Bio = () => {
  const [bioActiva, setBioActiva] = useState(
    INFO_SIMPSONS[NombresSimpsons.BART]
  );

  const onClick: (nombre: NombresSimpsons) => void = (nombre) =>
    setBioActiva(INFO_SIMPSONS[nombre]);

  const crearBotones = () => {
    return Object.keys(INFO_SIMPSONS).map((nombre: string) => (
      <BotonBio
        key={nombre as string}
        onClick={() => onClick(nombre as NombresSimpsons)}
        isActive={bioActiva.id === nombre}
      >
        {nombre}
      </BotonBio>
    ));
  };

  return (
    <ContenedorBio>
      <ContenedorBotones>{crearBotones()}</ContenedorBotones>

      <div>
        <div>
          <ImagenBio src={bioActiva.image} alt={bioActiva.nombre} />
        </div>
        <div>
          <NombreBio>{bioActiva.nombre}</NombreBio>
          <DescripcionBio>{bioActiva.descripcion}</DescripcionBio>
        </div>
      </div>
    </ContenedorBio>
  );
};

export default Bio;
