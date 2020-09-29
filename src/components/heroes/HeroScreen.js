import React, { useMemo } from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

import './HeroScreen.css';

export const HeroScreen = () => {
  const { heroeId } = useParams();
  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

  let history = useHistory();

  if (!hero) {
    return <Redirect to="/" />;
  }

  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  const handleClick = () => {
    if (history.length <= 2) {
      history.push('/');
    } else {
      history.goBack();
    }
  };

  return (
    <div className="hero-screen animate__animated animate__backInRight">
      <div className="img">
        <img src={`../assets/${id}.jpg`} alt={superhero} />
      </div>
      <div className="info">
        <h1>{superhero}</h1>
        <ol>
          <li>
            <b>Publisher: </b>
            {publisher}
          </li>
          <li>
            <b>Alter ego: </b>
            {alter_ego}
          </li>
          <li>
            <b>First Appearance: </b>
            {first_appearance}
          </li>
          <li>
            <b>Characters: </b>
            {characters}
          </li>
          <li>
            <button className="btn btn-outline-primary" onClick={handleClick}>
              Return
            </button>
          </li>
        </ol>
      </div>
    </div>
  );
};
