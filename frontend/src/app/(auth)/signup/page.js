import Link from 'next/link';
import Input from '@/app/components/Input';
import Image from 'next/image';
import logo from '../../img/logoacheiBranco.png';
export default function Signup() {
	return (
		<div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
			<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
				<Image src={logo} alt='Logo' />
				<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-200'>
					Crie sua conta
				</h2>
			</div>

			<div className='mx-10 mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
				<form className='space-y-6' action='#' method='POST'>
					<Input
						labelClass='text-gray-200'
						label='Nome'
						id='nome'
						name='nome'
						type='text'
					/>
					<Input
						labelClass='text-gray-200'
						label='Usuário'
						id='nickname'
						name='nickname'
						type='text'
					/>
					<Input
						labelClass='text-gray-200'
						label='Email'
						id='email'
						name='email'
						autoComplete='email'
						type='email'
					/>
					<Input
						labelClass='text-gray-200'
						label='CPF'
						id='cpf'
						name='cpf'
						type='text'
					/>
					<Input
						labelClass='text-gray-200'
						label='Senha'
						id='senha'
						name='senha'
						autoComplete='password'
						type='password'
					/>
					<Input
						labelClass='text-gray-200'
						label='Confirmar Senha'
						id='senhaCheck'
						name='senhaCheck'
						autoComplete='password'
						type='password'
					/>

					<div>
						<Link href='/'>
							<button
								type='submit'
								className='flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600'>
								Cadastrar
							</button>
						</Link>
					</div>
				</form>

				<p className='mt-10 text-center text-sm text-gray-200'>
					Já tem conta?
					<a
						href='/login'
						className='font-semibold leading-6 text-green-500 hover:text-green-600'>
						&nbsp; Clique aqui!
					</a>
				</p>
			</div>
		</div>
	);
}
