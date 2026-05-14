export default function Highlights() {
    const highlights = [
        { icon: '🌟', title: 'ISO REGISTERED', description: 'Certified for quality excellence' },
        { icon: '✅', title: 'TUDA APPROVED', description: 'Fully compliant with regulations' },
        { icon: '📈', title: 'GROWTH ORIENTED', description: 'Focused on continuous improvement' },
        { icon: '🤝', title: 'TRANSPARENCY', description: 'Clear and honest communications' },
        { icon: '💰', title: 'VALUE FOR MONEY', description: 'Competitive and fair pricing' },
        { icon: '📋', title: 'CLEAR DOCUMENTATION', description: 'Thorough and precise paperwork' }
    ];

    return (
        <section id="highlights" className="section highlights-section">
            <div className="container">
                <h2 className="section-title">Our Highlights</h2>
                <div className="highlights-grid">
                    {highlights.map((highlight, index) => (
                        <div key={index} className="highlight-card stat-item">
                            <div className="highlight-icon">{highlight.icon}</div>
                            <h3 className="highlight-title">{highlight.title}</h3>
                            <p className="highlight-description">{highlight.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
