import React, { useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHerosByName } from '../../selectors/getHerosByName';
import { HeroCard } from '../heroes/HeroCard';
import { Searcher } from './Searcher';

import './SearchScreen.css';

export const SearchScreen = () => {
  const history = useHistory();
  const location = useLocation();
  const [{ hero }, handleChange, reset] = useForm();
  const heros = useMemo(() => getHerosByName(location.search.substr(3)), [
    location.search,
  ]);

  const handleSearch = () => {
    history.push(`?q=${hero}`);
    reset();
  };

  return (
    <div className="search-screen">
      <Searcher handleChange={handleChange} handleSearch={handleSearch} />
      <div className="hero-list animate__animated animate__fadeIn">
        {heros.map((heroe) => (
          <HeroCard key={heroe.id} {...heroe} />
        ))}
      </div>
    </div>
  );
};
