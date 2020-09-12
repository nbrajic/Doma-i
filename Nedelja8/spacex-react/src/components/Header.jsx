import React, {useEffect} from 'react';
import { useState } from 'react';
import {getName} from '../service';

const Header = () => {

    const [name, setName] = useState('')

    useEffect(() => {
        getName().then(res => {
            setName(res.data.name)
        })
    },[]);

    return (
            <header style={{color:"#ffffff", fontSize:"xx-large"}}>{name}</header>
    )
};

export default Header;