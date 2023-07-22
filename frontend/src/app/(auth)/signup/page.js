import Link from 'next/link';
import Input from '@/app/components/Input';
export default function Signup() {
	return (
		<div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
			<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
				<img
					className='mx-auto w-1/2 '
					src='https://www.fapcom.edu.br/wp-content/uploads/2015/10/Perdi-mas-achei_1.png'
					alt='Your Company'
				/>
				<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-200'>
					Crie sua conta
				</h2>
			</div>

			<div className='mx-10 mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
				<form className='space-y-6' action='#' method='POST'>
					<Input label='Nome' id='nome' name='nome' type='text' />
					<Input
						label='Email'
						id='email'
						name='email'
						autoComplete='email'
						type='email'
					/>
					<Input label='CPF' id='cpf' name='cpf' type='text' />
					<Input
						label='Senha'
						id='senha'
						name='senha'
						autoComplete='password'
						type='password'
					/>
					<Input
						label='Confirmar Senha'
						id='senhaCheck'
						name='senhaCheck'
						autoComplete='password'
						type='password'
					/>

					<div>
						<button
							type='submit'
							className='flex w-full justify-center rounded-md bg-green-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600'>
							<a href='/'>Cadastrar</a>
						</button>
					</div>
				</form>

				<p className='mt-10 text-center text-sm text-gray-200'>
					Já tem conta?
					<a
						href='/login'
						className='font-semibold leading-6 text-green-600 hover:text-green-500'>
						&nbsp; Clique aqui!
					</a>
				</p>
			</div>
		</div>
	);
}