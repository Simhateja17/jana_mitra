import { gsap } from 'gsap';

interface CubesConfig {
    gridSize?: number;
    cubeSize?: number;
    maxAngle?: number;
    radius?: number;
    easing?: string;
    duration?: { enter: number; leave: number };
    cellGap?: number;
    borderStyle?: string;
    faceColor?: string;
    shadow?: boolean | string;
    autoAnimate?: boolean;
    rippleOnClick?: boolean;
    rippleColor?: string;
    rippleSpeed?: number;
    sections?: number; // Number of sections to divide the grid into
}

export class Cubes {
    private container: HTMLElement;
    private scene: HTMLDivElement;
    private config: Required<CubesConfig>;
    private rafId: number | null = null;
    private idleTimer: NodeJS.Timeout | null = null;
    private userActive = false;
    private simPos = { x: 0, y: 0 };
    private simTarget = { x: 0, y: 0 };
    private simRAF: number | null = null;
    private currentActiveSection: number = -1;

    constructor(container: HTMLElement, config: CubesConfig = {}) {
        this.container = container;
        this.config = {
            gridSize: config.gridSize || 12,
            cubeSize: config.cubeSize || 0,
            maxAngle: config.maxAngle || 60,
            radius: config.radius || 4,
            easing: config.easing || 'power3.out',
            duration: config.duration || { enter: 0.3, leave: 0.6 },
            cellGap: config.cellGap || 5,
            borderStyle: config.borderStyle || '2px dashed #5227FF',
            faceColor: config.faceColor || '#1a1a2e',
            shadow: config.shadow !== undefined ? config.shadow : false,
            autoAnimate: config.autoAnimate !== undefined ? config.autoAnimate : true,
            rippleOnClick: config.rippleOnClick !== undefined ? config.rippleOnClick : true,
            rippleColor: config.rippleColor || '#ff6b6b',
            rippleSpeed: config.rippleSpeed || 1.5,
            sections: config.sections || 4
        };

        this.scene = this.createScene();
        this.setupEventListeners();
        this.startAutoAnimation();
    }

    private createScene(): HTMLDivElement {
        const wrapper = document.createElement('div');
        wrapper.className = 'cubes-animation';
        wrapper.style.cssText = `
            --cube-face-border: ${this.config.borderStyle};
            --cube-face-bg: ${this.config.faceColor};
            --cube-face-shadow: ${this.config.shadow === true ? '0 0 6px rgba(0,0,0,.5)' : this.config.shadow || 'none'};
            position: absolute;
            top: 0;
            right: -10%;
            width: 70%;
            height: 100%;
            opacity: 0.4;
        `;

        const scene = document.createElement('div');
        scene.className = 'cubes-scene';
        scene.style.cssText = `
            display: grid;
            width: 100%;
            height: 100%;
            grid-template-columns: repeat(${this.config.gridSize}, 1fr);
            grid-template-rows: repeat(${this.config.gridSize}, 1fr);
            gap: ${this.config.cellGap}%;
            perspective: 99999999px;
            grid-auto-rows: 1fr;
        `;

        // Create cubes
        for (let r = 0; r < this.config.gridSize; r++) {
            for (let c = 0; c < this.config.gridSize; c++) {
                const cube = this.createCube(r, c);
                scene.appendChild(cube);
            }
        }

        wrapper.appendChild(scene);
        this.container.appendChild(wrapper);
        return scene;
    }

    private createCube(row: number, col: number): HTMLDivElement {
        const cube = document.createElement('div');
        cube.className = 'cube';
        cube.dataset.row = row.toString();
        cube.dataset.col = col.toString();
        cube.style.cssText = `
            position: relative;
            width: 100%;
            height: 100%;
            aspect-ratio: 1 / 1;
            transform-style: preserve-3d;
        `;

        const faces = ['top', 'bottom', 'left', 'right', 'front', 'back'];
        faces.forEach(face => {
            const faceEl = document.createElement('div');
            faceEl.className = `cube-face cube-face--${face}`;
            faceEl.style.cssText = `
                position: absolute;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                background: var(--cube-face-bg);
                border: var(--cube-face-border);
                opacity: 1;
            `;

            // Apply face-specific transforms
            switch(face) {
                case 'top':
                    faceEl.style.transform = 'translateY(-50%) rotateX(90deg)';
                    break;
                case 'bottom':
                    faceEl.style.transform = 'translateY(50%) rotateX(-90deg)';
                    break;
                case 'left':
                    faceEl.style.transform = 'translateX(-50%) rotateY(-90deg)';
                    break;
                case 'right':
                    faceEl.style.transform = 'translateX(50%) rotateY(90deg)';
                    break;
                case 'front':
                case 'back':
                    faceEl.style.transform = 'rotateY(-90deg) translateX(50%) rotateY(90deg)';
                    break;
            }

            cube.appendChild(faceEl);
        });

        // Add individual cube hover effects
        this.addIndividualHoverEffects(cube, row, col);

        return cube;
    }

    private getSectionFromPosition(rowCenter: number, colCenter: number): number {
        if (this.config.sections === 2) {
            // Simple left/right division
            const halfWidth = this.config.gridSize / 2;
            return colCenter < halfWidth ? 0 : 1;
        }
        
        if (this.config.sections === 36) {
            // 2x2 cube sections (6x6 grid of sections)
            const sectionRow = Math.floor(rowCenter / 2);
            const sectionCol = Math.floor(colCenter / 2);
            return Math.min(sectionRow * 6 + sectionCol, 35);
        }
        
        // For other section counts, use grid-based approach
        const sectionsPerRow = Math.ceil(Math.sqrt(this.config.sections));
        const sectionsPerCol = Math.ceil(this.config.sections / sectionsPerRow);
        
        const sectionHeight = this.config.gridSize / sectionsPerRow;
        const sectionWidth = this.config.gridSize / sectionsPerCol;
        
        const sectionRow = Math.floor(rowCenter / sectionHeight);
        const sectionCol = Math.floor(colCenter / sectionWidth);
        
        return Math.min(sectionRow * sectionsPerCol + sectionCol, this.config.sections - 1);
    }

    private getCubeSectionIndex(row: number, col: number): number {
        if (this.config.sections === 2) {
            // Simple left/right division
            const halfWidth = this.config.gridSize / 2;
            return col < halfWidth ? 0 : 1;
        }
        
        if (this.config.sections === 36) {
            // 2x2 cube sections (6x6 grid of sections)
            const sectionRow = Math.floor(row / 2);
            const sectionCol = Math.floor(col / 2);
            return Math.min(sectionRow * 6 + sectionCol, 35);
        }
        
        // For other section counts, use grid-based approach
        const sectionsPerRow = Math.ceil(Math.sqrt(this.config.sections));
        const sectionsPerCol = Math.ceil(this.config.sections / sectionsPerRow);
        
        const sectionHeight = this.config.gridSize / sectionsPerRow;
        const sectionWidth = this.config.gridSize / sectionsPerCol;
        
        const sectionRow = Math.floor(row / sectionHeight);
        const sectionCol = Math.floor(col / sectionWidth);
        
        return Math.min(sectionRow * sectionsPerCol + sectionCol, this.config.sections - 1);
    }

    private addIndividualHoverEffects(cube: HTMLDivElement, row: number, col: number): void {
        // Remove individual hover effects since we're now using section-based animation
        // Individual cube hover is disabled in favor of section-based movement
    }

    private tiltAt(rowCenter: number, colCenter: number): void {
        const activeSection = this.getSectionFromPosition(rowCenter, colCenter);
        this.currentActiveSection = activeSection;
        
        const cubes = this.scene.querySelectorAll<HTMLDivElement>('.cube');
        cubes.forEach(cube => {
            const r = parseInt(cube.dataset.row!);
            const c = parseInt(cube.dataset.col!);
            const cubeSection = this.getCubeSectionIndex(r, c);
            
            // Only animate cubes in the active section
            if (cubeSection === activeSection) {
                const dist = Math.hypot(r - rowCenter, c - colCenter);
                
                if (dist <= this.config.radius) {
                    const pct = 1 - dist / this.config.radius;
                    const angle = pct * this.config.maxAngle;
                    
                    // Calculate movement direction from center
                    const dirX = (c - colCenter) * pct * 25;
                    const dirY = (r - rowCenter) * pct * 25;
                    const dirZ = pct * 40;
                    
                    // Add some randomness for more dynamic movement
                    const randomX = (Math.random() - 0.5) * pct * 20;
                    const randomY = (Math.random() - 0.5) * pct * 20;
                    const randomZ = (Math.random() - 0.5) * pct * 25;
                    
                    gsap.to(cube, {
                        duration: this.config.duration.enter,
                        ease: this.config.easing,
                        overwrite: true,
                        rotateX: -angle + randomX * 0.6,
                        rotateY: angle + randomY * 0.6,
                        rotateZ: randomX * 0.4,
                        x: dirX + randomX,
                        y: dirY + randomY,
                        z: dirZ + randomZ,
                        scale: 1 + pct * 0.3,
                    });
                } else {
                    // Reset cubes in active section that are outside radius
                    gsap.to(cube, {
                        duration: this.config.duration.leave,
                        ease: 'power3.out',
                        overwrite: true,
                        rotateX: 0,
                        rotateY: 0,
                        rotateZ: 0,
                        x: 0,
                        y: 0,
                        z: 0,
                        scale: 1,
                    });
                }
            } else {
                // Reset cubes in inactive sections
                gsap.to(cube, {
                    duration: this.config.duration.leave * 0.8,
                    ease: 'power3.out',
                    overwrite: true,
                    rotateX: 0,
                    rotateY: 0,
                    rotateZ: 0,
                    x: 0,
                    y: 0,
                    z: 0,
                    scale: 1,
                });
            }
        });
    }

    private setupEventListeners(): void {
        const onPointerMove = (e: PointerEvent) => {
            this.userActive = true;
            if (this.idleTimer) clearTimeout(this.idleTimer);

            const rect = this.scene.getBoundingClientRect();
            const cellW = rect.width / this.config.gridSize;
            const cellH = rect.height / this.config.gridSize;
            const colCenter = (e.clientX - rect.left) / cellW;
            const rowCenter = (e.clientY - rect.top) / cellH;

            if (this.rafId) cancelAnimationFrame(this.rafId);
            this.rafId = requestAnimationFrame(() => this.tiltAt(rowCenter, colCenter));

            this.idleTimer = setTimeout(() => {
                this.userActive = false;
            }, 3000);
        };

        const resetAll = () => {
            const cubes = this.scene.querySelectorAll<HTMLDivElement>('.cube');
            cubes.forEach(cube => {
                gsap.to(cube, {
                    duration: this.config.duration.leave,
                    rotateX: 0,
                    rotateY: 0,
                    rotateZ: 0,
                    x: 0,
                    y: 0,
                    z: 0,
                    scale: 1,
                    ease: 'power3.out',
                });
            });
        };

        const onClick = (e: MouseEvent) => {
            if (!this.config.rippleOnClick) return;
            
            const rect = this.scene.getBoundingClientRect();
            const cellW = rect.width / this.config.gridSize;
            const cellH = rect.height / this.config.gridSize;
            const colHit = Math.floor((e.clientX - rect.left) / cellW);
            const rowHit = Math.floor((e.clientY - rect.top) / cellH);

            const baseRingDelay = 0.15;
            const baseAnimDur = 0.3;
            const baseHold = 0.6;

            const spreadDelay = baseRingDelay / this.config.rippleSpeed;
            const animDuration = baseAnimDur / this.config.rippleSpeed;
            const holdTime = baseHold / this.config.rippleSpeed;

            const rings: Record<number, HTMLDivElement[]> = {};
            const cubes = this.scene.querySelectorAll<HTMLDivElement>('.cube');
            
            cubes.forEach(cube => {
                const r = parseInt(cube.dataset.row!);
                const c = parseInt(cube.dataset.col!);
                const dist = Math.hypot(r - rowHit, c - colHit);
                const ring = Math.round(dist);
                if (!rings[ring]) rings[ring] = [];
                rings[ring].push(cube);
            });

            Object.keys(rings)
                .map(Number)
                .sort((a, b) => a - b)
                .forEach(ring => {
                    const delay = ring * spreadDelay;
                    const faces = rings[ring].flatMap(cube =>
                        Array.from(cube.querySelectorAll<HTMLElement>('.cube-face'))
                    );

                    gsap.to(faces, {
                        backgroundColor: this.config.rippleColor,
                        duration: animDuration,
                        delay,
                        ease: 'power3.out',
                    });
                    gsap.to(faces, {
                        backgroundColor: this.config.faceColor,
                        duration: animDuration,
                        delay: delay + animDuration + holdTime,
                        ease: 'power3.out',
                    });
                });
        };

        this.scene.addEventListener('pointermove', onPointerMove);
        this.scene.addEventListener('pointerleave', resetAll);
        this.scene.addEventListener('click', onClick);
    }

    private startAutoAnimation(): void {
        if (!this.config.autoAnimate) return;
        
        let currentSection = 0;
        const sectionCenters = this.getSectionCenters();
        
        this.simPos = {
            x: sectionCenters[currentSection].x,
            y: sectionCenters[currentSection].y,
        };
        this.simTarget = {
            x: sectionCenters[currentSection].x,
            y: sectionCenters[currentSection].y,
        };

        const speed = 0.015;
        const sectionSwitchDelay = this.config.sections === 36 ? 500 : 4000; // 0.5 seconds per section for 36 sections, 4 seconds for others
        let lastSectionSwitch = Date.now();
        
        const loop = () => {
            if (!this.userActive) {
                // Check if it's time to switch sections
                if (Date.now() - lastSectionSwitch > sectionSwitchDelay) {
                    currentSection = (currentSection + 1) % this.config.sections;
                    this.simTarget = {
                        x: sectionCenters[currentSection].x,
                        y: sectionCenters[currentSection].y,
                    };
                    lastSectionSwitch = Date.now();
                }
                
                this.simPos.x += (this.simTarget.x - this.simPos.x) * speed;
                this.simPos.y += (this.simTarget.y - this.simPos.y) * speed;
                this.tiltAt(this.simPos.y, this.simPos.x);
            }
            this.simRAF = requestAnimationFrame(loop);
        };
        
        this.simRAF = requestAnimationFrame(loop);
    }

    private getSectionCenters(): Array<{x: number, y: number}> {
        const centers: Array<{x: number, y: number}> = [];
        
        if (this.config.sections === 2) {
            // Left and right sections
            const halfWidth = this.config.gridSize / 2;
            const centerY = this.config.gridSize / 2;
            
            // Left section center
            centers.push({ x: halfWidth / 2, y: centerY });
            // Right section center  
            centers.push({ x: halfWidth + halfWidth / 2, y: centerY });
        } else if (this.config.sections === 36) {
            // 2x2 cube sections (6x6 grid of sections)
            for (let sectionRow = 0; sectionRow < 6; sectionRow++) {
                for (let sectionCol = 0; sectionCol < 6; sectionCol++) {
                    const centerX = sectionCol * 2 + 1;
                    const centerY = sectionRow * 2 + 1;
                    centers.push({ x: centerX, y: centerY });
                }
            }
        } else {
            // For other section counts, use grid-based approach
            const sectionsPerRow = Math.ceil(Math.sqrt(this.config.sections));
            const sectionsPerCol = Math.ceil(this.config.sections / sectionsPerRow);
            
            const sectionHeight = this.config.gridSize / sectionsPerRow;
            const sectionWidth = this.config.gridSize / sectionsPerCol;
            
            for (let i = 0; i < this.config.sections; i++) {
                const sectionRow = Math.floor(i / sectionsPerCol);
                const sectionCol = i % sectionsPerCol;
                
                const centerX = sectionCol * sectionWidth + sectionWidth / 2;
                const centerY = sectionRow * sectionHeight + sectionHeight / 2;
                
                centers.push({ x: centerX, y: centerY });
            }
        }
        
        return centers;
    }

    public destroy(): void {
        if (this.rafId) cancelAnimationFrame(this.rafId);
        if (this.idleTimer) clearTimeout(this.idleTimer);
        if (this.simRAF) cancelAnimationFrame(this.simRAF);
        
        const wrapper = this.container.querySelector('.cubes-animation');
        if (wrapper) {
            this.container.removeChild(wrapper);
        }
    }
} 