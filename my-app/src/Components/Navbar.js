import React from 'react';
import {Grid , makeStyles}from '@material-ui/core/';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Logo from './Logo';
import './Navbar.css'



const useStyles = makeStyles ({
    root: {
        flexGrow: 1,
        paddingLeft:15,
        paddingRight:15
    },
    menu: {
        alignItems: 'flex-end',
        textAlign:'right',

    },
    item:{
        paddingLeft:15,
        paddingRight:15
    }
});

const Navbar = (props) => {
    const  classes  = useStyles();
    const preventDefault = (event) => event.preventDefault();
    return(
    <div>

        *NavBar*
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <Logo systemName={props.systemName}/>
            </Grid>
            <Grid className={classes.menu} item xs={9} display="flex" flexDirection="row-reverse">
                <Typography className={classes.root}>
                    <Link href="../App2.js" variant="body1" onClick={preventDefault}>

                   | Inicio |
                </Link>

                    <Link href="../App2.js" variant="body1" onClick={preventDefault}>
                    Catalogo |
                </Link>

                    <Link href="../App2.js" variant="body1" onClick={preventDefault}>
                    Inicio Sesion |
                </Link>

                    <Link href="../App2.js" variant="body1" onClick={preventDefault}>
                    Registro |
                </Link>
                </Typography>
            </Grid>
        </Grid>
    </div>
    )
};


export default Navbar;