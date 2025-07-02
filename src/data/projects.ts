export interface Project {
    id: string;
    title: string;
    description: string;
    location: string;
    status: 'completed' | 'ongoing';
    category: 'residential' | 'commercial' | 'infrastructure';
    image: string;
    completionDate?: string;
    size?: string;
    features: string[];
    amenities?: {
        name: string;
        icon: string;
    }[];
    gallery?: string[];
    sitePlan?: string;
    locationHighlights?: string[];
    plotDetails?: {
        plotNo: string;
        facing: string;
        size: string;
        sqfeet: number;
        sqyard: number;
        ankanams: number;
    }[];
    additionalInfo?: {
        landParcel?: string;
        floor?: string;
    };
}

// Standard amenities for all projects
const standardAmenities = [
    { name: 'Children\'s Park', icon: 'fas fa-child' },
    { name: 'Walking Tracks', icon: 'fas fa-walking' },
    { name: 'Meditation Center', icon: 'fas fa-peace' },
    { name: 'Power', icon: 'fas fa-bolt' },
    { name: 'Water Supply', icon: 'fas fa-tint' },
    { name: 'Open Drainage', icon: 'fas fa-water' }
];

export const projects: Project[] = [
    {
        id: '1',
        title: 'Sri Venkata Sai Nagar',
        description: 'Premium residential layout with world-class sports facilities including tennis courts and recreational amenities.',
        location: 'Tirupati, Andhra Pradesh',
        status: 'completed',
        category: 'residential',
        image: 'assets/images/sree-venkata-sai-nagar.png',
        completionDate: 'March 2023',
        size: '200 Plots',
        features: ['Tennis Courts', '24/7 Security', 'Children\'s Play Area', 'Landscaped Gardens', 'Club House'],
        amenities: standardAmenities,
        gallery: [
            'assets/images/sri-venkata-sai-nagar-gallery-1.webp',
            'assets/images/sri-venkata-sai-nagar-gallery-2.webp',
            'assets/images/sri-venkata-sai-nagar-gallery-3.webp'
        ],
        sitePlan: 'assets/images/sri-venkata-sai-nagar-site-plan.webp',
        locationHighlights: [
            'Beside NIMZ (National Investment Manufacture Zone)',
            'Adidas Shoe Company',
            'NBPPL, Mannavaram (NTPC, BHEL Power Projects Ltd.)',
            'Vayhan Coffee Industries',
            'Textile Park',
            'Proposed IT Hub (ITIR)',
            'Skill Development University',
            'Cricket Stadium',
            'Somany Tiles Company',
            'Tourism University',
            'IIT (Indian Institute of Technology)',
            'IISER (Indian Institute of Science Educational Research)',
            'Yerpedu Vyasarasamram (10 Min. Drive)',
            'International Airport, Tirupati (15 Min. Drive)',
            'Srikalahasti Temple (15 Min. Drive)',
            'Renigunta Railway Junction (15 Min. Drive)',
            'Tirupati city (25 Min. Drive)'
        ],
        additionalInfo: {
            landParcel: '40.55 Acres',
            floor: '16 Plots'
        }
    },
    {
        id: '2',
        title: 'Sri Sai Krishna Nagar',
        description: 'Premium residential layout with modern amenities and elegant design.',
        location: 'Tirupati, Andhra Pradesh',
        status: 'ongoing',
        category: 'residential',
        image: 'assets/images/ongoing-project-1.png',
        completionDate: 'Expected: December 2024',
        size: '200 Plots',
        features: ['Gated Community', 'Modern Architecture', 'Landscaped Gardens', 'Security System'],
        amenities: standardAmenities,
        gallery: [
            'assets/images/sri-sai-krishna-nagar-gallery-1.webp',
            'assets/images/sri-sai-krishna-nagar-gallery-2.webp',
            'assets/images/sri-sai-krishna-nagar-gallery-3.webp'
        ],
        sitePlan: 'assets/images/sri-sai-krishna-nagar-site-plan.webp',
        locationHighlights: [
            'Adidas Shoe Company',
            'NBPPL, Mannavaram (NTPC, BHEL Power Projects Ltd.)',
            'Vayhan Coffee Industries',
            'Textile Park',
            'Somany Tiles Company',
            'Proposed IT Hub (ITIR)',
            'Skill Development University',
            'Cricket Stadium',
            'Tourism University',
            'Tirupati city (25 Min. Drive)'
        ]
    },
    {
        id: '3',
        title: 'Sri Sai Ram Nagar',
        description: 'Strategically located gated community with modern infrastructure and premium amenities.',
        location: 'Tirupati, Andhra Pradesh',
        status: 'completed',
        category: 'residential',
        image: 'assets/images/sree-sai-ram-nagar.png',
        completionDate: 'July 2023',
        size: '150 Plots',
        features: ['Gated Community', 'Wide Roads', 'Underground Drainage', 'Street Lighting', 'Security System'],
        amenities: standardAmenities
    },
    {
        id: '4',
        title: 'Sree Sai Green Gardens',
        description: 'Eco-friendly residential development with tree-lined avenues and sustainable design.',
        location: 'Tirupati, Andhra Pradesh',
        status: 'completed',
        category: 'residential',
        image: 'assets/images/sreesai-green-gardens.png',
        completionDate: 'January 2023',
        size: '180 Plots',
        features: ['Palm Tree Avenues', 'Green Building Design', 'Rainwater Harvesting', 'Landscaped Entrance', 'Eco-Friendly Layout'],
        amenities: standardAmenities
    },
    {
        id: '5',
        title: 'SSR Highway Gardens',
        description: 'Premium residential development with modern infrastructure and highway connectivity.',
        location: 'Tirupati, Andhra Pradesh',
        status: 'ongoing',
        category: 'residential',
        image: 'assets/images/ongoing-project-2.png',
        completionDate: 'Expected: June 2025',
        size: '180 Plots',
        features: ['Highway Connectivity', 'Modern Design', 'Gated Community', 'Premium Amenities'],
        amenities: standardAmenities,
        plotDetails: [
            { plotNo: '1', facing: 'EAST', size: '49.5X50.4', sqfeet: 2494.8, sqyard: 277.2, ankanams: 69.3 },
            { plotNo: '2', facing: 'EAST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '3', facing: 'EAST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '4', facing: 'EAST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '5', facing: 'EAST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '6', facing: 'SOUTH EAST', size: '40X50', sqfeet: 2000, sqyard: 222.22, ankanams: 55.55 },
            { plotNo: '7', facing: 'NORTH EAST', size: '40X50', sqfeet: 2000, sqyard: 222.22, ankanams: 55.55 },
            { plotNo: '8', facing: 'EAST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '9', facing: 'EAST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '10', facing: 'EAST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '11', facing: 'EAST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '12', facing: 'EAST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '13', facing: 'EAST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '14', facing: 'EAST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '15', facing: 'EAST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '16', facing: 'EAST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '17', facing: 'EAST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '18', facing: 'EAST', size: '27.15X50', sqfeet: 1357.5, sqyard: 150.83, ankanams: 37.70 },
            { plotNo: '19', facing: 'EAST', size: '27.95X50.05', sqfeet: 1398.89, sqyard: 155.43, ankanams: 38.85 },
            { plotNo: '20', facing: 'WEST', size: '30X50.4', sqfeet: 1512, sqyard: 168, ankanams: 42 },
            { plotNo: '21', facing: 'WEST', size: '27.9X50', sqfeet: 1395, sqyard: 155, ankanams: 38.75 },
            { plotNo: '22', facing: 'WEST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '23', facing: 'WEST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '24', facing: 'WEST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '25', facing: 'WEST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '26', facing: 'SOUTH WEST', size: '40X50', sqfeet: 2000, sqyard: 222.22, ankanams: 55.55 },
            { plotNo: '27', facing: 'NORTH WEST', size: '40X50', sqfeet: 2000, sqyard: 222.22, ankanams: 55.55 },
            { plotNo: '28', facing: 'WEST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '29', facing: 'WEST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '30', facing: 'WEST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '31', facing: 'WEST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '32', facing: 'WEST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '33', facing: 'WEST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '34', facing: 'WEST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '35', facing: 'WEST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '36', facing: 'WEST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '37', facing: 'WEST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '38', facing: 'WEST', size: '52.3X50.05', sqfeet: 2617.61, sqyard: 290.84, ankanams: 72.71 },
            { plotNo: '39', facing: 'EAST', size: '45.5X50.4', sqfeet: 2295.72, sqyard: 255.08, ankanams: 63.77 },
            { plotNo: '40', facing: 'EAST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '41', facing: 'EAST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '42', facing: 'EAST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '43', facing: 'EAST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '44', facing: 'EAST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '45', facing: 'SOUTH EAST', size: '40X50', sqfeet: 2000, sqyard: 222.22, ankanams: 55.55 },
            { plotNo: '46', facing: 'NORTH EAST', size: '40X50', sqfeet: 2000, sqyard: 222.22, ankanams: 55.55 },
            { plotNo: '47', facing: 'EAST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '48', facing: 'EAST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '49', facing: 'EAST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '50', facing: 'EAST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '51', facing: 'EAST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '52', facing: 'EAST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '53', facing: 'EAST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '54', facing: 'EAST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '55', facing: 'EAST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '56', facing: 'EAST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '57', facing: 'EAST', size: '46.9X50.05', sqfeet: 2347.34, sqyard: 260.81, ankanams: 65.2 },
            { plotNo: '58', facing: 'WEST', size: '45.5X50.4', sqfeet: 2295.72, sqyard: 255.08, ankanams: 63.77 },
            { plotNo: '59', facing: 'WEST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '60', facing: 'WEST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '61', facing: 'WEST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '62', facing: 'WEST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '63', facing: 'WEST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '64', facing: 'SOUTH WEST', size: '40X50', sqfeet: 2000, sqyard: 222.22, ankanams: 55.55 },
            { plotNo: '65', facing: 'NORTH WEST', size: '40X50', sqfeet: 2000, sqyard: 222.22, ankanams: 55.55 },
            { plotNo: '66', facing: 'WEST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '67', facing: 'WEST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '68', facing: 'WEST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '69', facing: 'WEST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '70', facing: 'WEST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '71', facing: 'WEST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '72', facing: 'WEST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '73', facing: 'WEST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '74', facing: 'WEST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '75', facing: 'WEST', size: '30X50', sqfeet: 1500, sqyard: 166.66, ankanams: 41.66 },
            { plotNo: '76', facing: 'WEST', size: '44.10X50.05', sqfeet: 2207.2, sqyard: 245.24, ankanams: 61.31 },
            { plotNo: '77', facing: 'EAST', size: '35X60.45', sqfeet: 2115.75, sqyard: 235.08, ankanams: 58.77 },
            { plotNo: '78', facing: 'EAST', size: '30X60', sqfeet: 1800, sqyard: 200, ankanams: 50 },
            { plotNo: '79', facing: 'EAST', size: '30X60', sqfeet: 1800, sqyard: 200, ankanams: 50 },
            { plotNo: '80', facing: 'EAST', size: '30X60', sqfeet: 1800, sqyard: 200, ankanams: 50 },
            { plotNo: '81', facing: 'EAST', size: '30X60', sqfeet: 1800, sqyard: 200, ankanams: 50 },
            { plotNo: '82', facing: 'EAST', size: '30X60', sqfeet: 1800, sqyard: 200, ankanams: 50 },
            { plotNo: '83', facing: 'EAST', size: '30X60', sqfeet: 1800, sqyard: 200, ankanams: 50 },
            { plotNo: '84', facing: 'SOUTH EAST', size: '40X60', sqfeet: 2400, sqyard: 266.66, ankanams: 66.66 },
            { plotNo: '85', facing: 'NORTH EAST', size: '40X60', sqfeet: 2400, sqyard: 266.66, ankanams: 66.66 },
            { plotNo: '86', facing: 'EAST', size: '30X60', sqfeet: 1800, sqyard: 200, ankanams: 50 },
            { plotNo: '87', facing: 'EAST', size: '30X60', sqfeet: 1800, sqyard: 200, ankanams: 50 },
            { plotNo: '88', facing: 'EAST', size: '30X60', sqfeet: 1800, sqyard: 200, ankanams: 50 },
            { plotNo: '89', facing: 'EAST', size: '30X60', sqfeet: 1800, sqyard: 200, ankanams: 50 },
            { plotNo: '90', facing: 'EAST', size: '30X60', sqfeet: 1800, sqyard: 200, ankanams: 50 },
            { plotNo: '91', facing: 'EAST', size: '30X60', sqfeet: 1800, sqyard: 200, ankanams: 50 },
            { plotNo: '92', facing: 'EAST', size: '30X60', sqfeet: 1800, sqyard: 200, ankanams: 50 },
            { plotNo: '93', facing: 'EAST', size: '30X60', sqfeet: 1800, sqyard: 200, ankanams: 50 },
            { plotNo: '94', facing: 'EAST', size: '30X60', sqfeet: 1800, sqyard: 200, ankanams: 50 },
            { plotNo: '95', facing: 'EAST', size: '30X60', sqfeet: 1800, sqyard: 200, ankanams: 50 },
            { plotNo: '96', facing: 'EAST', size: '38.90X60.05', sqfeet: 2335.94, sqyard: 259.54, ankanams: 64.76 }
        ]
    },
    {
        id: '6',
        title: 'Sri Sai Brindavanam',
        description: 'Affordable housing project with river views and modern amenities.',
        location: 'Tirupati, Andhra Pradesh',
        status: 'ongoing',
        category: 'residential',
        image: 'assets/images/ongoing-project-3.png',
        completionDate: 'Expected: March 2024',
        size: '600 Units',
        features: ['River View', 'Children\'s Play Area', 'Community Center', 'Sports Complex'],
        amenities: standardAmenities,
        gallery: [
            'assets/images/sri-sai-brindavanam-gallery-1.webp',
            'assets/images/sri-sai-brindavanam-gallery-2.webp',
            'assets/images/sri-sai-brindavanam-gallery-3.webp'
        ],
        sitePlan: 'assets/images/sri-sai-brindavanam-site-plan.webp',
        locationHighlights: [
            'Proposed IT Hub (TITAN)',
            'Indian Institute of Technology (IIT)',
            'Indian Institute of Science Education and Research (IISER)',
            'National Institute of Miners Health (NIMH)',
            'BHEL & NTPC Mannavaram Projects',
            'Yerpedu Vyasarama Junction (5 min. drive)',
            'International Airport, Tirupati (10 min. drive)',
            '10 min drive to Sri Kalahasti',
            'Renigunta Railway Junction (15 min. drive)',
            'Tirupati City (20 min. drive)'
        ]
    },
        {
        id: '7',
        title: 'Sri Venkatachalapathi Nagar',
        description: 'Well-planned residential layout with traditional architecture and modern amenities.',
        location: 'Tirupati, Andhra Pradesh',
        status: 'completed',
        category: 'residential',
        image: 'assets/images/sri-venkata-chalapathi-nagar.png',
        completionDate: 'September 2022',
        size: '120 Plots',
        features: ['Traditional Design', 'Gated Community', 'Landscaped Entrance', 'Street Lighting', 'Security Gates'],
        amenities: standardAmenities
    },
    {
        id: '8',
        title: 'Royal Nagar',
        description: 'Premium residential development with contemporary design and luxury amenities.',
        location: 'Tirupati, Andhra Pradesh',
        status: 'completed',
        category: 'residential',
        image: 'assets/images/royal-nagar.png',
        completionDate: 'November 2022',
        size: '100 Plots',
        features: ['Modern Architecture', 'Premium Location', 'Wide Roads', 'Landscaping', 'Elite Community'],
        amenities: standardAmenities
    },
    {
        id: '9',
        title: 'Janamithra Township',
        description: 'Modern integrated township with contemporary design and world-class infrastructure.',
        location: 'Tirupati, Andhra Pradesh',
        status: 'completed',
        category: 'residential',
        image: 'assets/images/janamitra-township.png',
        completionDate: 'May 2023',
        size: '300 Units',
        features: ['Integrated Township', 'Modern Design', 'Premium Amenities', 'Landscaped Gardens', 'Community Center'],
        amenities: standardAmenities
    },
    {
        id: '10',
        title: 'Janamithra Green Gardens',
        description: 'Eco-conscious residential development with extensive landscaping and green features.',
        location: 'Tirupati, Andhra Pradesh',
        status: 'completed',
        category: 'residential',
        image: 'assets/images/janamitra-green-gardens.png',
        completionDate: 'August 2023',
        size: '250 Plots',
        features: ['Extensive Landscaping', 'Green Gardens', 'Eco-Friendly Design', 'Tree-Lined Roads', 'Sustainable Living'],
        amenities: standardAmenities
    },
    {
        id: '11',
        title: 'Janamithra Sai Teja Enclave',
        description: 'Premium residential enclave with elegant architecture and world-class amenities.',
        location: 'Tirupati, Andhra Pradesh',
        status: 'ongoing',
        category: 'residential',
        image: 'assets/images/ongoing-project-4.png',
        completionDate: 'Expected: September 2024',
        size: '150 Units',
        features: ['Elegant Architecture', 'Premium Enclave', 'Security System', 'Landscaped Gardens', 'Community Center'],
        amenities: standardAmenities
    }
]; 