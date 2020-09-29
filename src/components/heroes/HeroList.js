import React, { useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { getHeroByPublisher } from '../../selectors/getSelectorByPublisher';
import { HeroCard } from './HeroCard';

import './HeroList.css';

export const HeroList = ({ publisher }) => {
  console.log('Me volvi a renderizar - HeroList')
  const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

  const history = useHistory();

  return (
    <div className="hero-list animate__animated animate__fadeIn">
      {heroes.map((heroe) => (
        <HeroCard key={heroe.id} {...heroe} history={history} />
      ))}
    </div>
  );
};
