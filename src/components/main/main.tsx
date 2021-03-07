import React from 'react'
import SearchBarComponent from '../search-bar/search-bar';
import ResultsComponent from '../results/results';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

// --------------------------------------------------------

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        main: {
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(2)
        },

    }),
);
// --------------------------------------------------------


const MainComponent = () => {

    const classes = useStyles();
    // ----------------------------------------------

    return (
        <main className={classes.main}>
            <SearchBarComponent/>
            <ResultsComponent/>
        </main>
    )
}

export default MainComponent
