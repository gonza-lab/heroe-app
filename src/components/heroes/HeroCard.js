import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './HeroCard.css';

export const HeroCard = React.memo(
  ({ id, superhero, alter_ego, characters }) => {
    const [show, setShow] = useState(false);
    const history = useHistory();

    const handleMouseOver = () => {
      setShow(true);
    };

    const handleMouseLeave = () => {
      setShow(false);
    };

    const handleClick = () => {
      history.push(`hero/${id}`);
    };

    return (
      <div
        className="hero-card"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <img src={`./assets/${id}.jpg`} alt={superhero} />
        <div
          className={`info animate__animated ${
            show ? 'animate__fadeIn' : 'animate__fadeOut'
          }`}
          onClick={handleClick}
        >
          <p className="title">{superhero}</p>
          <p className="sub-title">{alter_ego}</p>
          <p className="character">{characters}</p>
        </div>
      </div>
    );
  }
);
