import React from 'react';
import {Container,Box, makeStyles} from '@material-ui/core';
import Card from './Card'

const useStyles = makeStyles ({
    root: {
        marginTop:25,
        marginBottom: 25
    },

});

const Carousel = (props) => {
    const  classes  = useStyles();
    return (
        <Container maxWidth="ex" className={classes.root}>
            <Card src={'img/coso3.jpg'} height={400} />
        </Container>
    )
}
export default Carousel;
