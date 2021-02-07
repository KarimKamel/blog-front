import React from 'react';
import Link from 'next/link';
import Image from './image';
import { Card as CardI, Button } from 'react-bootstrap';
import styles from './card.module.css';

const Card = ({ article }) => {
	return (
		<Link as={`/article/${article.slug}`} href='/article/[id]'>
			<a className={styles.anchorTag}>
				<CardI className='mb-3'>
					<Image image={article.image} />

					<CardI.Body>
						<CardI.Title>{article.title}</CardI.Title>
						<CardI.Text>{article.description}</CardI.Text>
					</CardI.Body>
				</CardI>
			</a>
		</Link>
	);
};

export default Card;
