import React from 'react';
import { createStyles, makeStyles, Card, CardActionArea, CardMedia, CardContent, Typography }  from '@material-ui/core';
import img from "./starwars.png"

const useStyles = makeStyles(
    createStyles({
        card: {
            minWidth: 300,
            maxWidth: 380,
            minHeight: 360,
            maxHeight: 500,
            // '&:hover': {
            //     
            //  },
             '&:hover': {
                transform: 'translateY(-3px) scale(1.02)',
                transition: 'all 0.3s',
                background: "rgb(242, 255, 247)"
                }
    
        },
        media:{
            height: 240,

        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
    }),
);

export default function SimpleCard({ name,  birthYear, gender, eyeColor, mass, height, skinColor, hairColor }) {
    const classes = useStyles();
    return (
    <Card className={classes.card}>
        <CardActionArea>

        <CardMedia className = {classes.media}
            component="img"
            alt="super hero"
            height="140"
            image={img}
            title="super hero"
        />
        <CardContent>
            <Typography variant="h5" component="h2" className={classes.title}>  </Typography>
            <Typography variant="h5" component="h2"> Name: {name} </Typography>
            <Typography className={classes.pos} color="textPrimary">
                Year of birth: {birthYear} <br/>
                Gender : {gender} <br/>
                Mass: {mass} <br/>
                Height: {height} <br/>
                Eye Color: {eyeColor} <br/>
                Skin Color: {skinColor} <br/>
                Hair Color: {hairColor}
            </Typography>
        </CardContent>

        </CardActionArea>
    </Card>
);
}