import React from 'react';
import PropTypes from 'prop-types';
import Temp from './Temp';
import styles from './styles/Card.module.css';

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return (
  <div className={styles.Card}>
    <button onClick={onClose}>X</button>
    <h2>{name}</h2>
    <Temp name="Min" temp={min} />
    <Temp name="Max" temp={max} />
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="icono" />
  </div>)
};

Card.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  onClick: PropTypes.func,
}