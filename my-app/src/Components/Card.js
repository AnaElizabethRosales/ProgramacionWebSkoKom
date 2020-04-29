import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from "@material-ui/core/CardMedia";

export default function SimpleCard(props) {
    // const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>;

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