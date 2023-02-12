import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Output.css'

const Output = ({ data }) => {
    // console.log(data);
    return (
        <Stack
            direction='row'
            flexWrap='wrap'
        >
            {
                data.map(el => (
                    <div className='cards' key={el.idDrink}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={el.strDrinkThumb}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography className='card_text' gutterBottom variant="h4" component="div">
                                        {el.strDrink}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Link className='more' to={'/detail/' + el.idDrink}>
                                    <Button className='more_text' size="small" color="primary">
                                        More...
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </div>

                ))
            }
        </Stack>
    );
};

export default Output;