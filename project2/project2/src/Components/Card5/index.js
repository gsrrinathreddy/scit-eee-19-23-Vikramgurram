import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Card5() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://i.ytimg.com/vi/kmjNC1R7ICg/hqdefault.jpg"
          alt="Ravanasura"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Ravanasura
          (
      <a href="https://in.bookmyshow.com/karimnagar/movies/ravanasura/ET00321391"> Ravanasura</a>
        );
          </Typography>
          <Typography variant="body2" color="text.secondary">
          is a 2023 Indian Telugu language psychological action thriller film directed by Sudheer Varma from a story written by Srikanth Vissa. It is partially inspired from the Bengali thriller film Vinci Da. It has an ensemble cast featuring Ravi Teja, Jayaram, Sushanth, Murali Sharma, Anu Emmanuel, Megha Akash, Daksha Nagarkar and Pujita Ponnada.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );

}