import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// In our return method, we use the map method to return a new array of `li` and `img` elements that are specific to each search result
function MovieList(props) {
  console.log(props.result);
  // props.result.map((movies) => console.log(movies.poster_path))

  return (
    <Container>
      <Grid container>
      {props.result.map((movies) => (
        <Grid item className="list-group-item" key={movies.id}>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="300"
        image={"https://image.tmdb.org/t/p/original/"+movies.poster_path}
        alt={movies.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movies.title} <div>({movies.release_date})</div>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movies.overview}
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small">Share</Button>
      </CardActions>
    </Card>

        </Grid>
))}
  </Grid>
    </Container>
  
    ); 
}

export default MovieList;
