import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import { useRouter } from 'next/router'
import articles from '../api/articles'
import ReactMarkdown from 'react-markdown'
import art1 from '../api/javaScript-callbacks-vs-promise-vs-observable.md'

const Article = () => {
    const router = useRouter()

    const [currentArticle, setArticle] = useState(null)


    useEffect(() => {
        const { id } = router.query
        setArticle(articles.articles[id])
    });

    if(!currentArticle) {
        return <div>Loading...</div>
    }

    return(
        <div>
            <title>Shadid</title>
            <Nav />
            <div className=''>
                <ReactMarkdown source={art1}/>
            </div>
        </div>
    )
}

export default Article