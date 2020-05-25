import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import CardMedia from "@material-ui/core/CardMedia";
import './Card.css';


export default function SimpleCard(props) {


const useStyles = makeStyles({
    root: {

        borderRadius:0
    },
    media: {
        height: props.height,
    },
});
const classes = useStyles();
console.log();


    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={props.src}
                title={props.title}
            />
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                </Typography>
            </CardContent>


        </Card>
    );
}