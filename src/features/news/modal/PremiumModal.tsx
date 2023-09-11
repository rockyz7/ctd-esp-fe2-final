import { INoticiasNormalizadas } from "../interfaces/noticiasNormalizadas";
import {
  BotonSuscribir,
  CotenedorTexto,
  DescripcionModal,
  ImagenModal,
  TituloModal,
} from "../styled";
import { useNoticias } from "../customHooks/useNoticias";

const PremiumModal = (noticia: INoticiasNormalizadas) => {
  return (
    <>
      <ImagenModal src={noticia.imagen} alt="news-image" />
      <CotenedorTexto>
        <TituloModal>{noticia.titulo}</TituloModal>
        <DescripcionModal>{noticia.descripcion}</DescripcionModal>
      </CotenedorTexto>
    </>
  );
};

export default PremiumModal;
