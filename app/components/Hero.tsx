export default function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-background"></div>
            <div className="container">
                <div className="hero-content">
                    <div className="hero-badge">Excellence in Infrastructure</div>
                    <h1 className="hero-title">
                        <span className="hero-title-line"><span className="hero-highlight-blue">Building</span> <span className="hero-highlight-white-gold">Blocks</span><span className="hero-comma">,</span></span>
                        <span className="hero-title-line"><span className="hero-highlight-white-blue">Creating</span> <span className="hero-highlight">Futures</span></span>
                    </h1>
                    <p className="hero-subtitle">Leading infrastructure company delivering excellence in construction</p>
                    <div className="hero-cta-wrapper">
                        <a href="#projects" className="hero-cta primary">
                            <span>Explore Our Projects</span>
                            <i className="fas fa-arrow-right"></i>
                        </a>
                        <a href="#contact" className="hero-cta secondary">
                            <span>Get in Touch</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
