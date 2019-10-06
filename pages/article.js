import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import { useRouter } from 'next/router'
import Markdown from '../components/Markdown'
import { makeStyles } from '@material-ui/core/styles'


import art1 from '../api/javaScript-callbacks-vs-promise-vs-observable.md'
import art2 from '../api/topics-to-learn-to-elevate-your-javaScript-mastery.md'

const useStyles = makeStyles(theme => ({
    articles: {
      padding: '25px'
    }
}));

const Article = () => {
    const router = useRouter()
    const classes = useStyles()

    const [currentArticle, setArticle] = useState(null)


    useEffect(() => {
        const { id } = router.query
        switch(id) {
            case 'javaScript-callbacks-vs-promise-vs-observable':
                setArticle(art1)
                break;
            case 'topics-to-learn-to-elevate-your-javaScript-mastery':
                setArticle(art2)
                break;
            default:
                break;
            
        }
    });

    if(!currentArticle) {
        return <div>Loading...</div>
    }

    return(
        <div>
            <title>Shadid</title>
            <Nav />
            <div className={classes.articles}>
                <Markdown>
                    {currentArticle}
                </Markdown>
            </div>
        </div>
    )
}

export default Article