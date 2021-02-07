import Articles from '../components/articles';
import { useState, useEffect } from 'react';
import { fetchAPI } from '../lib/api';
import Layout from '../components/layout';
import Seo from '../components/seo';
// import styles from './search.module.css';
import { useRouter } from 'next/router';
var qs = require('qs');

const Search = ({ categories }) => {
	const [searchResults, setSearchResults] = useState('');
	const router = useRouter();
	const searchTerm = router.query.title;
	const seo = {
		metaTitle: searchTerm,
		metaDescription: `All articles related to ${searchTerm}`,
	};

	useEffect(() => {
		const getSearchResults = async () => {
			const query = qs.stringify({
				_where: [{ title_contains: searchTerm }],
			});

			const results = await fetchAPI(`/articles?${query}`);
			setSearchResults(results);
		};
		getSearchResults();
	}, [searchTerm]);

	return (
		<Layout categories={categories}>
			<Seo seo={seo} />
			<div className='uk-section'>
				<h1>seach results for "{searchTerm}"</h1>
				{searchResults && <Articles articles={searchResults} />}
			</div>
		</Layout>
	);
};

export async function getStaticProps() {
	const categories = await fetchAPI('/categories');

	return {
		props: { categories },
		revalidate: 1,
	};
}

export default Search;
