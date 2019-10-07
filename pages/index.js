import React, { useState } from 'react'
import Nav from '../components/Nav'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { useRouter } from 'next/router'
import { indexStyles } from './styles/index'

const useStyles = makeStyles(indexStyles());

const Home = () => {
  const classes = useStyles()
  const router = useRouter()

  const [posts, setPosts] = useState([
    {
      id: 'javaScript-callbacks-vs-promise-vs-observable',
      img: '/static/assets/javaScript-callbacks-vs-promise-vs-observable.png',
      title: 'JavaScript Callbacks vs Promise vs Observable in Plain English',
      body: 'A brief comparison with examples'
    },
    {
      id: 'topics-to-learn-to-elevate-your-javaScript-mastery',
      img: '/static/assets/js.jpg',
      title: 'Topics to Learn to Elevate Your JavaScript Mastery',
      body: 'What really makes you a javascript rockstar'
    }
  ]);

  const goToArticle = (id) => {
    router.push(`/article?id=${id}`)
  }

  return(
    <div>
      <title>Shadid</title>
      <Nav />

      <div>
        <Grid container spacing={12}>
        <Grid item sm={6} xs={12}>
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
                    <Button 
                      variant="contained" 
                      color="primary" 
                      className={classes.button}
                      onClick={() => {goToArticle(post.id)} }
                    >
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
