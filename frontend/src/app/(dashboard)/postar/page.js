import Input from '@/app/components/Input';

export default function Postar() {
	return (
		<div className='flex flex-col w-full items-center px-2  h-screen  text-zinc-900'>
			<h1 className='text-2xl text-black py-16'>Postar novo item</h1>
			<div className='text-left mb-4 xl:w-3/4 w-full grid grid-cols-1 gap-5  xl:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 '>
				<Input
					labelClass='block  text-xl font-medium leading-6 text-zinc-900'
					label='Descrição'
					inputClass='shadow-xl'
					id='descricao'
					name='descricao'
					type='text'
				/>
				<Input
					labelClass='block text-xl font-medium leading-6 text-zinc-900'
					inputClass='shadow-xl'
					label='Onde Achou'
					id='foundAt'
					name='foundAt'
					type='text'
				/>
				<Input
					labelClass='block text-xl font-medium leading-6 text-zinc-900'
					inputClass='shadow-xl'
					label='Dia do achado'
					id='dayFound'
					name='dayFound'
					type='text'
				/>
				<Input
					labelClass='block text-xl font-medium leading-6 text-zinc-900'
					inputClass='shadow-xl'
					label='Numero de serie'
					id='serial'
					name='serial'
					type='text'
				/>
			</div>
			<button
				type='submit'
				className='flex w-40 h-8 items-center  justify-center rounded-md bg-green-500 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-00 shadow-lg'>
				<a href='/'>Postar</a>
			</button>
		</div>
	);
}
