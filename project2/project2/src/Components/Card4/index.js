import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Card4() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://e1.pxfuel.com/desktop-wallpaper/436/844/desktop-wallpaper-kgf-chapter-2-kgf-2.jpg"
          alt="KGF-3"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          KGF -2
          (
      <a href="https://in.bookmyshow.com/karimnagar/movies/kgf-chapter-2/ET00098647">  KGF -2
</a>
        );
          </Typography>
          <Typography variant="body2" color="text.secondary">
          is a 2018 Indian Kannada-language period action film[5] written and directed by Prashanth Neel, and produced by Vijay Kiragandur under the banner of Hombale Films. It is the first of two installments in the series, followed by K.G.F: Chapter 2. The film features an ensemble cast including Yash, Ramachandra Raju, Srinidhi Shetty, Vasishta N. Simha, Achyuth Kumar, Anant Nag, Archana Jois, T. S. Nagabharana, B. Suresha and Malavika Avinash.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );

}