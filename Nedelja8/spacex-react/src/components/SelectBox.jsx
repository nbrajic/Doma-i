import React, { useEffect, useState } from 'react';
import { getByYear } from '../service';

const SelectBox = ({setlaunchList}) => {

    const [value, setValue] = useState(0);

    const populateArray = () => {
        
        let years = [];
        
        for (let i = 2006; i <=2021; i++){
            if(i !== 2011){
                years.push(i)
            }
        }
        return years;
    };

    useEffect(() => {
        getByYear(value).then(res => {
            setlaunchList(res.data)
        })
        // eslint-disable-next-line
    },[value]);

    return ( 
        <select value={value} onChange={(e) => {
                    setValue(e.target.value)
        }}>
            <option disabled="disabled" default={true}>Choose...</option>
            {populateArray().map(year => <option key={year} value={year + ''}>{year} </option>)}
        </select>
    )
};

export default SelectBox;