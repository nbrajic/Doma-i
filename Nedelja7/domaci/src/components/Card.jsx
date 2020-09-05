import React from 'react';
import Emoji from './Emoji';
import Descrption from './Description';


const Card = ({description, url}) => {
    return (
        <>
            <Emoji url= {url}/>
            <Descrption descrption={description}/>
        </>
    )
};

export default Card;