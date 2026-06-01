import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Project — buck&simple." }] };
    return {
      meta: [
        { title: `${p.title} — buck&simple.` },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: `${p.title} — buck&simple.` },
        { property: "og:description", content: p.excerpt },
        { property: "og:image", content: p.image },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-editorial py-40 text-center">
        <h1 className="font-display font-light text-5xl">Project not found</h1>
        <Link to="/work" className="inline-block mt-10 nav-link link-underline">← All Work</Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: () => (
    <SiteLayout>
      <div className="container-editorial py-40 text-center">
        <h1 className="font-display font-light text-4xl">Something went wrong</h1>
      </div>
    </SiteLayout>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project: p } = Route.useLoaderData() as { project: (typeof projects)[number] };
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <SiteLayout>
      <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
        <img src={p.image} alt={p.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        <div className="relative z-10 container-editorial h-full flex flex-col justify-end pb-16 text-[oklch(0.97_0.005_80)]">
          <p className="eyebrow text-[oklch(0.97_0.005_80)]/80 mb-6">{p.type}</p>
          <h1 className="font-display font-light text-[clamp(3rem,8vw,7rem)] leading-[0.95]">{p.title}</h1>
          <p className="mt-6 eyebrow text-[oklch(0.97_0.005_80)]/80">{p.location} / {p.year}</p>
        </div>
      </section>

      <section className="container-editorial py-32 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="eyebrow">— Overview</p>
        </div>
        <div className="md:col-span-8 space-y-6">
          <p className="font-display font-light italic text-3xl md:text-4xl leading-tight">
            {p.excerpt}
          </p>
          {p.body.map((para, i) => (
            <p key={i} className="text-stone">{para}</p>
          ))}
        </div>
      </section>

      {(p.team || p.features || p.awards) && (
        <section className="container-editorial pb-32 grid md:grid-cols-12 gap-12 border-t border-border pt-16">
          <div className="md:col-span-4">
            <p className="eyebrow">— Details</p>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="eyebrow mb-2">Type</dt>
                <dd className="font-display text-xl font-light">{p.type}</dd>
              </div>
              <div>
                <dt className="eyebrow mb-2">Period</dt>
                <dd className="font-display text-xl font-light">{p.year}</dd>
              </div>
              <div>
                <dt className="eyebrow mb-2">Location</dt>
                <dd className="font-display text-xl font-light">{p.location}</dd>
              </div>
            </dl>
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-12">
            {p.team && (
              <div>
                <p className="eyebrow mb-4">Team</p>
                <ul className="space-y-2 text-stone text-sm">
                  {p.team.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
            )}
            {p.features && (
              <div>
                <p className="eyebrow mb-4">Media Features</p>
                <ul className="space-y-2 text-stone text-sm">
                  {p.features.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
            )}
            {p.awards && (
              <div>
                <p className="eyebrow mb-4">Awards</p>
                <ul className="space-y-2 text-stone text-sm">
                  {p.awards.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="border-t border-border">
        <Link
          to="/work/$slug"
          params={{ slug: next.slug }}
          className="group block container-editorial py-24"
        >
          <p className="eyebrow mb-6">— Next Project</p>
          <div className="flex items-baseline justify-between gap-8">
            <h2 className="font-display font-light text-5xl md:text-7xl leading-[0.95] group-hover:opacity-60 transition-opacity">
              {next.title}
            </h2>
            <span className="eyebrow shrink-0 hidden md:inline">{next.location}</span>
          </div>
        </Link>
      </section>
    </SiteLayout>
  );
}
