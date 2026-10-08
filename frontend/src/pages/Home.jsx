import { Link } from 'react-router-dom';

const services = [
  ['◈', 'Website Development', 'Fast, responsive websites that turn visitors into customers.'],
  ['✦', 'Web Application', 'Scalable platforms designed around the way your team works.'],
  ['⌁', 'UI/UX Design', 'Thoughtful interfaces that make every interaction feel effortless.'],
  ['◉', 'Digital Marketing', 'Campaigns that put your brand in front of the right audience.'],
  ['⌘', 'SEO', 'A clear search strategy that builds lasting organic growth.'],
  ['↗', 'Google Ads', 'High-intent campaigns that deliver measurable returns.'],
];

const projects = [
  { name: 'LumeLoom', type: 'E-commerce', image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=800&q=80' },
  { name: 'NearMed', type: 'Healthcare platform', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80' },
  { name: 'HubFlex', type: 'Business platform', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80' },
];

const faqs = ['What services does Misorium Technologies provide?', 'How long does a website project take?', 'Can you handle both design and development?', 'Do you provide digital marketing after launch?', 'How does the project process work?'];

function SectionTitle({ label, children, light = false }) {
  return <div className={`home-title ${light ? 'home-title-light' : ''}`}><span>{label}</span><h2>{children}</h2></div>;
}

export default function Home() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="home-kicker">YOUR TECHNOLOGY PARTNER</p>
            <h1>We Build Digital Experiences That <em>Grow Businesses.</em></h1>
            <p className="hero-lede">Websites, digital marketing, UI/UX and technology solutions designed to move your business forward.</p>
            <div className="hero-actions"><Link className="home-button home-button-red" to="/book-consultation">Start a Project <b>→</b></Link><Link className="home-button home-button-outline" to="/services">Explore Services <b>→</b></Link></div>
            <div className="hero-proof"><span>✓</span><strong>100+</strong> Projects Completed <span>✓</span><strong>50+</strong> Happy Businesses</div>
          </div>
          <div className="hero-art"><img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1000&q=85" alt="Business team collaborating around a laptop" /><div className="growth-card"><b>↗</b><strong>Business Growth</strong><small>+230% Avg. Client Growth</small></div><div className="hero-float">✦ &nbsp; Digital strategy<br /><small>built for your future</small></div></div>
        </div>
      </section>

      <section className="stats-strip"><div className="container stats-grid"><div><b>100+</b><span>Projects Completed</span></div><div><b>50+</b><span>Happy Businesses</span></div><div><b>10+</b><span>Industries Served</span></div><div><b>5+</b><span>Years of Experience</span></div></div></section>

      <section className="home-section"><div className="container"><SectionTitle label="WHAT WE DO">Complete Digital Solutions <em>for Your Business</em></SectionTitle><p className="section-intro">From your first idea to your next big milestone, we bring strategy, creativity and technology together.</p><div className="service-grid">{services.map(([icon, title, text]) => <article className="service-card" key={title}><i>{icon}</i><h3>{title}</h3><p>{text}</p><Link to="/services">Learn More →</Link></article>)}</div></div></section>

      <section className="project-band"><div className="container project-band-inner"><div><p className="home-kicker">FEATURED WORK</p><h2>Our Recent <em>Projects</em></h2><p>Explore a few of the digital experiences we have created for ambitious businesses.</p><Link className="home-button home-button-outline white" to="/portfolio">View Full Portfolio →</Link></div><div className="mini-projects">{projects.map((project) => <div className="mini-project" key={project.name}><img src={project.image} alt="" /><b>{project.name}</b><small>{project.type}</small></div>)}</div></div></section>

      <section className="home-section projects-section"><div className="container"><SectionTitle label="FEATURED WORK">Our Recent <em>Projects.</em></SectionTitle><p className="section-intro">Real results for real businesses. Explore how we turn ideas into digital experiences that perform.</p><div className="project-grid">{projects.map((project) => <article className="project-card" key={project.name}><img src={project.image} alt={`${project.name} project`} /><div><small>{project.type}</small><h3>{project.name}</h3><p>A thoughtful digital experience designed for growth and clarity.</p><Link to="/portfolio">View Case Study →</Link></div></article>)}</div></div></section>

      <section className="split-section"><div className="container split-grid"><div className="split-image"><img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85" alt="Woman working on a laptop" /><span>+230%<small>Avg. Client Growth</small></span></div><div><SectionTitle label="WHY CHOOSE MISORIUM">Your Growth is <em>Our Priority.</em></SectionTitle><p className="section-intro">We combine strategy, creativity and technology to deliver digital solutions that create real business value.</p><div className="benefit-list"><b>✦ <span>Business-First Approach<small>Every decision is built around your goals and outcomes.</small></span></b><b>◈ <span>Custom Solutions<small>No templates. Just technology tailored to your business.</small></span></b><b>↗ <span>Result-Driven Strategies<small>Clear, measurable results from strategy to launch.</small></span></b><b>⌁ <span>Latest Technologies<small>Modern tools that keep your business ahead.</small></span></b></div></div></div></section>

      <section className="process-section"><div className="container"><SectionTitle label="OUR PROCESS">From Idea to <em>Impact.</em></SectionTitle><p className="section-intro">We follow a proven process to turn your vision into a successful digital product.</p><div className="process-grid">{['Consultation', 'Strategy', 'Design', 'Development', 'Testing', 'Launch', 'Growth'].map((step, index) => <div className="process-step" key={step}><i>0{index + 1}</i><h3>{step}</h3><p>Clear milestones and focused collaboration at every stage.</p></div>)}</div></div></section>

      <section className="home-section industries"><div className="container"><SectionTitle label="INDUSTRIES WE SERVE">Solutions <em>for Every Industry.</em></SectionTitle><p className="section-intro">Whether you are building a new business or scaling an established one, we help you grow.</p><div className="industry-grid">{['E-commerce', 'Healthcare', 'Education', 'Real Estate', 'Finance', 'Professional Services'].map((item, i) => <div key={item}><div className={`industry-image industry-${i}`} /><h3>{item}</h3><p>Digital solutions built around your customers.</p><Link to="/industries">Learn More →</Link></div>)}</div></div></section>

      <section className="testimonial-section"><div className="container"><SectionTitle label="CLIENT TESTIMONIALS">What Our Clients <em>Say About Us.</em></SectionTitle><div className="testimonial-grid">{['Misorium built our e-commerce website and the results exceeded our expectations.','The team understood our vision perfectly and delivered a platform we are proud of.','Working with Misorium has been a great experience. They listen and deliver quality every time.'].map((quote, i) => <blockquote key={quote}><div className="stars">★★★★★</div><p>“{quote}”</p><footer><b>{['Rahul Mehta', 'Dr. Priya Sharma', 'Aakash Verma'][i]}</b><small>Founder, Business</small></footer></blockquote>)}</div></div></section>

      <section className="cta-section"><div className="container cta-grid"><div><SectionTitle label="READY TO GET STARTED">Let’s Build Something <em>Great Together.</em></SectionTitle><p>Have a project in mind? We’d love to hear about your goals and explore how Misorium can help you achieve them.</p><Link className="home-button home-button-red" to="/book-consultation">Start Your Project →</Link></div><div className="laptop-card">✦<br /><strong>Let’s Start<br />Your Project</strong><span>230%<small>Avg. Growth</small></span></div></div></section>

      <section className="faq-section"><div className="container faq-grid"><div><SectionTitle label="FAQ">Got Questions?<br /><em>We’ve Got Answers.</em></SectionTitle><p>Find answers to common questions about our services, process, timelines and support.</p><Link className="home-button home-button-blue" to="/contact">Still Have Questions? →</Link></div><div className="faq-list">{faqs.map((faq, i) => <details key={faq} open={i === 0}><summary><span>0{i + 1}</span>{faq}<b>+</b></summary><p>Our team will work with you to create a clear, practical solution tailored to your goals.</p></details>)}</div></div></section>
    </div>
  );
}
