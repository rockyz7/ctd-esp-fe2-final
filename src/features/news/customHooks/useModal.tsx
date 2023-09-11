import { useState } from "react";
import { INoticiasNormalizadas } from "../interfaces/noticiasNormalizadas";

export const useModal = () => {
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

  const openModal = (info: INoticiasNormalizadas | null) => {
    setModal(info);
  };

  const closeModal = () => {
    setModal(null);
  };

  return {
    modal,
    openModal,
    closeModal,
  };
};
