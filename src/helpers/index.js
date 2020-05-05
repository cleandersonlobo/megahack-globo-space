import moment from 'moment';
import categories from '../data/news.json';
import 'moment/locale/pt-br';

const getNumers = (MAX_NUMBERS = 3, MAX_LENGTH = categories.length) => {
  const randArr = [];
  while (randArr.length < MAX_NUMBERS) {
    const val = Math.floor(Math.random() * MAX_LENGTH);

    if (randArr.indexOf(val) < 0) {
      randArr.push(val);
    }
  }
  return randArr.sort((a, b) => a - b);
};

const getRandowNews = (array = categories) => {
  const numers = getNumers();
  let newsSelect = [];
  numers.forEach((index) => {
    const { news } = array[index];
    const sliceNumebers = getNumers(2, news.length);
    newsSelect = [...newsSelect, ...news.slice(sliceNumebers[0], sliceNumebers[1])];
  });
  return newsSelect;
};

export const getRandowNewsFilter = (array) => {
  const numers = getNumers(3, array.length);
  let newsSelect = [];
  numers.forEach((index) => {
    const { news } = array[index];
    const sliceNumebers = getNumers(2, news.length);
    newsSelect = [...newsSelect, ...news.slice(sliceNumebers[0], sliceNumebers[1])];
  });
  return newsSelect;
};

export const CategoriesList = categories.map(({ category, avatar }) => ({
  nome: category,
  avatar,
}));

export const RoutesTabs = [
  { key: 'Meu Espaço', title: 'Meu Espaço', news: getRandowNews() },
  ...categories.map(({ category, news }) => ({
    key: category,
    title: category,
    news,
  })),
  // { key: 'Educação', title: 'Educação' },
  // { key: 'Economia', title: 'Economia' },
  // { key: 'Política', title: 'Política' },
  // { key: 'Saúde', title: 'Ciência e Saúde' },
  // { key: 'Videos', title: 'Videos' },
  // { key: 'Música', title: 'Música' },
  // { key: 'Pop & Arte', title: 'Pop & Arte' },
  // { key: 'Tecnologia e Games', title: 'Tecnologia e Games' },
  // { key: 'Carros', title: 'Carros' },
  // { key: 'Turismo e Viagem', title: 'Turismo e Viagem' },
  // { key: 'Loterias', title: 'Loterias' },
  // { key: 'Concursos e Emprego', title: 'Concursos e Emprego' },
  // { key: 'Mundo', title: 'Mundo' },
  // { key: 'Natureza', title: 'Natureza' },
  // { key: 'Planeta Bizarro', title: 'Planeta Bizarro' },
];

export const formatNewDateUpdated = (date) => moment(date).fromNow();
