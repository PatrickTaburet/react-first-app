import React, { Component } from 'react';
import Wrapper from './Wrapper';

const Car = ({children, color}) => {
    return children ? (
        <Wrapper>
            <p>Marque : {children}</p>
            {color ? <p>Couleur : {color} </p>: <p>Couleur : néant</p>}
        </Wrapper>
    ) : <p style={{backgroundColor: 'pink', width: '400px', padding: '10px', margin: "auto"}}>Pas de data</p>
};

export default Car;