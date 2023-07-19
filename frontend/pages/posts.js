'use client';
import postsData from './posts.json';
import React, { useEffect, useState } from 'react';
import styles from '../styles/Posts.module.css';

const Posts = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		// Simulação de uma chamada assíncrona para carregar os posts
		const fetchData = async () => {
			try {
				const response = await fetch('/api/posts'); // Supondo que tenhamos uma API para obter os posts
				const data = await response.json();
				setPosts(postsData);
			} catch (error) {
				console.error('Erro ao carregar os posts:', error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className={styles.container}>
			<h1>Posts</h1>
			<div className={styles.postsList}>
				{postsData.map((post) => (
					<div key={post.id} className={styles.postItem}>
						<div className={styles.postHeader}>
							<img
								src={post.image}
								alt={`Post ${post.id}`}
								className={styles.postAvatar}
							/>
							<p className={styles.postUsername}>{post.commentedBy}</p>
						</div>
						<img
							src={post.image}
							alt={`Post ${post.id}`}
							className={styles.postImage}
						/>
						<div className={styles.postFooter}>
							<p className={styles.comment}>{post.comment}</p>
							<p className={styles.meta}>{post.date}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Posts;
