import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { projects, additionalWork, archive, underConstruction } from "@/lib/projects";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — buck&simple. Architects" },
      { name: "description", content: "Selected residential architecture & interior design projects across Sydney, NSW, Victoria and Queensland." },
      { property: "og:title", content: "Work — buck&simple." },
      { property: "og:image", content: projects[0].image },
    ],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  return (
    <SiteLayout>
      <section className="container-editorial pt-40 pb-20">
        <p className="eyebrow mb-8">— Index of Work</p>
        <h1 className="font-display font-light leading-[0.98] text-[clamp(3rem,7vw,6.5rem)] max-w-5xl">
          A portfolio defined by a consistent <span className="italic">process</span>, applied across varied conditions.
        </h1>
      </section>

      {/* Featured Grid */}
      <section className="container-editorial pb-24">
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-24">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              to="/work/$slug"
              params={{ slug: p.slug }}
              className={`group block ${i % 2 === 1 ? "md:mt-32" : ""}`}
            >
              <div className="overflow-hidden mb-6">
                <img
                  src={p.image}
                  alt={p.title}
                  width={1600}
                  height={1100}
                  loading="lazy"
                  className="w-full h-[420px] md:h-[560px] object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-baseline justify-between gap-6">
                <div>
                  <h3 className="font-display font-light text-3xl md:text-4xl">{p.title}</h3>
                  <p className="text-stone text-sm mt-2">{p.location} — {p.year}</p>
                </div>
                <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Additional list */}
      <section className="container-editorial py-24 border-t border-border">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="eyebrow mb-6">— Additional Work</p>
            <h2 className="font-display font-light text-3xl md:text-4xl">Further selected projects</h2>
          </div>
          <ul className="md:col-span-8 divide-y divide-border border-y border-border">
            {additionalWork.map((w) => (
              <li key={w.title} className="flex items-baseline justify-between gap-6 py-6">
                <span className="font-display font-light text-2xl md:text-3xl">{w.title}</span>
                <span className="eyebrow text-right">{w.location} — {w.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Under Construction */}
      <section className="container-editorial py-24 border-t border-border">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="eyebrow mb-6">— Under Construction</p>
            <h2 className="font-display font-light text-3xl md:text-4xl">In progress</h2>
          </div>
          <ul className="md:col-span-8 divide-y divide-border border-y border-border">
            {underConstruction.map((w) => (
              <li key={w.title} className="flex items-baseline justify-between gap-6 py-6">
                <span className="font-display font-light text-2xl md:text-3xl">{w.title}</span>
                <span className="eyebrow">Details forthcoming</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Archive */}
      <section className="container-editorial py-24 border-t border-border">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="eyebrow mb-6">— Archive</p>
            <h2 className="font-display font-light text-3xl md:text-4xl">Earlier works</h2>
          </div>
          <ul className="md:col-span-8 grid sm:grid-cols-2 gap-x-12 gap-y-1 border-y border-border py-4">
            {archive.map((w) => (
              <li key={w.title} className="flex items-baseline justify-between gap-4 py-3 border-b border-border/40 last:border-0">
                <span className="font-display font-light text-xl">{w.title}</span>
                <span className="eyebrow">{w.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}
