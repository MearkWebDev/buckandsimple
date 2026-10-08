 # Architecture rules

- Derive BrowserRouter's basename from Vite's BASE_URL and use the repository subpath only for builds, so the root preview and GitHub Pages share the same page components without routing mismatches.