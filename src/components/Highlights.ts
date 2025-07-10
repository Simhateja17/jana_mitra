import '../styles/main.css';

export class Highlights {
    private element: HTMLElement;

    constructor() {
        this.element = this.createHighlightsSection();
    }

    private createHighlightsSection(): HTMLElement {
        const section = document.createElement('section');
        section.className = 'section highlights-section';
        section.id = 'highlights';

        const container = document.createElement('div');
        container.className = 'container';

        const title = document.createElement('h2');
        title.className = 'section-title';
        title.textContent = 'Our Highlights';

        const gridContainer = document.createElement('div');
        gridContainer.className = 'highlights-grid';

        const highlights = [
            { icon: '🌟', title: 'ISO REGISTERED', description: 'Certified for quality excellence' },
            { icon: '✅', title: 'TUDA APPROVED', description: 'Fully compliant with regulations' },
            { icon: '📈', title: 'GROWTH ORIENTED', description: 'Focused on continuous improvement' },
            { icon: '🤝', title: 'TRANSPARENCY', description: 'Clear and honest communications' },
            { icon: '💰', title: 'VALUE FOR MONEY', description: 'Competitive and fair pricing' },
            { icon: '📋', title: 'CLEAR DOCUMENTATION', description: 'Thorough and precise paperwork' }
        ];

        highlights.forEach(highlight => {
            const card = this.createHighlightCard(highlight);
            gridContainer.appendChild(card);
        });

        container.appendChild(title);
        container.appendChild(gridContainer);
        section.appendChild(container);

        return section;
    }

    private createHighlightCard({ icon, title, description }: { icon: string; title: string; description: string }): HTMLElement {
        const card = document.createElement('div');
        card.className = 'highlight-card stat-item';

        const iconElement = document.createElement('div');
        iconElement.className = 'highlight-icon';
        iconElement.textContent = icon;

        const titleElement = document.createElement('h3');
        titleElement.className = 'highlight-title';
        titleElement.textContent = title;

        const descElement = document.createElement('p');
        descElement.className = 'highlight-description';
        descElement.textContent = description;

        card.appendChild(iconElement);
        card.appendChild(titleElement);
        card.appendChild(descElement);

        return card;
    }

    public getElement(): HTMLElement {
        return this.element;
    }
}
