import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/SiteLayout";
import { useSeo } from "@/lib/useSeo";
import heroImg from "@/assets/hero-home.jpg";
import { projects } from "@/lib/projects";

export default function Home() {
  useSeo({
    title: "buck&simple. — Northern Beaches Architects | Manly Architects",
    description:
      "buck&simple. is a design-driven architecture & interior design studio in Manly on Sydney's Northern Beaches, committed to craftsmanship, attention to detail and the inherent beauty of simplicity.",
    ogTitle: "buck&simple. — Northern Beaches Architects",
    ogDescription:
      "Unique. Adaptive. Enduring. Bespoke residential architecture on Sydney's Northern Beaches.",
    ogImage: heroImg,
  });

  const featured = projects.slice(0, 4);
  return (
    <SiteLayout>
      <section className="relative h-screen min-h-[720px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Modern coastal Australian home at golden hour with infinity pool and rammed earth walls"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/50" />
        <div className="relative z-10 h-full container-editorial flex flex-col justify-end pb-24 text-[oklch(0.97_0.005_80)]">
          <p className="eyebrow text-[oklch(0.97_0.005_80)]/80 mb-6">Est. 2013 — Manly, Northern Beaches</p>
          <h1 className="font-display font-light leading-[0.95] tracking-tight max-w-5xl text-[clamp(3rem,8vw,7rem)]">
            Unique. Adaptive.<br />
            <span className="italic font-light">Enduring.</span>
          </h1>
          <p className="mt-10 max-w-xl text-base md:text-lg font-light leading-relaxed text-[oklch(0.97_0.005_80)]/85">
            A design-driven architecture & interior design studio committed to craftsmanship,
            attention to detail and the inherent beauty of simplicity.
          </p>
        </div>
        <div className="absolute bottom-8 right-6 md:right-10 z-10 eyebrow text-[oklch(0.97_0.005_80)]/70">
          Casa Figueira / Rose Bay
        </div>
      </section>

      <section className="container-editorial pt-32 pb-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-3">
          <p className="eyebrow">— Practice</p>
        </div>
        <div className="md:col-span-9">
          <h2 className="font-display font-light text-4xl md:text-6xl leading-[1.05] max-w-4xl">
            A studio shaped by site, climate, outlook<span className="italic"> &amp; brief</span> — never by a single repeated style.
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-12 max-w-4xl">
            <p className="text-stone">
              Widely recognised as one of the region's top residential architecture & interior design firms,
              we draw upon a proven track record in multiple typologies to deliver bespoke residences of
              architectural merit and spaces you love to live in.
            </p>
            <p className="text-stone">
              Across our portfolio, no two homes are approached in the same way. Each project begins with the
              specific conditions of its site and develops its own architectural logic in response.
            </p>
          </div>
        </div>
      </section>

      <section className="container-editorial pb-24">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="eyebrow mb-4">— Selected Work</p>
            <h2 className="font-display font-light text-4xl md:text-6xl">Recent projects</h2>
          </div>
          <Link to="/work" className="nav-link link-underline hidden md:inline">All Work →</Link>
        </div>

        <div className="space-y-32">
          {featured.map((p, i) => (
            <Link key={p.slug} to={`/work/${p.slug}`} className="group block">
              <div className={`grid md:grid-cols-12 gap-8 items-end ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
                <div className={`md:col-span-8 ${i % 2 === 1 ? "[direction:ltr]" : ""}`}>
                  <div className="overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      width={1600}
                      height={1100}
                      loading="lazy"
                      className="w-full h-[420px] md:h-[640px] object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
                <div className={`md:col-span-4 ${i % 2 === 1 ? "[direction:ltr]" : ""}`}>
                  <p className="eyebrow mb-4">{String(i + 1).padStart(2, "0")} / {p.location}</p>
                  <h3 className="font-display font-light text-4xl md:text-5xl leading-[1.05] mb-4">
                    {p.title}
                  </h3>
                  <p className="text-stone mb-6 max-w-md">{p.excerpt}</p>
                  <span className="nav-link link-underline">View Project</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border mt-12">
        <div className="container-editorial py-32 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <p className="eyebrow">— Philosophy</p>
          </div>
          <div className="md:col-span-9">
            <p className="font-display font-light italic text-3xl md:text-5xl leading-[1.15] max-w-4xl">
              "A home should be more than just a place to live — it should be a reflection of who you are.
              We create homes that respond to both your lifestyle and the landscape they sit within."
            </p>
            <p className="eyebrow mt-10">— Peter James Ahern & Kurt Crisp, Directors</p>
          </div>
        </div>
      </section>

      <section className="container-editorial py-32 text-center">
        <p className="eyebrow mb-8">— Commission</p>
        <h2 className="display-xl max-w-5xl mx-auto">
          Begin a <span className="italic">conversation.</span>
        </h2>
        <p className="text-stone mt-10 max-w-xl mx-auto">
          We accept a limited number of high-calibre projects each year to ensure every home receives our
          full attention and care.
        </p>
        <Link to="/contact" className="inline-block mt-12 nav-link link-underline">
          Enquire with the studio →
        </Link>
      </section>
    </SiteLayout>
  );
}
