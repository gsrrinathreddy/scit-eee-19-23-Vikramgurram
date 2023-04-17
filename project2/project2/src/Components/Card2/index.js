import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Card2() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/03/dasara-movie-review-002.jpg"
          alt="DASARA"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          DASARA 
          (
      <a href="https://in.bookmyshow.com/karimnagar/movies/dasara/ET00316318">DASARA</a>
        );
          </Typography>
          <Typography variant="body2" color="text.secondary">
          is a 2023 Indian Telugu-language period action drama film written and directed by debutant Srikanth Odela. It stars an ensemble cast of Nani, Keerthy Suresh, Dheekshith Shetty, Shine Tom Chacko, Samuthirakani, Sai Kumar and Poorna. The film is set in the backdrop of Singareni coal mines near Godavarikhani of Telangana.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );

}