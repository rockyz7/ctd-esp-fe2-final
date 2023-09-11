import { useEffect, useState } from "react";
import { obtenerNoticias } from "../fakeRest";
import { calculateTimeDifferenceInMinutes, capitalizeTitle } from "../helpers";
import { INoticiasNormalizadas } from "../interfaces/noticiasNormalizadas";

export const useNoticias = () => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);

  useEffect(() => {
    const obtenerInformacion = async () => {
      const respuesta = await obtenerNoticias();

      const data = respuesta.map((noticia) => {
        const titulo = capitalizeTitle(noticia.titulo);
        const minutosTranscurridos = calculateTimeDifferenceInMinutes(
          noticia.fecha
        );

        return {
          id: noticia.id,
          titulo,
          descripcion: noticia.descripcion,
          fecha: `Hace ${minutosTranscurridos} minutos`,
          esPremium: noticia.esPremium,
          imagen: noticia.imagen,
          descripcionCorta: noticia.descripcion.substring(0, 100),
        };
      });

      setNoticias(data);
    };

    obtenerInformacion();
  }, []);

  return { noticias, setNoticias };
};
