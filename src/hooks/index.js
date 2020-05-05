import { useSelector } from 'react-redux';

export const useCategoriasSpace = () => {
  const { categoriasActive, categoriasOpcoes } = useSelector((state) => state.favoritos);
  return {
    categoriasOpcoes,
    categoriasRoutes: Object.keys(categoriasActive).map((key) => ({
      title: key,
      key,
      ...categoriasActive[key],
    })),
  };
};
