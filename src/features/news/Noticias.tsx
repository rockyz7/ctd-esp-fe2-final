import ListadoNoticias from "./ListadoNoticias";

import { ContenedorNoticias, TituloNoticias } from "./styled";
import { useNoticias } from "./customHooks/useNoticias";

// Basándome en el principio de Responsabilidad Única cree dos custom hooks (useModal y useNoticias).
// El primero se encarga de la lógica del modal (abrirlo, cerrarlo y definir la información que va a mostrar)
// El segundo trae las noticias y las normaliza usando dos funciones (una para calcular los minutos desde que se publicó y
// otra que le agrega mayúsculas al título).
// En cuanto a la estructura, creé un layout para el modal con la información en común entre la versión Premium y la común.
// El componente Modal lo utiliza y define qué se va a renderizar dentro de ese layout como children prop en base a la condición definida.
// Por último, refactoricé el código que mostraba las noticias en dos componentes (<ListadoNoticias/> que renderiza un <CardNoticia/> según
// cuántas haya)

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
