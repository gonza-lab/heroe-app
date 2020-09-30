import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { getHeroByPublisher } from '../../selectors/getSelectorByPublisher';
import { HeroCard } from './HeroCard';

import './HeroList.css';

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

  const { pathname } = useLocation();

  return (
    <div
      className="hero-list animate__animated animate__fadeIn"
      id={`${pathname.substr(1)}-screen`}
    >
      {heroes.map((heroe) => (
        <HeroCard key={heroe.id} {...heroe} />
      ))}
    </div>
  );
};
