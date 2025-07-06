export interface Project {
    id: string;
    title: string;
    description: string;
    location: string;
    status: 'completed' | 'ongoing';
    category: 'residential' | 'commercial' | 'infrastructure';
    image: string;
    imagePosition?: {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
    };
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
    mapEmbed?: string;
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
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3185.6108261327854!2d79.5943056!3d13.8292778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDQ5JzQ1LjQiTiA3OcKwMzUnMzkuNSJF!5e1!3m2!1sen!2sin!4v1751624435427!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
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
        amenities: standardAmenities,
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.0126221174232!2d79.5353851!3d13.6199532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d48de12ace90b%3A0x9dbc767c9d259783!2sPapanaidupet%20Rd%2C%20Gudimallam%2C%20Andhra%20Pradesh%20517526!5e1!3m2!1sen!2sin!4v1751624529538!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
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
        amenities: standardAmenities,
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3914.68455299434!2d79.588453!3d13.819386999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDQ5JzA5LjgiTiA3OcKwMzUnMTguNCJF!5e1!3m2!1sen!2sin!4v1751776362855!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
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
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.587883944773!2d79.5870755!3d13.884489199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d2508384b3185%3A0xe34c33199f62a9ba!2sSSR%20highway%20gardens!5e1!3m2!1sen!2sin!4v1751624173951!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
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
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.472023163967!2d79.5872995!3d13.832027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d3af5edc7763d%3A0xf3b7d4102815493e!2sJanamithra%20Sree%20Sai%20Brundavanam!5e1!3m2!1sen!2sin!4v1751624198107!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
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
        amenities: standardAmenities,
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15671.593296685214!2d79.54086989999999!3d13.626849949999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d489457060eb5%3A0x5a1dac9d6f83c59!2sAnagunta%2C%20Andhra%20Pradesh!5e1!3m2!1sen!2sin!4v1751624475065!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
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
        amenities: standardAmenities,
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3916.293452544922!2d79.595057!3d13.723328999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDQzJzI0LjAiTiA3OcKwMzUnNDIuMiJF!5e1!3m2!1sen!2sin!4v1751776275346!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
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
        amenities: standardAmenities,
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d979.0191867986016!2d79.5988333!3d13.736305600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDQ0JzEwLjciTiA3OcKwMzUnNTUuOCJF!5e1!3m2!1sen!2sin!4v1751624229693!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
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
        amenities: standardAmenities,
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3915.4584586969845!2d79.594572!3d13.771336999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDQ2JzE2LjgiTiA3OcKwMzUnNDAuNSJF!5e1!3m2!1sen!2sin!4v1751624091982!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        id: '12',
        title: 'Janamitra Highway Gardens',
        description: 'More details about this project will be available soon. Please contact us for more information.',
        location: 'Tirupati, Andhra Pradesh',
        status: 'ongoing',
        category: 'residential',
        image: 'assets/images/Janamitra Highway Gardnes.webp',
        features: ['Prime Location', 'Modern Amenities', 'Excellent Connectivity'],
        amenities: standardAmenities,
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3914.68455299434!2d79.588453!3d13.819386999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDQ5JzA5LjgiTiA3OcKwMzUnMTguNCJF!5e1!3m2!1sen!2sin!4v1751776362855!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        locationHighlights: [
            'Beside Tirupati-Sri Kalahasti 6 Lane Highway',
            '5 km from International Airport, TCL, Dixon, Karbonn, Celkon, foxlink Etc.,',
            '5 Min Drive to Tirupati, IIT, IISER Universities',
            'Nearby Sri Engineering College',
            '5 Min Drive to Deccan University Medical College',
            '5 Min drive to Renigunta Highway Junction',
            '15 min drive to Tirupati City'
        ],
        gallery: [
            'assets/images/Gallery of Janamitra Highway Gardens.webp',
            'assets/images/Gallery 2 of JANAMITRA HIGHWAY GARDENS.webp',
            'assets/images/GALLERY 3 OF JANAMITRA HIGHWAY GARDENS.webp',
            'assets/images/Gallery 4 of Janamitra Highway Gardens.webp'
        ],
        sitePlan: 'assets/images/Screenshot 2025-07-06 101345.webp'
    }
]; 