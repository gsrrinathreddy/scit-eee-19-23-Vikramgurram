import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Movies() {
  return (
    <ImageList sx={{ width: 1500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Movies</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://cdn.telugu.yousay.tv/wp-content/uploads/sites/2/2023/03/03110038/FqKF_A8aUAASLhd.jpg',
    title: 'BALGAM',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/03/dasara-movie-review-002.jpg',
    title: 'DASARA',
    
  },
  {
    img: 'https://www.cinefry.co.in/wp-content/uploads/2023/03/Das-Ka-Dhamki.jpg',
    title: 'DAS KA DHAMKI',
    
  },
  {
    img: 'https://e1.pxfuel.com/desktop-wallpaper/436/844/desktop-wallpaper-kgf-chapter-2-kgf-2.jpg',
    title: 'KGF PART2',
    
    cols: 2,
  
  },
];