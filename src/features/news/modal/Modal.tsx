import React from "react";

import PremiumModal from "./PremiumModal";

import ModalLayout from "./ModalLayout";
import { INoticiasNormalizadas } from "../interfaces/noticiasNormalizadas";
import { CloseButton as Close } from "../../../assets";
import { CloseButton } from "../styled";
import RegularModal from "./RegularModal";

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
        <PremiumModal closeModal={closeModal} />
      ) : (
        <RegularModal {...noticia} />
      )}
    </ModalLayout>
  );
};

export default Modal;
