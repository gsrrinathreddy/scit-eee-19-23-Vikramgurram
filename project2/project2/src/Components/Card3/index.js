import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function Card3() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://www.cinefry.co.in/wp-content/uploads/2023/03/Das-Ka-Dhamki.jpg"
          alt="DAS KA DAMKI"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          DAS KA DAMKI
          (
      <a href="https://in.bookmyshow.com/karimnagar/movies/das-ka-dhamki/ET00344659"> DAS KA DAMKI</a>
        );
          </Typography>
          <Typography variant="body2" color="text.secondary">
          is a 2023 Indian Telugu-language action comedy thriller film directed by Vishwak Sen, from a story written by Prasanna Kumar Bezawada. It is produced by Karate Raju, Vishwak's father, under the banners, Vanmaye Creations and Vishwaksen Cinemas. It stars Vishwak Sen, Nivetha Pethuraj, Rao Ramesh, Rohini, Akshara Gowda, Hyper Aadhi, Mahesh Achanta, and Tharun Bhascker.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );

}