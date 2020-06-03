import React from 'react';
import {Container, Grid} from "@material-ui/core";

import './Contenido.css'
import Card from './Card';
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";





const Contenido = (props) => {
    return (
        <Container maxWidth="ex">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={8}>
                    <h1>
                        <center>La mejor variedad en calzado para mujer!</center>
                    </h1>
                    <div className="letrita">
                    <p>
                        Bienvenido a nuestro sitio web!
                        <br/>
                        Aquí encontraras los zapatos de mejor calidad al mejor precio en el mercado, así como gran variedad de calzado para mujer.
                        <br/>
                        Somos una empresa responsable, con un negocio físico e incluso hacemos envíos a todo México.
                        <br/>
                        El mejor calzado del país.
                    </p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card src={'img/z6.jpg'} height={300}/>
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
        </Container>
    )
}

    export default Contenido;