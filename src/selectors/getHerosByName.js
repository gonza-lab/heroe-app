import { heroes } from '../data/heroes';

export const getHerosByName = (name) => {
  return heroes.filter((heroe) =>
    heroe.superhero.toLocaleLowerCase().includes(name.toLocaleLowerCase())
  );
};
