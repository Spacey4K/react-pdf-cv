import './styles/globals.css';

export const metadata = {
	title: 'react-pdf-cv',
	description: '7 different CV designs made with react-pdf and tailwind',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
