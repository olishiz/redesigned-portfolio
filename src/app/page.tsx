import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Oliver Sim</h1>
      <p>I’m a senior full stack engineer based in Malaysia. At <a href="https://www.maybank.com/" target="_blank" rel="noreferrer">Maybank</a>, I build enterprise applications and AI workflows that simplify complex business processes.</p>
      <p>Over the past seven years, I’ve worked across banking, insurance, and automotive engineering, with previous roles at EDAG, Etiqa, and iFAST. My work spans interfaces, backend systems, and cloud infrastructure, with a focus on software that is reliable and straightforward to use. I also founded <a href="https://the-shiz.co/" target="_blank" rel="noreferrer">The Shiz</a>, where I help businesses bring their websites and applications to life.</p>
      <p>You can explore my <Link href="/projects/">projects</Link>, read about my <Link href="/experience/">work</Link>, or download my <a href="/oliver-sim-resume.pdf" target="_blank" rel="noreferrer">résumé</a>. Find me on <a href="https://github.com/olishiz" target="_blank" rel="noreferrer">GitHub</a> and <a href="https://www.linkedin.com/in/olishiz/" target="_blank" rel="noreferrer">LinkedIn</a>, or <Link href="/contact/">get in touch</Link> if you’d like to work together.</p>
    </>
  );
}
