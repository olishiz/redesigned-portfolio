import type { Metadata } from "next";
import { Navigation } from "@/components/sites/oliver/navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Oliver Sim", template: "%s — Oliver Sim" },
  description: "Senior full stack engineer based in Malaysia. Building web applications, backend systems, and AI workflows at Maybank. Founder of The Shiz.",
  applicationName: "Oliver Sim",
  authors: [{ name: "Oliver Sim Choo Howe" }],
  icons: { icon: "/icon.svg" },
  openGraph: { type: "website", title: "Oliver Sim", description: "Senior full stack engineer. Web, backend, cloud, and AI.", locale: "en_MY" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <div className="shell">
          <Navigation />
          <main id="main">{children}</main>
        </div>
      </body>
    </html>
  );
}
