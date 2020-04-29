import React from 'react';
import {Container, Grid} from "@material-ui/core";
import Imagen from "./Carousel";
import Card from './Card';

const Contenido = (props) => {
    return (
        <Container maxWidth="ex">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={8}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto distinctio dolor ducimus excepturi ipsum magni maiores, obcaecati officia optio rem repellat repellendus rerum sint sit ullam voluptas. Earum, recusandae.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet aperiam aspernatur assumenda distinctio ea facilis in iste laboriosam neque odit, quisquam quos recusandae sapiente soluta totam velit, voluptatem, voluptates?

                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card src={'img/z6.jpg'} height={300}/>
                </Grid>

            </Grid>
        </Container>
    )
}

    export default Contenido;