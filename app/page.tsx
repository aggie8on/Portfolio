const services = [
  {
    number: "01",
    title: "Brand foundations",
    description: "Positioning, naming support and the thinking that gives a visual identity something real to stand for.",
    tags: ["Direction", "Positioning", "Concept"],
  },
  {
    number: "02",
    title: "Logo & identity",
    description: "Distinctive marks and considered visual identities that feel unmistakably yours, not borrowed from a trend.",
    tags: ["Logo design", "Visual identity", "Art direction"],
  },
  {
    number: "03",
    title: "Identity systems",
    description: "Flexible rules, assets and guidelines that help your brand stay recognisable wherever it shows up.",
    tags: ["Typography", "Colour", "Guidelines"],
  },
];

const principles = [
  {
    number: "01",
    title: "Start with the why.",
    description: "The strongest visual decisions come from a clear idea. We get to the heart of the thing before making it look like anything.",
  },
  {
    number: "02",
    title: "Make it work hard.",
    description: "A logo is only the beginning. The identity needs to work across real touchpoints, at different sizes, in everyday use.",
  },
  {
    number: "03",
    title: "Leave room to grow.",
    description: "A good system is recognisable without being rigid. It gives a brand a point of view and space to keep becoming.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header page-shell">
        <a href="#top" className="brand-link" aria-label="Toothless home">
          <img src="/brand/logos/toothless-02.svg" alt="Toothless" className="brand-logo" />
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#studio">Studio</a>
          <a href="#services">What we do</a>
          <a className="nav-contact" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section id="top" className="hero page-shell">
        <div className="eyebrow"><span className="status-dot" /> Independent creative studio</div>
        <div className="hero-grid">
          <div className="hero-copy">
            <h1>Good ideas deserve a <em>distinct identity.</em></h1>
            <div className="hero-bottom">
              <p>Toothless builds logos, visual identities and flexible systems for people making something worth noticing.</p>
              <a className="text-link" href="#studio">Get to know us <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="hero-mark" aria-label="Toothless identity mark">
            <div className="mark-frame">
              <img src="/brand/icons/toothless-09.svg" alt="" className="hero-symbol" />
              <span className="mark-corner mark-corner-tl" />
              <span className="mark-corner mark-corner-br" />
            </div>
            <div className="mark-caption"><span>TOOTHLESS®</span><span>IDENTITY & SYSTEMS</span></div>
          </div>
        </div>
        <div className="hero-footnote"><span>Clear thinking. Distinctive design.</span><span>Scroll to explore ↓</span></div>
      </section>

      <section id="studio" className="studio-band">
        <div className="page-shell studio-layout">
          <p className="section-label">A little about us <span>— 01</span></p>
          <div className="studio-copy">
            <h2>We make brands feel like <em>themselves.</em></h2>
            <p>Toothless is an independent creative studio focused on logos, identity and systems. We turn sharp ideas into thoughtful, distinctive identities — made to work beyond the first impression.</p>
            <p>Small by design. Curious by nature. Serious about the details that make the difference.</p>
          </div>
          <div className="studio-stamp">
            <img src="/brand/icons/toothless-10.svg" alt="" />
            <span>Less noise.<br />More meaning.</span>
          </div>
        </div>
      </section>

      <section id="services" className="services-section page-shell">
        <div className="section-heading">
          <p className="section-label">What we do <span>— 02</span></p>
          <h2>From first thought<br />to <em>full expression.</em></h2>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <div className="service-details">
                <p>{service.description}</p>
                <div className="tag-list">
                  {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              <span className="service-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="principles-section">
        <div className="page-shell">
          <div className="section-heading principles-heading">
            <p className="section-label">How we think <span>— 03</span></p>
            <h2>Good design has a reason <em>to exist.</em></h2>
          </div>
          <div className="principles-grid">
            {principles.map((principle) => (
              <article className="principle-card" key={principle.number}>
                <span className="principle-number">{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section page-shell">
        <div className="process-intro">
          <p className="section-label">A clear process <span>— 04</span></p>
          <h2>Thoughtful work.<br /><em>No mystery.</em></h2>
          <p>Every project is different, but the aim stays the same: make the right decisions, together, and turn them into a system you can actually use.</p>
        </div>
        <ol className="process-list">
          <li><span>01</span><div><h3>Listen</h3><p>Understand the business, the people and the problem.</p></div></li>
          <li><span>02</span><div><h3>Define</h3><p>Find the central idea and the direction worth pursuing.</p></div></li>
          <li><span>03</span><div><h3>Design</h3><p>Build the identity and refine the details until they feel right.</p></div></li>
          <li><span>04</span><div><h3>Deliver</h3><p>Hand over a coherent, practical system ready for real life.</p></div></li>
        </ol>
      </section>

      <footer id="contact" className="contact-section">
        <div className="page-shell">
          <div className="contact-top"><span>Have something good in mind?</span><span>TOOTHLESS® · INDEPENDENT BY DESIGN</span></div>
          <h2>Let’s make it<br /><em>mean something.</em></h2>
          <a className="contact-link" href="mailto:hello@example.com?subject=Project%20enquiry%20%E2%80%94%20Toothless">Start a conversation <span aria-hidden="true">↗</span></a>
          <div className="footer-bottom">
            <a href="#top" className="footer-brand"><img src="/brand/logos/toothless-05.svg" alt="Toothless" /></a>
            <span>Logos, identity & systems.</span>
            <a href="#top">Back to top ↑</a>
            <span>© {new Date().getFullYear()} Toothless Studio</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
