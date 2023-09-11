import React from "react";
import { useNoticias } from "../customHooks/useNoticias";
import PremiumModal from "./PremiumModal";
import SubscribeModal from "./SubscribeModal";
import ModalLayout from "./ModalLayout";
import { INoticiasNormalizadas } from "../interfaces/noticiasNormalizadas";
import { CloseButton as Close } from "../../../assets";
import { CloseButton } from "../styled";

interface ModalProps {
  noticia: INoticiasNormalizadas;
  closeModal: () => void;
}

const Modal = ({ noticia, closeModal }: ModalProps) => {
  return (
    <ModalLayout>
      <CloseButton onClick={closeModal}>
        <img src={Close} alt="close-button" />
      </CloseButton>
      {noticia?.esPremium ? (
        <PremiumModal {...noticia} />
      ) : (
        <SubscribeModal closeModal={closeModal} />
      )}
    </ModalLayout>
  );
};

export default Modal;
