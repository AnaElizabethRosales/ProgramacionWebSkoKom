import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function BasicTextFields() {
    const classes = useStyles();

    return (
        <div>
            <h3>Llena el formulario para que podamos contactarnos! >D</h3>

        <form className={classes.root} noValidate autoComplete="off">

            <TextField id="outlined-basic" label="Correo" variant="outlined" margin={'normal'} size={"medium"} />
            <TextField id="outlined-basic" label="Nombre" variant="outlined" margin={'normal'}/>
            <TextField id="outlined-basic" label="Telefono" variant="outlined" margin={'normal'} />
            <Button variant="contained" color="secondary">
                Secondary
            </Button>
        </form>

        </div>
    );
}