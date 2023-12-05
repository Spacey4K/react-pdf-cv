import Link from 'next/link.js';

export default function Home() {
	return (
		<div className="grid gap-2 text-center">
			<Link className="rounded p-2 bg-lime-500" href="/resumes/0">Resume 0</Link>
			<Link className="rounded p-2 bg-green-500" href="/resumes/1">Resume 1</Link>
			<Link className="rounded p-2 bg-emerald-500" href="/resumes/2">Resume 2</Link>
			<Link className="rounded p-2 bg-teal-500" href="/resumes/3">Resume 3</Link>
			<Link className="rounded p-2 bg-cyan-500" href="/resumes/4">Resume 4</Link>
			<Link className="rounded p-2 bg-sky-500" href="/resumes/5">Resume 5</Link>
			<Link className="rounded p-2 bg-blue-500" href="/resumes/6">Resume 6</Link>
		</div>
	);
}
