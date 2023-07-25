import Link from 'next/link';
import Input from '@/app/components/Input';
import Image from 'next/image';

import logo from '../../img/logoacheiBranco.png';
export default function Login() {
	return (
		<div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
			<div className='	sm:mx-auto sm:w-full sm:max-w-sm'>
				<Image src={logo} alt='Logo' />
			</div>

			<div className='mx-10 mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
				<form className='space-y-6' action='#' method='POST'>
					<Input
						labelClass=' text-gray-200'
						label='Email'
						id='email'
						name='email'
						autoComplete='email'
						type='email'
					/>

					<Input
						labelClass=' text-gray-200'
						label='Senha'
						id='senha'
						name='senha'
						autoComplete='password'
						type='password'
					/>
					<div className='text-sm'>
						<a
							href='#'
							className='font-semibold text-green-500 hover:text-green-600'>
							Esqueceu a senha?
						</a>
					</div>

					<div>
						<Link href='/'>
							<button
								type='submit'
								className='flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-00'>
								Entrar
							</button>
						</Link>
					</div>
				</form>

				<p className='mt-10 text-center text-sm text-gray-200'>
					Não tem conta?
					<a
						href='/signup'
						className='font-semibold leading-6 text-green-500 hover:text-green-600'>
						&nbsp; Clique aqui!
					</a>
				</p>
			</div>
		</div>
	);
}
