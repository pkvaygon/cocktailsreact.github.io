import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './../Home/index';
import Detail from './../Detail/index';
import Ingredients from './../Ingredients/index';
const Main = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/detail/:id' element={<Detail />} />
                <Route path='/ingredients/:recipe' element={<Ingredients />} />
            </Routes>
        </div>
    );
};

export default Main;