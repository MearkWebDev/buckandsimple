import { Link } from "@tanstack/react-router";
import { type ReactNode } from "react";

const NAV = [
  { to: "/", label: "Index" },
  { to: "/studio", label: "Studio" },
  { to: "/work", label: "Work" },
  { to: "/media", label: "Media" },
  { to: "/contact", label: "Contact" },
];

function BrandLogo() {
  return (
    <span className="font-display text-2xl font-medium tracking-tight leading-none">
      buck<span className="font-normal italic">&amp;</span>simple<span className="text-foreground">.</span>
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#FFFFFF] border-b border-[#EAEAEA]">
      <div className="container-editorial flex items-center justify-between h-20">
        <Link to="/">
          <BrandLogo />
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="nav-link"
              activeProps={{ className: "nav-link active" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a href="mailto:info@buckandsimple.com" className="hidden md:inline nav-link link-underline">
          Enquire
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/70">
      <div className="container-editorial py-20 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="eyebrow mb-6">buck&amp;simple.</p>
          <h3 className="font-display font-light text-3xl md:text-4xl leading-tight max-w-md">
            Architecture & interior design from Manly, on Sydney's Northern Beaches.
          </h3>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow mb-4">Studio</p>
          <p className="text-sm text-stone leading-relaxed">
            Studio 7, 35 East Esplanade<br />
            Manly NSW 2095<br />
            Australia
          </p>
        </div>
        <div className="md:col-span-2">
          <p className="eyebrow mb-4">Contact</p>
          <p className="text-sm text-stone leading-relaxed">
            <a href="tel:+61283135443" className="link-underline">(02) 8313 5443</a><br />
            <a href="mailto:info@buckandsimple.com" className="link-underline">info@buckandsimple.com</a>
          </p>
        </div>
        <div className="md:col-span-2">
          <p className="eyebrow mb-4">Follow</p>
          <p className="text-sm text-stone leading-relaxed">
            <a href="https://www.instagram.com/buckandsimple/" className="link-underline">Instagram</a>
          </p>
        </div>
      </div>
      <div className="container-editorial pb-10 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between border-t border-border/60 pt-6">
        <p className="text-xs text-stone tracking-wide">© 2026 buck&amp;simple Architects & Interior Designers</p>
        <p className="text-xs text-stone tracking-wide max-w-xl">
          We acknowledge the 29 clans of the Eora Nation, the Traditional Owners of the land on which we work, live & play.
        </p>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
