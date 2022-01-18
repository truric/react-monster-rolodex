import React from 'react';

import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <img alt="monster" src={`https://robohash.org/${props.camara.id}?set=set2&size=180x180`} />
        <h2> { props.camara.name } </h2>
        <p> { props.camara.email } </p>
    </div>
)