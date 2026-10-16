export default function Home() {
  const projects = [
    { slug: "toothless-studio", title: "Toothless Studio", type: "Identity system", year: "2026" },
    { slug: "client-project-01", title: "Client project 01", type: "Brand identity", year: "In progress" },
    { slug: "client-project-02", title: "Client project 02", type: "Visual identity", year: "In progress" },
    { slug: "client-project-03", title: "Client project 03", type: "Identity system", year: "In progress" },
  ];

  return <main className="minimal-site">
    <header className="site-header page-shell minimal-header">
      <a href="/" className="minimal-wordmark" aria-label="Toothless home">toothless<span>®</span></a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="/work">Work</a><a href="/studio">Studio</a><a href="/contact">Contact <span aria-hidden="true">↗</span></a>
      </nav>
    </header>

    <section className="minimal-intro page-shell">
      <p className="minimal-overline">Independent creative studio · Available for select projects</p>
      <h1>We build thoughtful identities for <em>good ideas.</em></h1>
      <div className="minimal-intro-bottom">
        <p>Toothless is a small design studio shaping brands through clear thinking, distinctive identity and useful systems.</p>
        <a className="minimal-arrow-link" href="/work">Explore selected work <span aria-hidden="true">↘</span></a>
      </div>
    </section>

    <section className="minimal-work page-shell" aria-labelledby="selected-work">
      <div className="minimal-section-head"><h2 id="selected-work">Selected work</h2><span>2026 — 01/04</span></div>
      <div className="minimal-project-list">
        {projects.map((project, index) => <a className="minimal-project-row" href={"/work/" + project.slug} key={project.slug}>
          <span className="minimal-project-index">0{index + 1}</span>
          <span className="minimal-project-name">{project.title}</span>
          <span className="minimal-project-type">{project.type}</span>
          <span className="minimal-project-year">{project.year}</span>
          <span className="minimal-project-arrow" aria-hidden="true">↗</span>
        </a>)}
      </div>
      <p className="minimal-note">Some project names and visuals are placeholders and will be replaced with approved work.</p>
      <a className="minimal-arrow-link minimal-all-work" href="/work">All projects <span aria-hidden="true">↗</span></a>
    </section>

    <section className="minimal-about page-shell">
      <p className="minimal-overline">A little about us</p>
      <div><h2>Small by design.<br/><em>Serious about the details.</em></h2><p>We partner with people building something meaningful, turning the idea at its centre into a brand that feels clear, distinct and ready to grow.</p><a className="minimal-arrow-link" href="/studio">More about the studio <span aria-hidden="true">↗</span></a></div>
    </section>

    <footer className="minimal-footer page-shell">
      <div className="minimal-footer-top"><p>Have something good in mind?</p><a href="/contact">Let’s talk <span aria-hidden="true">↗</span></a></div>
      <div className="minimal-footer-bottom"><a className="minimal-wordmark" href="/">toothless<span>®</span></a><a href="mailto:hi@toothless.design">hi@toothless.design</a><span>© {new Date().getFullYear()} Toothless Studio</span></div>
    </footer>
  </main>;
}
