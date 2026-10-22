import type { Metadata } from "next";

export const metadata: Metadata = { title: "Projects" };

const projects = [
  { id: "carbnb", name: "Carbnb", href: "https://carbnb.my/", description: "A car subscription platform bringing bookings, payments, and fleet operations into one application. I developed the customer experience and admin dashboard with Next.js, React, and Supabase, integrating Curlec payments, real-time booking management, and a mobile-friendly PWA." },
  { id: "the-shiz", name: "The Shiz", href: "https://the-shiz.co/", description: "The independent development studio I founded to help Malaysian businesses build their digital presence. I lead projects from requirements and design through development, hosting, and ongoing support, delivering websites, e-commerce stores, and custom applications." },
  { id: "mqbc", name: "Malaysia–Qatar Business Council", href: "https://mqbc.com.my/", description: "A custom website for the Malaysia–Qatar Business Council. I handled design and development, professional email hosting, and domain configuration, with Google Analytics integration to support visitor insights and future improvements." },
  { id: "frankitas", name: "Frankitas 2.0", href: "https://frankitas.co/", description: "An updated Shopify storefront for Frankitas. I customised the premium theme, configured the domain, and refined the site structure and search engine optimisation to strengthen the brand’s online presence." },
];

export default function ProjectsPage() {
  return (
    <>
      <h1>Projects</h1>
      <p>Selected projects, from custom websites and online stores to applications that support everyday business operations.</p>
      {projects.map((project) => (
        <section className="section" id={project.id} key={project.id} aria-labelledby={`${project.id}-title`}>
          <h2 id={`${project.id}-title`}><a href={project.href} target="_blank" rel="noreferrer">{project.name}</a></h2>
          <p>{project.description}</p>
        </section>
      ))}
      <p className="quiet-link">More code and experiments on <a href="https://github.com/olishiz" target="_blank" rel="noreferrer">GitHub</a>.</p>
    </>
  );
}
