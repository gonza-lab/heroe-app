import { heroes } from '../data/heroes';

export const getHeroByPublisher = (publisher) => {
  if (!['DC Comics', 'Marvel Comics'].includes(publisher)) {
    throw new Error(`Publisher ${publisher} no valido`);
  }

  return heroes.filter((heroe) => heroe.publisher === publisher);
};
