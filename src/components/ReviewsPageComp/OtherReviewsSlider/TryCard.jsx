import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';





export const ReviewCard = ({review}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{}}  
          component="img"
          height="50"
          image={review.user.avatar}
          alt="Paella dish"
           aria-label="recipe">
            
          </Avatar>
        }
   
        
        title={review.user.username}
        subheader={review.type}
      />
      <CardMedia
        component="img"
        height="194"
        image={review.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {review.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          
        </IconButton>
      </CardActions>
    
    </Card>
  );
}