'use client';
export default function Input({
	id,
	name,
	label,
	type,
	onChange,
	autoComplete,
}) {
	const handleChange = (e) => {
		const { value } = e.target;
		onChange(value);
	};
	return (
		<div>
			{label && (
				<label
					htmlFor='email'
					className='block text-sm font-medium leading-6 text-gray-200'>
					{label}
				</label>
			)}
			<div className='mt-2'>
				<input
					id={id}
					name={name}
					type={type}
					autoComplete={autoComplete}
					required
					onChange={handleChange}
					className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
				/>
			</div>
		</div>
	);
}
