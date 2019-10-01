import React from 'react'
import Nav from '../components/Nav'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      paddingLeft: '25px'
    },
    greet: {
        textTransform: 'none',
        fontSize: '18px'
    },
    img: {
        height: '200px',
        marginTop: '20px',
        borderRadius: '50%'
    }
}));

const About = () => {
    const classes = useStyles();
    return (
        <div>
            <title>Shadid</title>
            <Nav />

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <img src='/static/assets/1.jpg' className={classes.img}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="overline" className={classes.greet}>hi, there...</Typography>
                        <Typography variant="body1">
                        Welcome to my blog. I am Shadid, a software craftsman with a passion for web applications, everything computer science and video games :).
                        I love to  learn..I am continuously learning and seeking to explore new frontiers. Welcome to my world where we will solve interesting problems together and 
                        transform complication into simplicity.
                        </Typography>
                    </Grid>
                </Grid>
            </div>
            <style global jsx>{`
                * {
                padding: 0px;
                margin: 0px;
                }
            `}
            </style>
        </div>
    )
}

export default About
