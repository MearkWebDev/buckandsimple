import { SiteLayout } from "@/components/SiteLayout";
import { useSeo } from "@/lib/useSeo";

const press: { year: string; items: string[] }[] = [
  { year: "2025", items: [
    "EST Living — Esteemed Designers list",
    "Co-Architecture — Studio interview",
    "Habitus Living — Studio profile",
    "Beaches Covered — Ask An Architect",
    "Architectural Digest Italia — Casa Figueira",
    "Arch Daily — Casaballin",
    "Amazing Architecture — Little Birch",
    "Boom Build Journal — interview with Peter James Ahern",
  ]},
  { year: "2024", items: [
    "Inside Out — Pool House",
    "The Local Project — Casa Figueira",
    "EST Living Magazine — Casa Figueira estate home",
    "Design Milk — Casa Figueira",
  ]},
  { year: "2023", items: [
    "The Local Project — Franc Macs",
    "BUILD Magazine Architecture Awards — Winner",
    "Sanctuary Magazine — Prefab Power",
    "Sanctuary — Modern Green Homes Issue 64",
  ]},
  { year: "2021", items: [
    "The Local Project — Wagstaffe House",
    "The Design Files — Fitzroy North Residence",
    "Habitus Living — A Downsizers Dream",
    "Arch Daily — Wagstaffe House",
    "Australian House & Garden — Fitzroy North",
  ]},
  { year: "2020", items: ["Design Milk — Torquay House"] },
  { year: "2018", items: ["Lunchbox Architect — Casa Crisp"] },
  { year: "2017", items: ["Sanctuary — Modern Green Homes Issue 41"] },
];

export default function Media() {
  useSeo({
    title: "Media & Awards — buck&simple.",
    description: "Selected media features, editorials and awards.",
    ogTitle: "Media & Awards — buck&simple.",
  });

  return (
    <SiteLayout>
      <section className="container-editorial pt-40 pb-20">
        <p className="eyebrow mb-8">— Media & Awards</p>
        <h1 className="font-display font-light leading-[0.98] text-[clamp(3rem,7vw,6.5rem)] max-w-5xl">
          Editorials, features <span className="italic">&amp; recognition.</span>
        </h1>
      </section>

      <section className="container-editorial pb-32">
        {press.map((g) => (
          <div key={g.year} className="grid md:grid-cols-12 gap-12 border-t border-border py-12">
            <div className="md:col-span-3">
              <p className="font-display font-light text-5xl md:text-6xl">{g.year}</p>
            </div>
            <ul className="md:col-span-9 space-y-4">
              {g.items.map((i) => (
                <li key={i} className="font-display font-light text-2xl md:text-3xl leading-snug">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
