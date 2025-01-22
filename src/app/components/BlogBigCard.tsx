import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
}

const BlogCard: React.FC<BlogCardProps> = (props) => {
  const hasImage = true; // Set this to false if there's no image

  return (
    <Card
      sx={{
        maxWidth: '100%', // Take full width of the container
        height: '100%', // Stretch card to fit its container
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 3, // Add slight shadow for visual effect
      }}
    >
      {/* Image Section */}
      {hasImage && (
        <CardMedia
          component="img"
          alt="Blog Thumbnail"
          image={props.image}  // Fix the incorrect image binding here
          sx={{
            width: '100%', // Make image take the full width of the container
            height: {
              xs: '270px',  // Maintain aspect ratio for small screens
              md: '500px', // Fixed height for medium and larger screens
              padding: '16px',
            },
            objectFit: 'cover', // Ensure the image is cropped correctly
          }}
        />
      )}
      {/* Content Section */}
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {props.title}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            whiteSpace: 'normal', // Allow text to break into multiple lines
            overflow: 'hidden',   // Hide overflowed text
            wordWrap: 'break-word', // Ensure long words break and wrap
            textOverflow: 'ellipsis', // Optional: Add ellipsis for overflowed text
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
           
          }}
        >
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
