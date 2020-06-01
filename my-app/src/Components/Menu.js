import React from 'react';
import {Grid , makeStyles, }from '@material-ui/core/';
import Link from '@material-ui/core/Link';

import './Navbar.css'



const useStyles = makeStyles ({
    item:{
        paddingLeft:15,
        paddingRight:15
    }
});

const Menu = (props) => {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();
     return(
         <div>
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
         </div>
     )

}
export default Menu;