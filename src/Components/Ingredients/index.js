import React, { useEffect, useState } from 'react';
import { SEARCH_BY_INGR } from '../API';
import { useParams } from 'react-router-dom';
import './ingredient.css'

const Ingredients = () => {
    const { recipe } = useParams()

    const [ingrInfo, setIngrInfo] = useState({})
    const ingr = async () => {
        const req = await fetch(SEARCH_BY_INGR + recipe)
        const res = await req.json()
        setIngrInfo(res.ingredients[0])
        console.log(res.ingredients[0]);
    }

    useEffect(() => {
        ingr()
    }, [])
    return (
        <div className='back'>
            <h2> Type :{ingrInfo.strType}</h2>
            <h3>Alcohol: {ingrInfo.strAlcohol}</h3>
            {ingrInfo.strDescription ? <h4>Description: {ingrInfo.strDescription}</h4> : <h4>No Descripton</h4>};

        </div>
    );
};

export default Ingredients;