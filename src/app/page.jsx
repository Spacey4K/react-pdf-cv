import Link from 'next/link.js';

export default function Home() {
  return (
    <>
      <Link href="/resumes/0">Resume 0</Link><br />
      <Link href="/resumes/1">Resume 1</Link><br />
      <Link href="/resumes/2">Resume 2</Link><br />
      <Link href="/resumes/3">Resume 3</Link><br />
      <Link href="/resumes/4">Resume 4</Link><br />
      <Link href="/resumes/5">Resume 5</Link><br />
      <Link href="/resumes/6">Resume 6</Link><br />
    </>
  );
}
