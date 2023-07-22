import '../globals.css';

export const metadata = {
	title: 'Achei!',
	description: 'Criado por Mauro Amazonas',
};

export default function RootLayout({ children }) {
	return (
		<html className='h-full bg-zinc-800' lang='pt-BR'>
			<body className='h-full'>{children}</body>
		</html>
	);
}
