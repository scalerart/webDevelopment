import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

function News({ news }) {
    const { urlToImage, title, description, author, publishedAt } = news;
    console.log(news);
    return (
        <section>
            <Container fluid className='px-4 pb-4 border-bottom border-1 border-gray'>
                <div className='d-flex justify-content-between align-items-center'>
                    <span className='w-25'>{publishedAt}</span>
                    <div className='w-50'>
                        <h4>{title}</h4>
                        <p>{description}</p>
                        <span>{author}</span>
                    </div>
                    <img className='w-20' style={{ width: '18rem' }} src={urlToImage} alt="" />
                </div>
            </Container>
        </section>
    )
}

export default News