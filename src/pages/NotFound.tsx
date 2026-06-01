import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/SiteLayout";
import { useSeo } from "@/lib/useSeo";

export default function NotFound() {
  useSeo({ title: "Not found — buck&simple." });
  return (
    <SiteLayout>
      <div className="container-editorial py-40 text-center">
        <p className="eyebrow mb-6">— 404</p>
        <h1 className="font-display font-light text-5xl md:text-7xl">Page not found</h1>
        <p className="text-stone mt-6 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="inline-block mt-10 nav-link link-underline">← Return home</Link>
      </div>
    </SiteLayout>
  );
}
