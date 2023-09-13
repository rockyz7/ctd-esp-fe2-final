import { INoticiasNormalizadas } from "../interfaces/noticiasNormalizadas";
import {
  CotenedorTexto,
  DescripcionModal,
  ImagenModal,
  TituloModal,
} from "../styled";

const RegularModal = (noticia: INoticiasNormalizadas) => {
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

export default RegularModal;
