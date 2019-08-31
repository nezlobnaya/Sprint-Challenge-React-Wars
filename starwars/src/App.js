import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Card from './components/Card/Card';
import { makeStyles, createStyles, Theme, Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(5),
            fontSize: '3rem',
            textAlign: 'center',
            color: 'white',
            backgroundColor: 'rgb(36, 97, 26)'
        },
    }),
);

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [heroes, setHeroes] = useState([]);
  const classes = useStyles();

  useEffect(() => {
      axios
          .get("https://swapi.co/api/people/")
          .then(res => {
              console.log(res);
              const allHeroes = res.data.results;
              setHeroes(allHeroes);
          })
          .catch(error =>
              console.log("Something's gone wrong: ", error)
          )
  }, []);
  return (
      <div className={classes.root}>
          <Grid container spacing={4} justify="center">
          <Grid item xs={12}>
          <Paper className={classes.paper}>Star Wars Heroes</Paper>
          </Grid>
          
             { heroes.map((hero, index) => { 
              return (
                
                <Grid key={ index } item  xs={12} sm={6} md={4}  lg={3}>
                    <Card
                        name = {hero.name}
                        birthYear = {hero.birth_year}
                        gender = {hero.gender}
                        mass = {hero.mass}
                        height = {hero.height}
                        eyeColor = {hero.eye_color}
                        skinColor = {hero.skin_color}
                        hairColor = {hero.hair_color}
                        />
                </Grid>)}
            )}

          </Grid>
      </div>
    );
}

export default App;
