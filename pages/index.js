import React, { useState } from 'react'
import Nav from '../components/Nav'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginLeft: '25px',
    marginRight: '25px',
    padding: '20px',
    display: 'flex'
  },
  paper: {
    marginBottom: '10px',
    backgroundColor: '#f06292'
  },
  img: {
    height: '50px',
    marginTop: '20px',
    borderRadius: '50%',
    paddingRight: '10px'
  },
  button: {
    margin: theme.spacing(1),
    textTransform: 'none'
  },
  p: {
    backgroundColor: '#40c4ff',
    padding: '5px',
    borderRadius: '5px'
  }
}));

const Home = () => {
  const classes = useStyles()

  const [posts, setPosts] = useState([
    {
      id: '1',
      img: '/static/assets/1.jpg',
      title: 'Article number 1',
      body: 'Short Summary of the existing article'
    },
    {
      id: '2',
      img: '/static/assets/1.jpg',
      title: 'Article number 2',
      body: 'Short Summary of the existing article'
    }
  ]);

  return(
    <div>
      <title>Shadid</title>
      <Nav />

      <div>
        <Grid container spacing={3}>
        <Grid item sm={4} >
          <Typography variant="h5" component="h3" className={classes.root}>
            Recent Articles
          </Typography>
          {
            posts.map(post => {
              return(
                <Paper className={`${classes.root} ${classes.paper}`} key={post.id}>
                  <img src={post.img} className={classes.img}/>
                  <div>
                    <Typography variant="h6" component="h3">
                      {post.title}
                    </Typography>
                    <Typography component="p" className={classes.p}>
                      {post.body}
                    </Typography>
                    <Button variant="contained" color="primary" className={classes.button}>
                      Read More
                    </Button>
                  </div>
                </Paper>
              )
            })
          }
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
