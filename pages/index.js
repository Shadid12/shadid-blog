import React from 'react'
import Nav from '../components/Nav'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginLeft: '25px',
    marginRight: '25px',
    padding: '20px',
    display: 'flex'
  },
  img: {
    height: '50px',
    marginTop: '20px',
    borderRadius: '50%',
    paddingRight: '10px'
  }
}));

const Home = () => {
  const classes = useStyles()

  return(
    <div>
      <title>Shadid</title>
      <Nav />

      <div>
        <Grid container spacing={3}>
        <Grid item sm={4} >
          <Paper className={classes.root}>
            <img src='/static/assets/1.jpg' className={classes.img}/>
            <div>
              <Typography variant="h6" component="h3">
                This is a sheet of paper.
              </Typography>
              <Typography component="p">
                Paper can be used to build surface or other elements for your application.
              </Typography>
            </div>
          </Paper>
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

export default Home
