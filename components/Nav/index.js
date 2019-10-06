import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Router from 'next/router'
import Slide from '@material-ui/core/Slide'
import CssBaseline from '@material-ui/core/CssBaseline'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import AppBar from '@material-ui/core/AppBar';

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
    },
    appBar: {
        backgroundColor: '#304ffe'
    },
    btn: {
        color: 'white',
        textTransform: 'none'
    }
}));


function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

const Nav = (props) => {
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
                <CssBaseline />
                <HideOnScroll {...props}>
                <AppBar className={classes.appBar}>
                    <Toolbar className={classes.main}>
                        <Button onClick={goToHome} className={classes.btn}>Home</Button>
                        <Typography variant="h5">Shadid's Blog</Typography>
                        <Button onClick={goToAbout} className={classes.btn}>About</Button>
                    </Toolbar>
                </AppBar>
                </HideOnScroll>
            </Grid>
        </Grid>
        </div>
    )
}

export default Nav