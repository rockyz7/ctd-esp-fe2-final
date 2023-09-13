import { SuscribeImage, CloseButton as Close } from "../../../assets";
import {
  BotonSuscribir,
  CotenedorTexto,
  DescripcionModal,
  ImagenModal,
  TituloModal,
} from "../styled";

interface PremiumModalProps {
  closeModal: () => void;
}

const PremiumModal = ({ closeModal }: PremiumModalProps) => {
  return (
    <>
      <ImagenModal src={SuscribeImage} alt="mr-burns-excelent" />
      <CotenedorTexto>
        <TituloModal>Suscríbete a nuestro Newsletter</TituloModal>
        <DescripcionModal>
          Suscríbete a nuestro newsletter y recibe noticias de nuestros
          personajes favoritos.
        </DescripcionModal>
        <BotonSuscribir
          onClick={() =>
            setTimeout(() => {
              alert("Suscripto!");
              closeModal();
            }, 1000)
          }
        >
          Suscríbete
        </BotonSuscribir>
      </CotenedorTexto>
    </>
  );
};

export default PremiumModal;
