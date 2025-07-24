import '../styles/main.css';

export class MissionVisionValues {
    private element: HTMLElement;

    constructor() {
        this.element = this.createMVVSection();
    }

    private createMVVSection(): HTMLElement {
        const section = document.createElement('section');
        section.className = 'section mvv-section';
        section.id = 'mission-vision-values';

        const container = document.createElement('div');
        container.className = 'container';

        const gridContainer = document.createElement('div');
        gridContainer.className = 'mvv-grid';

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

        mvvData.forEach(item => {
            const card = this.createMVVCard(item);
            gridContainer.appendChild(card);
        });

        container.appendChild(gridContainer);
        section.appendChild(container);

        return section;
    }

    private createMVVCard({ icon, title, description }: { icon: string; title: string; description: string }): HTMLElement {
        const card = document.createElement('div');
        card.className = 'mvv-card stat-item';

        const iconElement = document.createElement('div');
        iconElement.className = 'mvv-icon';
        iconElement.textContent = icon;

        const titleElement = document.createElement('h3');
        titleElement.className = 'mvv-title';
        titleElement.textContent = title;

        const descElement = document.createElement('p');
        descElement.className = 'mvv-description';
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
