import Link from 'next/link';

export default function Navbar() {
	const handleLogout = () => {
		// Lógica para sair do app
		console.log('Usuário saiu do app');
	};

	return (
		<header className='flex align-middle  p-5 bg-black text-green-500 justify-between '>
			<h1 className='text-xl px-5 transition hover:duration-200 hover:text-zinc-50'>
				Achei
			</h1>
			<ul className='flex p-0 list-none text-zinc-200'>
				<li className='text-xl px-5 transition hover:duration-200 hover:text-green-500'>
					<Link href='/'>Perdidos</Link>
				</li>
				<li className='text-xl px-5 transition hover:duration-200 hover:text-green-500'>
					<Link href='/achados'>Achados</Link>
				</li>
			</ul>
			<button className='border rounded-md bg-green-900 px-3 py-1 text-white'>
				<Link href='/login'>Sair</Link>
			</button>
		</header>
	);
}
