import { SuscribeImage, CloseButton as Close } from "../../assets";
import ListadoNoticias from "./ListadoNoticias";
import { obtenerNoticias } from "./fakeRest";
import Modal from "./modal/Modal";
import {
  CloseButton,
  TarjetaModal,
  ContenedorModal,
  DescripcionModal,
  ImagenModal,
  TituloModal,
  TarjetaNoticia,
  FechaTarjetaNoticia,
  DescripcionTarjetaNoticia,
  ImagenTarjetaNoticia,
  TituloTarjetaNoticia,
  ContenedorNoticias,
  ListaNoticias,
  TituloNoticias,
  BotonLectura,
  BotonSuscribir,
  CotenedorTexto,
} from "./styled";
import { useNoticias } from "./customHooks/useNoticias";

const Noticias = () => {
  const { noticias } = useNoticias();

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <ListadoNoticias noticias={noticias} />
    </ContenedorNoticias>
  );
};

export default Noticias;
