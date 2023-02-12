import React, { useState } from 'react';
import { useEffect } from 'react';
import { ALLCOCTAILS_API, FILTER, SEARCH_COCTAIL_BY_NAME } from '../API';
import Header from '../Header';
import Output from '../Output';

const Home = () => {

    const [data, setData] = useState([])


    const getAllCocktails = async () => {
        const req = await fetch(ALLCOCTAILS_API)
        const res = await req.json()
        setData(res.drinks);
        // console.log(res.drinks);
    }
    const getCocktailByName = async (name) => {
        const req = await fetch(SEARCH_COCTAIL_BY_NAME + name)
        const res = await req.json()
        setData(res.drinks);
        // console.log(res.drinks);
    }

    const getFiltered = async (value) => {
        const req = await fetch(FILTER + value)
        const res = await req.json()
        setData(res.drinks)
        // console.log(res.drinks);

    }


    useEffect(() => {
        getAllCocktails()
    }, [])
    return (
        <div>
            <Header filter={getFiltered} all={getAllCocktails} search={getCocktailByName} />

            <Output data={data} />
        </div>
    );
};

export default Home;