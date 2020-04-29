import React from 'react';
import {Link, Grid , makeStyles}from '@material-ui/core/';
import Logo from './Logo';

const useStyles = makeStyles ({
    root: {
        flexGrow: 1,
    },
    menu: {
        alignItems: 'flex-end',
        textAlign:'right',
    },
    item:{
        paddingLeft:15
    }
});

const Navbar = (props) => {
    const  classes  = useStyles();
    return(
    <div>

        *NavBar*
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <Logo systemName={props.systemName}/>
            </Grid>
            <Grid className={classes.menu} item xs={9} display="flex" flexDirection="row-reverse">
                <Link
                    component="button"
                    variant="body1"
                    underline="none"
                    onClick={() => { console.info("Boton");   }}
                    className={classes.item}
                >
                   | Inicio |
                </Link>
                <Link
                    component="button"
                    variant="body1"
                    underline="none"
                    onClick={() => {
                        console.info("Boton");
                    }}
                    className={classes.item}
                >
                    Catalogo |
                </Link>
                <Link
                    component="button"
                    variant="body1"
                    underline="none"
                    onClick={() => {
                        console.info("Boton");
                    }}
                    className={classes.item}
                >
                    Inicio Sesion |
                </Link>
                <Link
                    component="button"
                    variant="body1"
                    underline="none"
                    onClick={() => {
                        console.info("Boton");
                    }}
                    className={classes.item}
                >
                    Registro |
                </Link>
            </Grid>
        </Grid>
    </div>
    )
};


export default Navbar;