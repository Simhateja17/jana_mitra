export default function MissionVisionValues() {
    const mvvData = [
        {
            icon: '🎯',
            title: 'MISSION',
            description: 'Deliver quality plots, ensuring transparency, integrity, and customer satisfaction.'
        },
        {
            icon: '👁️',
            title: 'VISION',
            description: 'To be the leading real estate company known for ethical practices.'
        },
        {
            icon: '💎',
            title: 'VALUES',
            description: 'Integrity, customer focus, quality, innovation, transparency, sustainability, excellence, teamwork, accountability.'
        }
    ];

    return (
        <section id="mission-vision-values" className="section mvv-section">
            <div className="container">
                <div className="mvv-grid">
                    {mvvData.map((item, index) => (
                        <div key={index} className="mvv-card stat-item">
                            <div className="mvv-icon">{item.icon}</div>
                            <h3 className="mvv-title">{item.title}</h3>
                            <p className="mvv-description">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
