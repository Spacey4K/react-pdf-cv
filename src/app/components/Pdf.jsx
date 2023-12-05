'use client';

import { Document, Page, pdfjs } from 'react-pdf';
import { pdf, PDFDownloadLink } from "@react-pdf/renderer";

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js', import.meta.url,).toString();

import { useEffect, useState } from 'react';

import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

import tw from './tw';

import Resume0 from '../resumes/[resume]/Resume0';
import Resume1 from '../resumes/[resume]/Resume1';
import Resume2 from '../resumes/[resume]/Resume2';
import Resume3 from '../resumes/[resume]/Resume3';
import Resume4 from '../resumes/[resume]/Resume4';
import Resume5 from '../resumes/[resume]/Resume5';
import Resume6 from '../resumes/[resume]/Resume6';
const RESUMES = [<Resume0 />, <Resume1 />, <Resume2 />, <Resume3 />, <Resume4 />, <Resume5 />, <Resume6 />];

import u from '../data/user.json';

export default function Resumes({ resume }) {
	const [numPages, setNumPages] = useState();
	const [blobUrl, setBlobUrl] = useState('');

	useEffect(() => {
		(async () => {
			const blob = await pdf(RESUMES[resume]).toBlob();
			const url = URL.createObjectURL(blob);
			setBlobUrl(url);
		})();
	}, []);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}

	return (
		<>
			<PDFDownloadLink document={RESUMES[resume]} fileName={u.resumeOptions.title} style={tw("m-1 rounded p-2 bg-sky-500")}>
				{({ blob, url, loading, error }) =>
					loading ? 'Loading ...' : 'Download PDF'
				}
			</PDFDownloadLink>

			<br /><br />

			<Document file={blobUrl} onLoadSuccess={onDocumentLoadSuccess} style={tw("flex-col gap-10")}>
				{Array.apply(null, Array(numPages))
					.map((p, i) => <Page key={`page_${i}`} scale={2} pageNumber={i + 1} />)}
			</Document>
		</>
	);
}