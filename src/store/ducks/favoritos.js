import MOCK_CATEGORIAS from 'data/news.json';
import { getRandowNewsFilter } from 'helpers';

// Action Types
export const Types = {
  LOAD_FAVORITOS: '@categorias/load',
  UPDATE_CATEGORIAS: '@categorias/update',
};

// Reducer
const categoriasOpcoes = MOCK_CATEGORIAS.filter((it) => !it.isCanal).map(({ category, news }) => ({
  key: category,
  title: category,
  news,
}));
const INITIAL_STATE = {
  categoriasActive: {
    'Meu Espaço': { news: getRandowNewsFilter(categoriasOpcoes), fixo: true, active: true },
    ...categoriasOpcoes.reduce(
      (il, it) => ({
        ...il,
        [it.title]: it,
      }),
      {}
    ),
  },
  categorias: [],
  categoriasOpcoes,
  todasCategorias: MOCK_CATEGORIAS.map(({ category, news }) => ({
    key: category,
    title: category,
    news,
  })),
};

export default function favoritos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_FAVORITOS: {
      const { categoriasActive, categorias } = state;
      categoriasActive['Meu Espaço'].news = getRandowNewsFilter(categorias);
      return {
        ...state,
        categoriasActive,
      };
    }
    default:
      return state;
  }
}

// Action Creators

export const Creators = {
  getCategorias: () => ({
    type: Types.LOAD_FAVORITOS,
    payload: { resultados },
  }),
};
