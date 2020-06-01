import React from 'react';
import {Grid , makeStyles, Box}from '@material-ui/core/';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Logo from './Logo';
import './Navbar.css'
import Menu from "./Menu";
import MenuMob from "./MenuMob";



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

});

const Navbar = (props) => {
    const  classes  = useStyles();
    const preventDefault = (event) => event.preventDefault();
    return(
    <div class="Nav">

        *NavBar*
        <Grid container  spacing={3}>
            <Grid item xs={3}>
                <Logo systemName={props.systemName}/>
            </Grid>
            <Grid className={classes.menu} item xs={9} display="flex" flexDirection="row-reverse">
                <Typography className={classes.root}>
                    <Hidden smUp>
                        <MenuMob/>
                    </Hidden>
                    <Hidden xsDown>
                        <Menu/>
                </Hidden>
                </Typography>
            </Grid>
        </Grid>
    </div>
    )
};


export default Navbar;