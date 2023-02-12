import React, { useEffect, useState } from 'react';
import { DETAIL_COCTAIL_API } from './../API/index';
import { Link, useParams } from 'react-router-dom';
import Header from '../Header';
import './detail.css'

const Detail = () => {
    const { id } = useParams()
    const [info, setInfo] = useState({})
    const getDetailInfo = async () => {
        const req = await fetch(DETAIL_COCTAIL_API + id)
        const res = await req.json()
        setInfo(res.drinks[0]);
        console.log(res.drinks[0]);

    }
    useEffect(() => {
        getDetailInfo()
    }, [])
    return (
        <div>
            <Header />
            <div className='blur'>
                <div className='flex'>
                    <img width='400' src={info.strDrinkThumb} alt="" />
                    <div className='details'>
                        <h1>{info.strDrink}</h1>
                        <h2>Category: {info.strAlcoholic}</h2>
                        <h3>Ingredients:</h3>

                        <li><Link to={'/ingredients/' + info.strIngredient1}>{info.strIngredient1}</Link></li>
                        {info.strIngredient2 && <li><Link to={'/ingredients/' + info.strIngredient2}>{info.strIngredient2}</Link></li>}
                        {info.strIngredient3 && <li><Link to={'/ingredients/' + info.strIngredient3}>{info.strIngredient3}</Link></li>}
                        {info.strIngredient4 && <li><Link to={'/ingredients/' + info.strIngredient4}>{info.strIngredient4}</Link></li>}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Detail;