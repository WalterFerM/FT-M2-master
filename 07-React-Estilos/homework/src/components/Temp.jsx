import React from 'react';
import Styles from './styles/Temp.module.css';

export default function Temp({name, temp}) {
    return (
        <div className={Styles.Temp}>
            <label htmlFor={name}>{name}</label>
            <span>{temp}</span>
        </div>
    )
};