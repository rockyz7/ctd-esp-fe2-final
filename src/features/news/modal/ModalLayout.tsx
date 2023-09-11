import React from "react";
import { CloseButton, ContenedorModal, TarjetaModal } from "../styled";
import { CloseButton as Close } from "../../../assets";
import { useNoticias } from "../customHooks/useNoticias";

interface AuxProps {
  children: React.ReactNode;
}

const ModalLayout = ({ children }: AuxProps) => {
  return (
    <>
      <ContenedorModal>
        <TarjetaModal>{children}</TarjetaModal>
      </ContenedorModal>
    </>
  );
};

export default ModalLayout;
