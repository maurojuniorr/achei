import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
	const handleLogout = () => {
		// Lógica para sair do app
		console.log('Usuário saiu do app');
	};

	return (
		<header className={styles.navbar}>
			<h1>Achei</h1>
			<ul className={styles.menu}>
				<li>
					<Link href='/dashboard'>Home</Link>
				</li>
				<li>
					<Link href='/posts'>Posts</Link>
				</li>
			</ul>
			<button className={styles.logoutButton} onClick={handleLogout}>
				<Link href='/'>Sair</Link>
			</button>
		</header>
	);
}
