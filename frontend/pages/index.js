// 'use client';
import Head from 'next/head';

import React from 'react';
import styles from '../styles/Login.module.css';
import Link from 'next/link';

const Login = () => {
	const handleLogin = () => {
		// Lógica para sair do app
		console.log('Usuário entrou do app');
	};
	return (
		<div className={styles.container}>
			<h1>Login</h1>
			<form className={styles.form}>
				<input type='text' placeholder='Email' className={styles.input} />
				<input type='password' placeholder='Senha' className={styles.input} />
				<button type='submit' className={styles.button}>
					<Link href='/dashboard'>Entrar</Link>
				</button>
			</form>
		</div>
	);
};

export default Login;
