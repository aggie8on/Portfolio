type Project = { slug: string; title: string; client: string; year: string; description: string; services: string[]; images: { src: string; alt: string; layout?: string }[] };

const projects: Project[] = [
  { slug: "client-project-01", title: "Client project 01", client: "Client 01", year: "2026", description: "A placeholder identity project. This introduction will be replaced with the approved project description.", services: ["Brand identity", "Art direction", "Visual system"], images: [{ src: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=2200&q=90", alt: "Temporary product image", layout: "hero" }, { src: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=2000&q=90", alt: "Temporary product detail", layout: "wide" }, { src: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=2000&q=90", alt: "Temporary design image", layout: "wide" }] },
  { slug: "client-project-02", title: "Client project 02", client: "Client 02", year: "2026", description: "A placeholder visual identity project. This introduction will be replaced with the approved project description.", services: ["Visual identity", "Art direction", "Design"], images: [{ src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=2200&q=90", alt: "Temporary product image", layout: "hero" }, { src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=2000&q=90", alt: "Temporary product detail", layout: "wide" }, { src: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=2000&q=90", alt: "Temporary design image", layout: "wide" }] },
  { slug: "client-project-03", title: "Client project 03", client: "Client 03", year: "2026", description: "A placeholder identity system. This introduction will be replaced with the approved project description.", services: ["Identity system", "Packaging", "Art direction"], images: [{ src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=2200&q=90", alt: "Temporary product image", layout: "hero" }, { src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=2000&q=90", alt: "Temporary product detail", layout: "wide" }, { src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=2000&q=90", alt: "Temporary product detail", layout: "wide" }] },
];

export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const index = projects.findIndex(project => project.slug === params.slug);
  const project = projects[index];
  if (!project) return null;
  const next = projects[(index + 1) % projects.length];

  return <main className="minimal-site">
    <header className="site-header page-shell minimal-header">
      <a href="/" className="minimal-wordmark" aria-label="Toothless home">toothless<span>®</span></a>
      <nav className="main-nav" aria-label="Main navigation"><a href="/work" aria-current="page">Work</a><a href="/studio">Studio</a><a href="/contact">Contact <span aria-hidden="true">↗</span></a></nav>
    </header>
    <section className="minimal-case-intro page-shell">
      <a className="minimal-back-link" href="/work">← All work</a>
      <p className="minimal-overline">{project.client} · {project.year}</p>
      <h1>{project.title}</h1>
      <div className="minimal-case-summary"><p>{project.description}</p><div className="minimal-case-services">{project.services.map(service => <span key={service}>{service}</span>)}</div></div>
    </section>
    <section className="minimal-case-images page-shell" aria-label={project.title + " imagery"}>
      {project.images.map((image, imageIndex) => <figure className={"minimal-case-image minimal-case-image-" + image.layout} key={image.src}><img src={image.src} alt={image.alt} loading={imageIndex === 0 ? "eager" : "lazy"} /></figure>)}
    </section>
    <nav className="minimal-case-next page-shell"><a href="/work">← All projects</a><a href={"/work/" + next.slug}>Next project: {next.title} ↗</a></nav>
    <footer className="minimal-footer page-shell">
      <div className="minimal-footer-top"><p>Have something good in mind?</p><a href="/contact">Let’s talk <span aria-hidden="true">↗</span></a></div>
      <div className="minimal-footer-bottom"><a className="minimal-wordmark" href="/">toothless<span>®</span></a><a href="mailto:hi@toothless.design">hi@toothless.design</a><span>© {new Date().getFullYear()} Toothless Studio</span></div>
    </footer>
  </main>;
}
