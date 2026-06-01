import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/SiteLayout";
import { useSeo } from "@/lib/useSeo";
import studioImg from "@/assets/studio-interior.jpg";

const services = [
  "Full-service architectural design",
  "Joinery design & detailing",
  "Interior design & construction packages",
  "Construction documentation",
  "Client-side representation",
  "Procurement & price-variation management",
  "Class 2 multi-residential (by invitation)",
];

const people = [
  {
    name: "Peter James Ahern",
    role: "Principal // Co-Founder & Director",
    bio: "Registered Architect (#9686), Class 2 certified, and Member of the AIA. With over 20 years' experience, Peter draws upon a wealth of work across hospitality, commercial and high-end residential projects — contributing great attention to detail and an appreciation of design fundamentals in concept, aesthetics, proportion and materiality.",
  },
  {
    name: "Kurt Crisp",
    role: "Principal // Co-Founder & Director",
    bio: "Registered Architect (Nominated Architect #8631) and University of Newcastle double graduate, devoted to delivering emotional results through the physical interplay of the built environment. Kurt's conceptual motivation is the search for an ideal built resolution to site, function and opportunity.",
  },
  {
    name: "Clelia Dal Col",
    role: "Associate",
    bio: "Graduate of the highly regarded IUAV University of Venice (M.Architettura IUAV). An Italian native with an extensive portfolio shaping considered, refined residential work.",
  },
];

const faqs = [
  { q: "Why engage an Architect?", a: "A skilled Architect who understands construction, market realities and high-end design brings greater returns on investment — shortened build times, higher sale prices, and a higher-end product at more market-competitive pricing." },
  { q: "What types of projects does buck&simple specialise in?", a: "High-end residential architecture and interior design, particularly bespoke homes on complex or sloping sites. Our work is known for its design excellence, craftsmanship and enduring quality." },
  { q: "Do you offer both architecture and interior design services?", a: "Yes. We offer full-service architectural design, joinery, and interior construction packages — yielding a higher quality building of enduring value as a result of considered, coordinated construction drawings." },
];

export default function Studio() {
  useSeo({
    title: "Studio — buck&simple. | Leading Luxury Residential Architects Northern Beaches",
    description:
      "Established 2013 in Manly by directors Peter James Ahern & Kurt Crisp. A design-driven architecture studio focused on high-end residential architecture and interior design.",
    ogTitle: "Studio — buck&simple.",
    ogImage: studioImg,
  });

  return (
    <SiteLayout>
      <section className="container-editorial pt-40 pb-20">
        <p className="eyebrow mb-8">— Studio</p>
        <h1 className="font-display font-light leading-[0.98] text-[clamp(3rem,7vw,6.5rem)] max-w-5xl">
          A design-driven studio in Manly, founded on the <span className="italic">inherent beauty of simplicity.</span>
        </h1>
        <div className="mt-16 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="eyebrow">— Established</p>
            <p className="font-display text-3xl font-light mt-2">2013</p>
          </div>
          <div className="md:col-span-8 space-y-6 text-stone">
            <p>
              buck&amp;simple is a design-driven architecture & interior design studio committed to
              craftsmanship, attention to detail and the inherent beauty of simplicity.
            </p>
            <p>
              Established in 2013 in Manly on Sydney's Northern Beaches by directors Peter James Ahern
              and Kurt Crisp, our focus is architectural and interior design excellence in high-end
              residences. We accept a limited number of high-calibre projects each year to ensure every
              home or development receives our full attention and care.
            </p>
          </div>
        </div>
      </section>

      <section className="container-editorial py-12">
        <img
          src={studioImg}
          alt="buck&simple studio interior"
          width={1600}
          height={1100}
          loading="lazy"
          className="w-full h-[480px] md:h-[680px] object-cover"
        />
      </section>

      <section className="container-editorial py-32 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="eyebrow mb-6">— Services</p>
          <h2 className="font-display font-light text-4xl md:text-5xl">
            Our ethos is simplicity, our approach <span className="italic">holistic.</span>
          </h2>
        </div>
        <div className="md:col-span-8">
          <p className="text-stone max-w-2xl mb-12">
            buck&amp;simple prioritises a full-service design commission providing complete architectural,
            joinery and interior design construction packages — yielding a higher quality building of
            enduring value as a result of considered, coordinated construction drawings.
          </p>
          <ul className="divide-y divide-border border-y border-border">
            {services.map((s, i) => (
              <li key={s} className="flex items-baseline gap-8 py-6">
                <span className="eyebrow w-12">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-2xl md:text-3xl font-light">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container-editorial py-32">
          <div className="grid md:grid-cols-12 gap-12 mb-20">
            <div className="md:col-span-4"><p className="eyebrow">— People</p></div>
            <div className="md:col-span-8">
              <h2 className="font-display font-light text-4xl md:text-6xl">
                The directors <span className="italic">&amp; team.</span>
              </h2>
            </div>
          </div>
          <div className="space-y-20">
            {people.map((p) => (
              <article key={p.name} className="grid md:grid-cols-12 gap-12 border-t border-border pt-12">
                <div className="md:col-span-4">
                  <h3 className="font-display font-light text-3xl md:text-4xl">{p.name}</h3>
                  <p className="eyebrow mt-3">{p.role}</p>
                </div>
                <p className="md:col-span-8 text-stone">{p.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container-editorial py-32 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="eyebrow mb-6">— Frequently Asked</p>
            <h2 className="font-display font-light text-4xl md:text-5xl">
              Working with the <span className="italic">studio.</span>
            </h2>
          </div>
          <div className="md:col-span-8 divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <details key={f.q} className="group py-8">
                <summary className="flex items-baseline justify-between cursor-pointer list-none gap-8">
                  <h3 className="font-display font-light text-2xl md:text-3xl flex-1">{f.q}</h3>
                  <span className="eyebrow shrink-0 transition-transform group-open:rotate-45">＋</span>
                </summary>
                <p className="mt-6 text-stone max-w-3xl">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="container-editorial py-32 text-center border-t border-border">
        <h2 className="display-xl">
          Studio 7, <span className="italic">Manly.</span>
        </h2>
        <p className="text-stone mt-8">35 East Esplanade, Manly NSW 2095 — (02) 8313 5443</p>
        <Link to="/contact" className="inline-block mt-10 nav-link link-underline">Begin an enquiry →</Link>
      </section>
    </SiteLayout>
  );
}
