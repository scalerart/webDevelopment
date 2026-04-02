import React, { useEffect, useState } from 'react'
import News from './News';
import Container from 'react-bootstrap/esm/Container';

function TopHeadline() {
    const [news, setNews] = useState([])

    useEffect(() => {
        const url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=11f83c9e0d0840e88c5f8f4bb8ad979c";
        fetch(url)
            .then(res => res.json())
            .then(data => setNews(data.articles))
    }, [])

    return (
        <section>
            <Container fluid className='px-4 mt-3 d-flex flex-column gap-4'>
                {
                    news.map((news, i) =>
                        <News
                            key={i}
                            news={news}
                        />
                    )
                }
            </Container>
        </section>
    )
}

export default TopHeadline