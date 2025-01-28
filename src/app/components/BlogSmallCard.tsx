import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";

interface ImgMediaCardProps {
  title: string;
  description: string;
  href: number;
  image: string;
}

const ImgMediaCard: React.FC<ImgMediaCardProps> = (props) => {
  const hasImage = true; // Set this to false if you don't have an image

  return (
    <Card
      sx={{
        maxWidth: 400,
        padding: "16px", // Add padding to the card
        boxShadow: 3, // Optional: add a shadow for a better visual effect
        borderRadius: "8px", // Optional: rounded corners
        
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height={hasImage ? "180" : "180"} // Ensure a consistent height
        image={hasImage ? props.image : ""}
        sx={{
          height: hasImage ? "180px" : "180px", // Consistent height for the image
          objectFit: hasImage ? "cover" : "none", // Ensure it looks good even without the image
        }}
      />
      <CardContent
        sx={{
          paddingBottom: "14px", // More space at the bottom of the content
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <div
        className="post-description"
        style={{
          color: "text.secondary",
          whiteSpace: "normal", // Ensures text wraps as expected
          overflow: "hidden", // Prevents any overflowing content
          textOverflow: "ellipsis", // Optionally adds an ellipsis if text overflows
          wordWrap: 'break-word', 
          WebkitLineClamp: 2,  // Limit to 3 lines (optional)
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
         
        }}
        dangerouslySetInnerHTML={{ __html: props.description }} // Render HTML content
      />
      </CardContent>
      <CardActions>
        <Link
          href={`/Blog/${props.href + 1}`}
          className="border px-3 py-1 rounded-md text-white bg-green-700 hover:bg-green-600"
        >
          Read More
        </Link>
      </CardActions>
    </Card>
  );
};

export default ImgMediaCard;
