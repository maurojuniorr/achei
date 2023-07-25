'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../img/logoacheiBranco.png';
export default function Navbar() {
	const pathname = usePathname();
	return (
		<header className='pb-1 px-5 flex items-center   bg-black text-green-500 justify-between '>
			<h1 className=' text-4xl transition hover:duration-200 hover:text-zinc-50'>
				<Image src={logo} height={64} alt='Logo' />
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
			<Link href='/login'>
				<button className='border  rounded-md bg-green-600 px-3 py-1 text-white hover:border-green-500 hover:bg-zinc-200 hover:text-black'>
					Sair
				</button>
			</Link>
		</header>
	);
}
