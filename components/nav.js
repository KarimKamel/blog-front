import React, { useState } from 'react';
import Link from 'next/link';
import styles from './nav.module.css';
import {
	Navbar,
	Form,
	FormControl,
	Button,
	Nav as NavI,
} from 'react-bootstrap';
import Router from 'next/router';

const Nav = ({ categories }) => {
	const [search, setSearch] = useState('');
	const handleChange = (event) => {
		setSearch(event.target.value);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(Router.pathname);
		if (Router.pathname === '/search') {
			Router.replace({
				pathname: '/search',
				query: { title: search },
			});
		} else {
			Router.push({
				pathname: '/search',
				query: { title: search },
			});
		}
	};
	return (
		<Navbar bg='light' expand='lg'>
			<Navbar.Brand>
				<Link href='/'>
					<a className={styles.anchorTag}>MY-BLOG</a>
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<NavI className='w-100'>
					{categories &&
						categories.map((category) => {
							return (
								<Link
									key={category.id}
									as={`/category/${category.slug}`}
									href='/category/[id]'
								>
									<a className={styles.anchorTag}>{category.name}</a>
								</Link>
							);
						})}

					{/* <Form className='ml-auto' onSubmit={`/search/${search}`} inline> */}
					<Form className='ml-auto' onSubmit={handleSubmit} inline>
						<FormControl
							type='text'
							placeholder='Search'
							className='mr-sm-2'
							onChange={handleChange}
						/>
						<Button type='submit' variant='outline-primary'>
							Search
						</Button>
					</Form>
				</NavI>
			</Navbar.Collapse>{' '}
		</Navbar>
	);
};

export default Nav;
