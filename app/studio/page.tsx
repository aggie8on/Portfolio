const capabilities = [
  ["01", "Brand foundations", "Positioning, brand direction and the central idea that gives the identity purpose."],
  ["02", "Logo & identity", "Distinctive marks and a visual language built to feel unmistakably yours."],
  ["03", "Identity systems", "Typography, colour, layout and guidelines that make the brand work consistently."],
  ["04", "Art direction", "A considered visual point of view for the way your brand shows up."],
];
const steps = [
  ["01", "Listen", "Understand the business, people and problem before reaching for a visual answer."],
  ["02", "Define", "Find the most useful idea and agree on a clear creative direction."],
  ["03", "Design", "Explore, build and refine the identity across the touchpoints that matter."],
  ["04", "Deliver", "Hand over a practical system and the assets needed to put it to work."],
];
export default function StudioPage() {
 return <main><header className="site-header page-shell"><a href="/" className="brand-link" aria-label="Toothless home"><img src="/brand/logos/toothless-02.svg" alt="Toothless" className="brand-logo" /></a><nav className="main-nav" aria-label="Main navigation"><a href="/work">Work</a><a href="/studio" aria-current="page">Studio</a><a className="nav-contact" href="/contact">Let’s talk <span aria-hidden="true">↗</span></a></nav></header>
 <section className="inner-hero page-shell"><p className="section-label">The studio <span>— 01</span></p><h1>Small by design.<br/><em>Clear by nature.</em></h1><p className="inner-lede">Toothless is an independent creative studio focused on logos, identity and systems — turning sharp ideas into thoughtful brands built to work beyond the first impression.</p></section>
 <section className="studio-statement"><div className="page-shell studio-statement-inner"><p className="section-label">What we believe <span>— 02</span></p><h2>Good design isn’t decoration. It’s a way to make the <em>right thing clear.</em></h2></div></section>
 <section className="studio-services page-shell"><div className="section-heading"><p className="section-label">What we bring <span>— 03</span></p><h2>Thoughtful from the <em>start.</em></h2></div><div className="service-list">{capabilities.map(item=><article className="service-row" key={item[0]}><span className="service-number">{item[0]}</span><h3>{item[1]}</h3><div className="service-details"><p>{item[2]}</p></div><span className="service-arrow" aria-hidden="true">↗</span></article>)}</div></section>
 <section className="studio-process"><div className="page-shell"><div className="section-heading"><p className="section-label">How we work <span>— 04</span></p><h2>A clear process.<br/><em>Good collaboration.</em></h2></div><div className="studio-steps">{steps.map(step=><article key={step[0]}><span>{step[0]}</span><h3>{step[1]}</h3><p>{step[2]}</p></article>)}</div></div></section>
 <footer className="studio-footer"><div className="page-shell studio-footer-inner"><div className="studio-footer-top"><span className="footer-index">TOOTHLESS® / INDEPENDENT CREATIVE STUDIO</span><span className="footer-kicker">The right thing, made clear.</span></div><div className="studio-footer-main"><h2>Make it<br/><em>matter.</em></h2><div className="studio-footer-action"><p>Logos, identity and systems for people making something worth noticing.</p><a href="/contact" className="footer-cta">Start with a conversation <span aria-hidden="true">↗</span></a></div></div><div className="studio-footer-bottom"><a className="footer-email" href="mailto:hi@toothless.design">hi@toothless.design</a><nav aria-label="Footer navigation"><a href="/">Home</a><a href="/work">Work</a><a href="/studio">Studio</a><a href="/contact">Contact</a></nav><span>© {new Date().getFullYear()} Toothless Studio</span></div></div></footer></main>;
}