import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Studio from "@/pages/Studio";
import WorkIndex from "@/pages/WorkIndex";
import WorkDetail from "@/pages/WorkDetail";
import Media from "@/pages/Media";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

// basename matches vite `base` for GitHub Pages deployment at /buckandsimple/.
// To migrate to TanStack Start SSR later, replace this file with route-tree
// definitions under src/routes/ — page components in src/pages/ stay as-is.
const BASENAME = "/buckandsimple";

export default function App() {
  return (
    <BrowserRouter basename={BASENAME}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/work" element={<WorkIndex />} />
        <Route path="/work/:slug" element={<WorkDetail />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
