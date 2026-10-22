import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <h1>Say hello</h1>
      <p>Have a project in mind, a role to discuss, or an idea worth exploring? I’d be glad to hear from you. The best way to reach me is by <a href="mailto:zhuen1101@hotmail.com">email</a>.</p>
      <dl className="contact-list">
        <div><dt>Email</dt><dd><a href="mailto:zhuen1101@hotmail.com">zhuen1101@hotmail.com</a></dd></div>
        <div><dt>GitHub</dt><dd><a href="https://github.com/olishiz" target="_blank" rel="noreferrer">olishiz</a></dd></div>
        <div><dt>LinkedIn</dt><dd><a href="https://www.linkedin.com/in/olishiz/" target="_blank" rel="noreferrer">Oliver Sim</a></dd></div>
        <div><dt>Studio</dt><dd><a href="https://the-shiz.co/" target="_blank" rel="noreferrer">The Shiz</a></dd></div>
      </dl>
      <p>Based in Selangor, Malaysia. Outside of work, I enjoy football, the company of dogs, and keeping things simple.</p>
    </>
  );
}
