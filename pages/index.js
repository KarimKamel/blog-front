import React from 'react';
import Articles from '../components/articles';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { fetchAPI } from '../lib/api';
import '../styles/Home.module.css';

const Home = ({ articles, categories, homepage }) => {
	return (
		<Layout categories={categories}>
			<Seo seo={homepage.seo} />

			{/* <h1>{homepage.hero.title}</h1> */}
			<Articles articles={articles} />
		</Layout>
	);
};

export async function getStaticProps() {
	console.log('making API calls from index');
	// Run API calls in parallel
	const [articles, categories, homepage] = await Promise.all([
		fetchAPI('/articles?status=published'),
		fetchAPI('/categories'),
		fetchAPI('/homepage'),
	]);

	return {
		props: { articles, categories, homepage },
		revalidate: 1,
	};
}

export default Home;
