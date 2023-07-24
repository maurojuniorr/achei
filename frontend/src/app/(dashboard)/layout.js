import '../globals.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
export const metadata = {
	title: 'Achei!',
	description: 'Criado por Mauro Amazonas',
};

export default function RootLayout({ children }) {
	return (
		<>
			<Navbar />
			<div className='h-auto min-h-screen text-center bg-zinc-100'>
				{children}
			</div>
			<Footer />
		</>
	);
}
