import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Camera, Instagram, Mail, Menu, Play, Send, Sparkles, X, Youtube } from 'lucide-react';

const images = {
  hero: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=2200&q=85',
  archiveOne: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85',
  archiveTwo: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=85',
  archiveThree: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=85',
  frameOne: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=85',
  frameTwo: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85',
  frameThree: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=1000&q=85',
  frameFour: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1400&q=85',
};

const navItems = [['Poetry', 'poetry'], ['Photography', 'photography'], ['In My Voice', 'voice'], ['Midnight Thoughts', 'thoughts'], ['About', 'about']];

function SectionLabel({ number, children }: { number: string; children: string }) {
  return <p className="section-label"><span>{number}</span>{children}</p>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand-mark" href="#home" aria-label="Shadows and Scripts home"><span>S</span><i>&</i><span>S</span></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          {navItems.map(([label, href]) => <a key={href} href={`#${href}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <a className="nav-note" href="#contact">Leave a note <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation"><Menu size={22} /></button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image" style={{ backgroundImage: `url(${images.hero})` }} />
          <div className="hero-vignette" />
          <div className="hero-content">
            <p className="eyebrow"><span className="dot" />A creative journal by Mihika Gera</p>
            <h1>Shadows<br /><em>and</em> Scripts</h1>
            <p className="hero-subtitle">Words for the things we feel<br className="desktop-only" /> but don't always know how to say.</p>
            <p className="hero-support">Poetry, photography, visual stories, and midnight thoughts — collected in one place.</p>
            <div className="hero-actions"><a className="button button-blue" href="#archives">Enter the Shadows <ArrowDownRight size={17} /></a><a className="text-link" href="#poetry">Read the Scripts <ArrowDownRight size={17} /></a></div>
          </div>
          <div className="hero-bottom"><span>Est. 2026</span><span>Scroll to wander <ArrowDownRight size={16} /></span></div>
        </section>

        <section className="welcome section-wrap">
          <SectionLabel number="01 /" >The beginning</SectionLabel>
          <div className="welcome-copy"><h2>Welcome to<br /><em>the Shadows.</em></h2><div><p>“Some stories are written.<br />Some are photographed.<br />Some stay somewhere between silence and words.</p><p>Shadows and Scripts is a creative space for all of them.”</p></div></div>
        </section>

        <section className="categories section-wrap" id="thoughts">
          <div className="section-intro"><SectionLabel number="02 /">Ways to wander</SectionLabel><p>Four doors into the same night.<br />Take your time.</p></div>
          <div className="category-grid">
            {[['01', 'Poetry', 'Original poems, fragments, verses, and thoughts.', 'Read the Poetry →'], ['02', 'Photography', 'Street photography, atmospheric frames, details, places, and moments.', 'View the Frames →'], ['03', 'In My Voice', 'A recurring storytelling series featuring narrated/visual poetry and personal creative pieces.', 'Enter IMV →'], ['04', 'Midnight Thoughts', "Short reflections, observations, one-liners, journal-like writing, and things that don't fit neatly anywhere else.", 'Read the Thoughts →']].map(([n, title, copy, cta], index) => <a className={`category-card card-${index + 1}`} href={index === 0 ? '#poetry' : index === 1 ? '#photography' : index === 2 ? '#voice' : '#contact'} key={title}><span className="card-number">{n}</span><h3>{title}</h3><p>{copy}</p><span className="card-cta">{cta} <ArrowUpRight size={16} /></span></a>)}
          </div>
        </section>

        <section className="archives section-wrap" id="archives">
          <div className="section-intro archive-heading"><div><SectionLabel number="03 /">Selected pieces</SectionLabel><h2>From the<br /><em>Archives</em></h2></div><p>Little worlds, kept<br />between the pages.</p></div>
          <div className="archive-grid">
            {[['01', images.archiveOne, 'The quiet between', 'Midnight Thoughts', 'On the strange comfort of not having to explain yourself.'], ['02', images.archiveTwo, 'Where the wild things are', 'Photography', 'A collection of places that felt like a memory.'], ['03', images.archiveThree, 'After the last light', 'Poetry', 'Some endings arrive softly.'],].map(([n, image, title, category, desc]) => <article className="archive-card" key={title}><div className="archive-image" style={{ backgroundImage: `url(${image})` }}><span>{n}</span><button aria-label={`Read ${title}`}><ArrowUpRight size={20} /></button></div><div className="archive-meta"><p>{category}</p><h3>{title}</h3><span>{desc}</span></div></article>)}
          </div>
        </section>

        <section className="poem section-wrap" id="poetry"><div className="poem-aside"><SectionLabel number="04 /">A small offering</SectionLabel><span>Poetry / 001</span></div><div className="poem-body"><h2>A Few Words<br /><em>Before You Leave</em></h2><div className="poem-text"><p>There is a version of you<br />the night remembers —<br />soft around the edges,<br />still learning how to stay.</p><p>Leave the light on.<br />Some things only find their way<br />home when the world<br />has gone quiet.</p></div><a className="text-link" href="#archives">Read More Poetry <ArrowDownRight size={17} /></a></div></section>

        <section className="photo-section section-wrap" id="photography"><div className="photo-heading"><div><SectionLabel number="05 /">Light, found</SectionLabel><h2>Frames from<br /><em>the in-between</em></h2></div><a className="text-link" href="#contact">View the full archive <ArrowUpRight size={17} /></a></div><div className="photo-grid">{[[images.frameOne, 'The hour before', 'New Delhi / 02:14 AM'], [images.frameTwo, 'Rooms that remember', 'Somewhere quiet'], [images.frameThree, 'A study in blue', 'Old city / monsoon'], [images.frameFour, 'After the rain', 'On the way home']].map(([image, title, location], i) => <div className={`photo-frame frame-${i + 1}`} style={{ backgroundImage: `url(${image})` }} key={title}><div className="frame-overlay"><span>{title}</span><small>{location}</small><b>View Frame <ArrowUpRight size={14} /></b></div></div>)}</div></section>

        <section className="voice-section" id="voice"><div className="voice-inner section-wrap"><div className="voice-top"><SectionLabel number="06 /">A series in sound</SectionLabel><span className="voice-symbol"><Sparkles size={17} /> headphones recommended</span></div><div className="voice-content"><div><h2>In My<br /><em>Voice</em></h2><p>Because some words<br />are meant to be heard.</p></div><div className="voice-description"><p>Poetry, narration, visuals, music, and the spaces between them. IMV is where a page becomes a room you can step inside.</p><a className="button button-outline" href="#contact"><Play size={15} fill="currentColor" /> Enter the series</a></div></div><div className="episodes">{['Episode 01 / The things we carry', 'Episode 02 / Letters to the dark', 'Episode 03 / Coming soon'].map((episode, i) => <div className="episode" key={episode}><span>{episode}</span>{i < 2 ? <button aria-label="Play episode"><Play size={13} fill="currentColor" /></button> : <small>soon</small>}</div>)}</div></div></section>

        <section className="about section-wrap" id="about"><div className="about-image"><div className="portrait-mark">M<br /><span>G</span></div></div><div className="about-copy"><SectionLabel number="07 /">A little context</SectionLabel><h2>Behind<br /><em>the Scripts</em></h2><p>Shadows and Scripts is a creative project by Mihika Gera — a space built around poetry, photography, storytelling, and the strange little thoughts that become stories when you give them enough time.</p><div className="social-row"><a href="#contact"><Instagram size={17} /> Instagram</a><a href="#contact"><X size={17} /> X</a><a href="#contact"><Youtube size={17} /> YouTube</a></div></div></section>

        <section className="contact section-wrap" id="contact"><div className="contact-copy"><SectionLabel number="08 /">The last page (for now)</SectionLabel><h2>Leave a<br /><em>Shadow Behind</em></h2><p>Have a thought, a hello, or a story to share?<br />The door is always open.</p></div><form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="contact-form">{sent ? <div className="sent"><Sparkles size={25} /><h3>It's found its way to me.</h3><p>Thank you for leaving a little something behind.</p></div> : <><label>Name<input required type="text" placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@example.com" /></label><label>Message<textarea required placeholder="Write something..." rows={3} /></label><button className="button button-blue" type="submit">Send into the Shadows <Send size={16} /></button></>}</form></section>
      </main>

      <footer><div className="footer-brand"><a className="brand-mark" href="#home"><span>S</span><i>&</i><span>S</span></a><div><strong>Shadows and Scripts</strong><small>Words. Frames. Stories.</small></div></div><span>© 2026 Shadows and Scripts.</span><span className="footer-made">Made after midnight <span>✦</span></span></footer>
    </div>
  );
}

export default App;
