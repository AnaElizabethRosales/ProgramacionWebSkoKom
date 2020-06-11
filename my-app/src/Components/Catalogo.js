import React from 'react';
import { Grid, makeStyles} from '@material-ui/core';
import Card from "./Card";
import './Catalogo.css';
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        borderRadius:0
    },
});

const Catalogo = () => {
    const  classes  = useStyles();
    return (
        <div className={classes.root} >

            <Grid container spacing={3} >
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card src={'img/z6.jpg'} height={140}/>
                        <CardActions>
                            <Button variant="contained" color="brown" href="#contained-buttons">
                               Visitar
                            </Button>
                            <Button variant="contained" color="brown" href="#contained-buttons">
                                Comprar
                            </Button>
                        </CardActions>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card src={'img/z1.jpg'} height={140} />
                        <CardActions>
                            <Button variant="contained" color="brown" href="#contained-buttons">
                                Visitar
                            </Button>
                            <Button variant="contained" color="brown" href="#contained-buttons">
                                Comprar
                            </Button>
                        </CardActions>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card src={'img/z2.jpg'}  height={140} />
                        <CardActions>
                            <Button variant="contained" color="brown" href="#contained-buttons">
                                Visitar
                            </Button>
                            <Button variant="contained" color="brown" href="#contained-buttons">
                                Comprar
                            </Button>
                        </CardActions>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card src={'img/z3.jpg'}  height={140} />
                        <CardActions>
                            <Button variant="contained" color="brown" href="#contained-buttons" align={'center'}>
                                Visitar
                            </Button>
                            <Button variant="contained" color="brown" href="#contained-buttons">
                                Comprar
                            </Button>
                        </CardActions>
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card src={'img/z4.jpg'} height={140}/>
                        <CardActions>
                            <Button variant="contained" color="brown" href="#contained-buttons">
                                Visitar
                            </Button>
                            <Button variant="contained" color="brown" href="#contained-buttons">
                                Comprar
                            </Button>
                        </CardActions>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card src={'img/z5.jpg'} height={140} />
                        <CardActions>
                            <Button variant="contained" color="brown" href="#contained-buttons">
                                Visitar
                            </Button>
                            <Button variant="contained" color="brown" href="#contained-buttons">
                                Comprar
                            </Button>
                        </CardActions>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card src={'img/z6.jpg'}  height={140} />
                        <CardActions>
                            <Button variant="contained" color="brown" href="#contained-buttons">
                                Visitar
                            </Button>
                            <Button variant="contained" color="brown" href="#contained-buttons">
                                Comprar
                            </Button>
                        </CardActions>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card src={'img/z13.jpg'}  height={140} />
                        <CardActions>
                            <Button variant="contained" color="brown" href="#contained-buttons">
                                Visitar
                            </Button>
                            <Button variant="contained" color="brown" href="#contained-buttons">
                                Comprar
                            </Button>
                        </CardActions>
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card src={'img/z8.jpg'} height={140}/>
                        <CardActions>
                            <Button variant="contained" color="brown" href="#contained-buttons">
                                Visitar
                            </Button>
                            <Button variant="contained" color="brown" href="#contained-buttons">
                                Comprar
                            </Button>
                        </CardActions>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card src={'img/z9.jpg'} height={140} />
                        <CardActions>
                            <Button variant="contained" color="brown" href="#contained-buttons">
                                Visitar
                            </Button>
                            <Button variant="contained" color="brown" href="#contained-buttons">
                                Comprar
                            </Button>
                        </CardActions>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card src={'img/z10.jpg'}  height={140} />
                        <CardActions>
                            <Button variant="contained" color="brown" href="#contained-buttons">
                                Visitar
                            </Button>
                            <Button variant="contained" color="brown" href="#contained-buttons">
                                Comprar
                            </Button>
                        </CardActions>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card src={'img/z11.jpg'}  height={140} />
                        <CardActions>
                            <Button variant="contained" color="brown" href="#contained-buttons">
                                Visitar
                            </Button>
                            <Button variant="contained" color="brown" href="#contained-buttons">
                                Comprar
                            </Button>
                        </CardActions>
                    </Grid>
                </Grid>
            </Grid>
        </div>

    );

}



export default Catalogo;
