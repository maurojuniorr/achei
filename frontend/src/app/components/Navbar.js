'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
export default function Navbar() {
	const pathname = usePathname();
	return (
		<header className='flex align-middle  p-5 bg-black text-green-500 justify-between '>
			<h1 className='text-xl px-5 transition hover:duration-200 hover:text-zinc-50'>
				Achei
			</h1>
			<ul className='flex p-0 list-none '>
				<li
					className={
						pathname == '/'
							? 'text-green-500 text-xl px-5 transition hover:duration-200 hover:text-zinc-200'
							: 'text-zinc-200 text-xl px-5 transition hover:duration-200 hover:text-green-500'
					}>
					<Link href='/'>Perdidos</Link>
				</li>
				<li
					className={
						pathname == '/achados'
							? 'text-green-500 text-xl px-5 transition hover:duration-200 hover:text-zinc-200'
							: 'text-zinc-200 text-xl px-5 transition hover:duration-200 hover:text-green-500'
					}>
					<Link href='/achados'>Achados</Link>
				</li>
				<li
					className={
						pathname == '/postar'
							? 'text-green-500 text-xl px-5 transition hover:duration-200 hover:text-zinc-200'
							: 'text-zinc-200 text-xl px-5 transition hover:duration-200 hover:text-green-500'
					}>
					<Link href='/postar'>Postar</Link>
				</li>
			</ul>
			<button className='border  rounded-md bg-green-900 px-3 py-1 text-white hover:border-green-900 hover:bg-zinc-200 hover:text-black'>
				<Link href='/login'>Sair</Link>
			</button>
		</header>
	);
}
