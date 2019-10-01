import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Router from 'next/router'

const useStyles = makeStyles(theme => ({
    nav: {
      flexGrow: 1,
      paddingLeft: '25px',
      paddingRight: '25px',
    },
    main: {
        paddingLeft: '0px',
        paddingRight: '0px',
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
    }
}));

const Nav = () => {
    const classes = useStyles()

    const goToAbout = () => {
        Router.push('/about')
    }
    const goToHome = () => {
        Router.push('/')
    }
    return (
        <div className={classes.nav}>
        <Grid container spacing={3}>
            <Grid item xs={12} >
                <Toolbar className={classes.main}>
                    <Button onClick={goToHome}>Home</Button>
                    <Typography variant="h5">Shadid's Blog</Typography>
                    <Button onClick={goToAbout}>About</Button>
                </Toolbar>
            </Grid>
        </Grid>
        </div>
    )
}

export default Nav