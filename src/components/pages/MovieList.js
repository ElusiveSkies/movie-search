import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    width: "100%",
  },
  movieCard: {
    color: "white",
    fill: "white",
    borderRadius: "10px !important",
    margin: "40px !important",
    height: "fit-content"
  },
  cardTitle: {
    fontSize: "2rem !important",
    textAlign: "center",
    backgroundColor: "black",
    color: "white",
  },
  cardRelease: {
    fontSize: "1.5rem !important",
    textAlign: "center",
    "@media (max-width: 900px)": {
      fontSize: "1rem !important",
    },
  },
  cardDesc: {
    fontSize: "0.75rem",
    color: "black",
  },
  cardScore: {
    fontSize: "1.75rem",
    alignContent: "center !important",
    textAlign: "center",
    alignSelf: "center",
    paddingBottom: "10px",
  }
}));

function MovieList(props) {
  const { cardContainer, movieCard, cardTitle, cardRelease, cardDesc, cardScore } = useStyles();

  return (
    <Grid container className={cardContainer} boxShadow={4}>
      {props.result.map((movies) => (
        <Grid xs={12} md={4} lg={2} className={movieCard} boxShadow={10} key={movies.id}>
          <Card>
            <Typography className={cardTitle} gutterBottom variant="h5" component="div">
              {movies.title}
            </Typography>
            <CardMedia
              component="img"
              image={"https://image.tmdb.org/t/p/original/" + movies.poster_path}
              alt={movies.title}
            />
            <CardContent>
              <Typography className={cardRelease} gutterBottom variant="h5" component="div">
                Release Date: ({movies.release_date})
              </Typography>
              <Typography className={cardDesc} >
                {movies.overview}
              </Typography>
            </CardContent>
            <Card className={cardScore}>

              Score: {movies.vote_average}
            </Card>
          </Card>
        </Grid>
      ))}
    </Grid>

  );
}

export default MovieList;
