import React from "react";
import { ListaNoticias } from "./styled";
import { useNoticias } from "./customHooks/useNoticias";
import CardNoticia from "./CardNoticia";
import Modal from "./modal/Modal";
import { useModal } from "./customHooks/useModal";
import { INoticiasNormalizadas } from "./interfaces/noticiasNormalizadas";

interface ListadoNoticiasProps {
  noticias: INoticiasNormalizadas[] | null;
}

const ListadoNoticias = ({ noticias }: ListadoNoticiasProps) => {
  const { openModal, modal, closeModal } = useModal();

  return (
    <>
      <ListaNoticias>
        {noticias?.map((noticia) => (
          <CardNoticia noticia={noticia} openModal={openModal} />
        ))}

        {modal && <Modal noticia={modal} closeModal={closeModal} />}
      </ListaNoticias>
    </>
  );
};

export default ListadoNoticias;
