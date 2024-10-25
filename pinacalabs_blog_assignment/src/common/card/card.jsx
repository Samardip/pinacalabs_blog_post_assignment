import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function BlogCard({ imgSrc, title, description }) {
  return (
    <Card sx={{
      height: '100%',
      transition: 'transform 0.3s ease-in-out', // Smooth transition
      '&:hover': {
        transform: 'scale(1.05)', // Zoom effect on hover
        boxShadow: '0 8px 16px rgba(0,0,0,0.2)', // Add shadow on hover
      },
    }}>
      <CardActionArea
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'baseline',
          justifyContent: 'flex-start'
        }}
      >
        <CardMedia
          sx={{ height: '300px', maxHeight: '200px' }}
          component="img"
          image={imgSrc ? imgSrc : './assests/default.png'}
          alt="card cover"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title.length > 20 ? title.slice(0, 20) + '...' : title}
          </Typography>
          <Typography variant="body2" sx={{ color: '' }}>
            {description.length > 50 ? description.slice(0, 50) + '...' : description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}