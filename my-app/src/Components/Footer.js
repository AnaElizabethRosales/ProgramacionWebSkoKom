import React from "react";
import {Container, Grid} from "@material-ui/core";
import './Footer.css';

const Footer = (props) => {
    return (
        <Container class="Cont" maxWidth="ex">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <a href="#" className="#">
                        Visita nuestra tienda fisica
                    </a>
                    <br/>
                    <a href="#" className="#">
                        Informacion de envios
                    </a>
                    <br/>
                    <a href="#" className="#">
                        Terminos de uso
                    </a>
                    <br/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <a href="#" className="#">
                        Zapatos
                    </a>
                    <br/>
                    <a href="#" className="#">
                        Contacto
                    </a>
                    <br/>
                    <a href="#" className="#">
                        Ayuda
                    </a>
                    <br/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <a href="#" className="#" >
                        Inicio
                    </a>
                    <br/>
                    <a href="#" className="#">
                        Catalogo
                    </a>
                    <br/>
                    <a href="#" className="#">
                        Contacto
                    </a>
                    <br/>
                </Grid>

            </Grid>
        </Container>
    )
}

export default Footer;