import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import { useRouter } from 'next/router'
import articles from '../api/articles'
import ReactMarkdown from 'react-markdown'
import art1 from '../api/javaScript-callbacks-vs-promise-vs-observable.md'
import SyntaxHighlighter from 'react-syntax-highlighter';


class CodeBlock extends React.PureComponent {
  
    render() {
      const { language, value } = this.props;
  
      return (
        <SyntaxHighlighter language='javascript'>
          {value}
        </SyntaxHighlighter>
      );
    }
  }

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
                <ReactMarkdown source={art1} 
                    renderers={{
                        code: CodeBlock,
                    }}
                />
            </div>
        </div>
    )
}

export default Article