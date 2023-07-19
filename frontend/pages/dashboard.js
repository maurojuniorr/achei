import React, { useState } from 'react';
import Posts from './posts';
import styles from '../styles/Dashboard.module.css';
import Link from 'next/link';
const Dashboard = () => {
	const [showPosts, setShowPosts] = useState(false);

	const handleTogglePosts = () => {
		setShowPosts(!showPosts);
	};

	const handleLogout = () => {
		// Lógica para sair do app
		console.log('Usuário saiu do app');
	};

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h1>Achei</h1>
				<button className={styles.logoutButton} onClick={handleLogout}>
					<Link href='/'>Sair</Link>
				</button>
			</header>
			<div className={styles.contentContainer}>
				<div className={styles.sidebar}>
					<ul className={styles.menu}>
						<li>
							<Link href='/posts'>Posts</Link>
						</li>
					</ul>
				</div>
				<div className={styles.content}>
					<h2>Página Inicial Administrativa</h2>

					{showPosts && (
						<div className={styles.postsContainer}>
							<Posts />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
