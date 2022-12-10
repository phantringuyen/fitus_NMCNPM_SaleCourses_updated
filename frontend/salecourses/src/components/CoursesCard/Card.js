import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Card.css';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://riothcmus.github.io/assets/img/gallery/wedo.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Khóa học kĩ sư nhí wedo căn bản
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Khóa học dành cho trẻ em từ 6 đến 10 tuổi
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Tìm hiểu thêm</Button>
        <Button size="small">Đăng kí</Button>
      </CardActions>
    </Card>
  );
}