import dynamic from 'next/dynamic';
const Pdf = dynamic(() => import('../../components/Pdf'), { ssr: false });

export default function Resume({ params }) {
	return (
		<Pdf resume={params.resume} />
	);
}