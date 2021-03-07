import React from 'react'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import mainTheme from '../../thems/main-them';

// --------------------------------------------------------

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            flexGrow: 1,
            textAlign: "left",
            margin: 0,
            marginBottom: "16px"
        },
        textField: {
            display: "block",
            marginBottom: "10px"
        }

    }),
);

// ----------------------------------------------
const SearchBarComponent = () => {

    const classes = useStyles();
    // ----------------------------------------------

    return (
        <ThemeProvider theme={mainTheme}>
            <h3 className={classes.title}>Find reviews:</h3>
            <TextField
                label="Adress"
                variant="outlined"
                className={classes.textField}
                onChange={(value) => { console.log('address alue', value.target.value) }}
            />

            <TextField
                label="Name"
                variant="outlined"
                className={classes.textField}
                onChange={(value) => { console.log('name value', value.target.value) }}
            />
        </ThemeProvider>
    )
}

export default SearchBarComponent
