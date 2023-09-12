import ListadoNoticias from "./ListadoNoticias";

import { ContenedorNoticias, TituloNoticias } from "./styled";
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
