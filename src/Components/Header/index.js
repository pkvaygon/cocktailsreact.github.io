import { Button, Stack, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Header.css'

const Header = ({ search, all, filter }) => {
    const [name, setName] = useState('')

    return (
        <header className='header'>
            <Stack
                spacing={2}
                direction='row'
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Link to='/'>
                    <img onClick={all} width={100} src="https://i.pinimg.com/originals/e3/7d/a1/e37da103f903f8e2d8af0eea00148446.png" alt='' />
                </Link>
                <h1 className='slogan'>Cocktails || React</h1>
                <TextField
                    className='input_name'
                    required
                    onChange={(e) => (setName(e.target.value),
                        search(name))
                    }
                    id='outlined-required'
                    label='Cocktail Name' />
                <select className='select' onChange={(e) => filter(e.target.value)}>
                    <option value='Alcoholic'>Алкогольный</option>
                    <option value='Non_Alcoholic'>Без-Алкогольный</option>
                </select>
                <Button
                    onClick={() => search(name)} size="medium" variant='contained'>Search</Button>
            </Stack>
        </header>
    );
};

export default Header;