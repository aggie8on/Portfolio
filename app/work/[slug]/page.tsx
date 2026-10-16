type PlaceholderProject = {
  slug: string;
  number: string;
  title: string;
  focus: string;
  year: string;
  headline: string;
  description: string;
  collaborator: string;
  tags: string[];
  images: { src: string; alt: string; kind?: "wide" | "pair" | "detail" }[];
};

const projects: PlaceholderProject[] = [
  {
    slug: "client-project-01",
    number: "01",
    title: "Client Project 01",
    focus: "Brand identity",
    year: "2026",
    headline: "A clearer point of view.",
    description: "A placeholder project exploring how a focused idea can become a distinctive, useful visual identity.",
    collaborator: "To be confirmed",
    tags: ["Brand identity", "Art direction", "Visual system"],
    images: [
      { src: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=2200&q=85", alt: "Minimal fragrance packaging, temporary project visual", kind: "wide" },
      { src: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1600&q=85", alt: "Minimal skincare product arrangement, temporary project visual", kind: "pair" },
      { src: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=2200&q=85", alt: "Design workspace and printed material, temporary project visual", kind: "wide" },
    ],
  },
  {
    slug: "client-project-02",
    number: "02",
    title: "Client Project 02",
    focus: "Visual identity",
    year: "2026",
    headline: "Built to stand apart.",
    description: "A placeholder visual identity project. The final story and artwork will be added when the client work is approved.",
    collaborator: "To be confirmed",
    tags: ["Visual identity", "Art direction", "Design"],
    images: [
      { src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=2200&q=85", alt: "Minimal watch product, temporary project visual", kind: "wide" },
      { src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1600&q=85", alt: "Camera product, temporary project visual", kind: "pair" },
      { src: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=2200&q=85", alt: "Printed design materials, temporary project visual", kind: "wide" },
    ],
  },
  {
    slug: "client-project-03",
    number: "03",
    title: "Client Project 03",
    focus: "Identity system",
    year: "2026",
    headline: "A system with purpose.",
    description: "A placeholder identity system showing how a consistent visual language can extend across touchpoints.",
    collaborator: "To be confirmed",
    tags: ["Identity system", "Packaging", "Art direction"],
    images: [
      { src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=2200&q=85", alt: "Retro product, temporary project visual", kind: "wide" },
      { src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1600&q=85", alt: "Product photography, temporary project visual", kind: "pair" },
      { src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=2200&q=85", alt: "Minimal product detail, temporary project visual", kind: "wide" },
    ],
  },
];

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function PlaceholderProjectPage({ params }: { params: { slug: string } }) {
  const projectIndex = projects.findIndex((item) => item.slug === params.slug);
  const project = projects[projectIndex];
  if (!project) return null;
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="emre-project-page">
      <header className="site-header page-shell">
        <a href="/" className="brand-link" aria-label="Toothless home">
          <img src="/brand/logos/toothless-02.svg" alt="Toothless" className="brand-logo" />
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="/work" aria-current="page">Work</a>
          <a href="/studio">Studio</a>
          <a className="nav-contact" href="/contact">Let’s talk <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section className="emre-project-intro">
        <a className="emre-back-link" href="/work">← All projects</a>
        <div className="emre-project-title-row">
          <h1>{project.title}</h1>
          <span className="emre-project-year">{project.year}</span>
        </div>
        <div className="emre-project-details">
          <div className="emre-project-credits">
            <div><span>Client</span><p>{project.title} <small>(placeholder)</small></p></div>
            <div><span>Collaborator</span><p>{project.collaborator}</p></div>
            <div><span>Services</span><p>{project.focus}</p></div>
          </div>
          <div className="emre-project-summary">
            <p>{project.description}</p>
            <div className="emre-project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="emre-project-gallery" aria-label={project.title + " project imagery"}>
        {project.images.map((image, index) => (
          <figure className={"emre-project-frame emre-project-frame-" + (image.kind || "wide")} key={image.src}>
            <img src={image.src} alt={image.alt} loading={index === 0 ? "eager" : "lazy"} />
          </figure>
        ))}
        <p className="emre-placeholder-disclaimer">Project imagery is temporary and will be replaced with approved Toothless Studio work.</p>
      </section>

      <nav className="emre-project-navigation page-shell" aria-label="Project navigation">
        <a href="/work">← All projects</a>
        <a href={"/work/" + nextProject.slug}>Next project: {nextProject.title} <span aria-hidden="true">↗</span></a>
      </nav>

      <footer className="studio-footer">
        <div className="page-shell studio-footer-inner">
          <div className="studio-footer-top"><span className="footer-index">TOOTHLESS® / INDEPENDENT CREATIVE STUDIO</span><span className="footer-kicker">Have a good idea of your own?</span></div>
          <div className="studio-footer-main"><h2>Make it<br/><em>matter.</em></h2><div className="studio-footer-action"><p>Logos, identity and systems for people making something worth noticing.</p><a href="/contact" className="footer-cta">Let’s make it real <span aria-hidden="true">↗</span></a></div></div>
          <div className="studio-footer-bottom"><a className="footer-email" href="mailto:hi@toothless.design">hi@toothless.design</a><nav aria-label="Footer navigation"><a href="/">Home</a><a href="/work">Work</a><a href="/studio">Studio</a><a href="/contact">Contact</a></nav><span>© {new Date().getFullYear()} Toothless Studio</span></div>
        </div>
      </footer>
    </main>
  );
}
