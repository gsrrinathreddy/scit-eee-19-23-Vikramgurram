import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Card1() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://cdn.telugu.yousay.tv/wp-content/uploads/sites/2/2023/03/03110038/FqKF_A8aUAASLhd.jpg"
          
        
          alt="BALGAM"
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
           (
      <a href="https://in.bookmyshow.com/karimnagar/movies/balagam/ET00353571">BALGAM</a>
        );
       
  
      
          </Typography>
          <Typography variant="body2" color="text.secondary">
          is a 2023 Indian Telugu-language family drama film written and directed by actor Venu Yeldandi, in his directorial debut.[3] Balagam was released on 3 March 2023 to positive reviews with particular praise for direction, screenplay, story and acting performances by the lead cast

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );

}