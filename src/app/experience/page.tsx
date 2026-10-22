import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Work" };

const roles = [
  { company: "Maybank", logo: "maybank.png", role: "Senior Full Stack Engineer", dates: "Mar 2025 — Present", description: "Developing enterprise applications and AI workflows for banking operations. I help lead delivery of the EA Portal, covering request management, approvals, and dashboards, while modernising applications and integrating Microsoft Copilot Studio. My work spans React, Node.js, MongoDB, and secure production delivery, including more than 20 releases." },
  { company: "EDAG Malaysia", logo: "edag.png", role: "Senior Backend Engineer", dates: "Jul 2022 — Dec 2024", description: "Designed and developed backend services for data-intensive automotive applications using Kotlin and Spring Boot. I worked across database optimisation, S3 data ingestion, and application security, alongside CI/CD pipelines built with Docker, Kubernetes, Helm, and OpenShift." },
  { company: "Etiqa Insurance & Takaful", logo: "etiqa.png", role: "Full Stack Developer", dates: "Aug 2020 — Jul 2022", description: "Built and maintained insurance platforms with Angular, Node.js, and MariaDB. I contributed to SME BizCare, serving more than 500 active users, and developed APIs, automated reports, and notification workflows to support day-to-day business operations." },
  { company: "iFAST Service Centre", logo: "ifast.png", role: "IT Specialist · Full Stack Developer", dates: "Feb 2019 — Jan 2020", description: "Developed client and back-office applications using Angular and Java. My work included multilingual interfaces, FAQ modules, and biometric authentication for high-risk transactions, with responsibility for supporting releases through Git and Jenkins." },
];

export default function ExperiencePage() {
  return (
    <>
      <h1>Work</h1>
      <p>Experience across financial services and automotive engineering, taking applications from technical design through development, deployment, and production support.</p>
      {roles.map((job) => (
        <section className="section" key={job.company}>
          <h2 className="company-heading"><Image className="company-logo" src={`/sites/oliver/companies/${job.logo}`} width={24} height={24} alt="" /><span>{job.company}</span></h2>
          <p className="meta">{job.role}<br />{job.dates}</p>
          <p>{job.description}</p>
        </section>
      ))}
      <section className="section">
        <h2>Tools I work with</h2>
        <ul className="skills-list">
          <li>TypeScript, JavaScript, Kotlin, and Java.</li>
          <li>React, Next.js, Angular, Spring Boot, NestJS, and Express.</li>
          <li>PostgreSQL, Oracle, MariaDB, and MongoDB.</li>
          <li>Azure, Docker, Kubernetes, and CI/CD.</li>
        </ul>
      </section>
      <section className="section">
        <h2>Education & certifications</h2>
        <p>Bachelor of Computer Science (Honours), Taylor’s University, 2016–2019. CGPA 3.88/4.00.</p>
        <p>Microsoft Certified: Azure Solutions Architect Expert, Azure Administrator Associate, Azure Developer Associate, and Azure AI Fundamentals.</p>
      </section>
      <p className="quiet-link"><a href="/oliver-sim-resume.pdf" download>Download my résumé</a> for a complete overview of my experience and qualifications.</p>
    </>
  );
}
