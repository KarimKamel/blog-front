import React from 'react';
import Card from './card';
import { Container, Row, Col } from 'react-bootstrap';

const Articles = ({ articles }) => {
	return (
		<Container className='mt-5'>
			<Row xs={1} sm={1} md={2} lg={2} xl={3}>
				{articles.map((article, i) => {
					return (
						<Col key={`card__${article.slug}`}>
							<Card article={article} key={`article__${article.slug}`} />
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};

export default Articles;
