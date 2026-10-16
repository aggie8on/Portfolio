const projects = [
  { slug: "toothless-studio", title: "Toothless Studio", service: "Identity system", year: "2026" },
  { slug: "client-project-01", title: "Client project 01", service: "Brand identity", year: "In progress" },
  { slug: "client-project-02", title: "Client project 02", service: "Visual identity", year: "In progress" },
  { slug: "client-project-03", title: "Client project 03", service: "Identity system", year: "In progress" },
];

export default function WorkPage() {
  return <main className="minimal-site">
    <header className="site-header page-shell minimal-header">
      <a href="/" className="minimal-wordmark" aria-label="Toothless home">toothless<span>®</span></a>
      <nav className="main-nav" aria-label="Main navigation"><a href="/work" aria-current="page">Work</a><a href="/studio">Studio</a><a href="/contact">Contact <span aria-hidden="true">↗</span></a></nav>
    </header>
    <section className="minimal-page-intro page-shell">
      <p className="minimal-overline">Toothless® / Selected work</p>
      <h1>A few things<br/><em>we’ve made.</em></h1>
      <p>Brand identities and visual systems built around a clear idea.</p>
    </section>
    <section className="minimal-work minimal-work-index page-shell" aria-label="Project index">
      <div className="minimal-section-head"><h2>Projects</h2><span>01 — 04</span></div>
      <div className="minimal-project-list">
        {projects.map((project, index) => <a className="minimal-project-row" href={"/work/" + project.slug} key={project.slug}>
          <span className="minimal-project-index">0{index + 1}</span>
          <span className="minimal-project-name">{project.title}</span>
          <span className="minimal-project-type">{project.service}</span>
          <span className="minimal-project-year">{project.year}</span>
          <span className="minimal-project-arrow" aria-hidden="true">↗</span>
        </a>)}
      </div>
      <p className="minimal-note">Project names and imagery marked as placeholders are temporary and will be replaced with approved work.</p>
    </section>
    <footer className="minimal-footer page-shell">
      <div className="minimal-footer-top"><p>Have something good in mind?</p><a href="/contact">Let’s talk <span aria-hidden="true">↗</span></a></div>
      <div className="minimal-footer-bottom"><a className="minimal-wordmark" href="/">toothless<span>®</span></a><a href="mailto:hi@toothless.design">hi@toothless.design</a><span>© {new Date().getFullYear()} Toothless Studio</span></div>
    </footer>
  </main>;
}
