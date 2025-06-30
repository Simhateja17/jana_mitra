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
}

export const projects: Project[] = [
    {
        id: '1',
        title: 'Sri Venkata Sai Nagar',
        description: 'Premium residential layout with world-class sports facilities including tennis courts and recreational amenities.',
        location: 'Hyderabad, Telangana',
        status: 'completed',
        category: 'residential',
        image: 'assets/images/sree-venkata-sai-nagar.png',
        completionDate: 'March 2023',
        size: '200 Plots',
        features: ['Tennis Courts', '24/7 Security', 'Children\'s Play Area', 'Landscaped Gardens', 'Club House']
    },
    {
        id: '2',
        title: 'Sri Sai Krishna Nagar',
        description: 'Premium residential layout with modern amenities and elegant design.',
        location: 'Bangalore, Karnataka',
        status: 'ongoing',
        category: 'residential',
        image: 'assets/images/ongoing-project-1.png',
        completionDate: 'Expected: December 2024',
        size: '200 Plots',
        features: ['Gated Community', 'Modern Architecture', 'Landscaped Gardens', 'Security System']
    },
    {
        id: '3',
        title: 'Sri Sai Ram Nagar',
        description: 'Strategically located gated community with modern infrastructure and premium amenities.',
        location: 'Hyderabad, Telangana',
        status: 'completed',
        category: 'residential',
        image: 'assets/images/sree-sai-ram-nagar.png',
        completionDate: 'July 2023',
        size: '150 Plots',
        features: ['Gated Community', 'Wide Roads', 'Underground Drainage', 'Street Lighting', 'Security System']
    },
    {
        id: '4',
        title: 'Sree Sai Green Gardens',
        description: 'Eco-friendly residential development with tree-lined avenues and sustainable design.',
        location: 'Hyderabad, Telangana',
        status: 'completed',
        category: 'residential',
        image: 'assets/images/sreesai-green-gardens.png',
        completionDate: 'January 2023',
        size: '180 Plots',
        features: ['Palm Tree Avenues', 'Green Building Design', 'Rainwater Harvesting', 'Landscaped Entrance', 'Eco-Friendly Layout']
    },
    {
        id: '5',
        title: 'SSR Highway Gardens',
        description: 'Premium residential development with modern infrastructure and highway connectivity.',
        location: 'Hyderabad, Telangana',
        status: 'ongoing',
        category: 'residential',
        image: 'assets/images/ongoing-project-2.png',
        completionDate: 'Expected: June 2025',
        size: '180 Plots',
        features: ['Highway Connectivity', 'Modern Design', 'Gated Community', 'Premium Amenities']
    },
    {
        id: '6',
        title: 'Sri Sai Brindavanam',
        description: 'Affordable housing project with river views and modern amenities.',
        location: 'Chennai, Tamil Nadu',
        status: 'ongoing',
        category: 'residential',
        image: 'assets/images/ongoing-project-3.png',
        completionDate: 'Expected: March 2024',
        size: '600 Units',
        features: ['River View', 'Children\'s Play Area', 'Community Center', 'Sports Complex']
    },
        {
        id: '7',
        title: 'Sri Venkatachalapathi Nagar',
        description: 'Well-planned residential layout with traditional architecture and modern amenities.',
        location: 'Hyderabad, Telangana',
        status: 'completed',
        category: 'residential',
        image: 'assets/images/sri-venkata-chalapathi-nagar.png',
        completionDate: 'September 2022',
        size: '120 Plots',
        features: ['Traditional Design', 'Gated Community', 'Landscaped Entrance', 'Street Lighting', 'Security Gates']
    },
    {
        id: '8',
        title: 'Royal Nagar',
        description: 'Premium residential development with contemporary design and luxury amenities.',
        location: 'Hyderabad, Telangana',
        status: 'completed',
        category: 'residential',
        image: 'assets/images/royal-nagar.png',
        completionDate: 'November 2022',
        size: '100 Plots',
        features: ['Modern Architecture', 'Premium Location', 'Wide Roads', 'Landscaping', 'Elite Community']
    },
    {
        id: '9',
        title: 'Janamithra Township',
        description: 'Modern integrated township with contemporary design and world-class infrastructure.',
        location: 'Hyderabad, Telangana',
        status: 'completed',
        category: 'residential',
        image: 'assets/images/janamitra-township.png',
        completionDate: 'May 2023',
        size: '300 Units',
        features: ['Integrated Township', 'Modern Design', 'Premium Amenities', 'Landscaped Gardens', 'Community Center']
    },
    {
        id: '10',
        title: 'Janamithra Green Gardens',
        description: 'Eco-conscious residential development with extensive landscaping and green features.',
        location: 'Hyderabad, Telangana',
        status: 'completed',
        category: 'residential',
        image: 'assets/images/janamitra-green-gardens.png',
        completionDate: 'August 2023',
        size: '250 Plots',
        features: ['Extensive Landscaping', 'Green Gardens', 'Eco-Friendly Design', 'Tree-Lined Roads', 'Sustainable Living']
    },
    {
        id: '11',
        title: 'Janamithra Sai Teja Enclave',
        description: 'Premium residential enclave with elegant architecture and world-class amenities.',
        location: 'Hyderabad, Telangana',
        status: 'ongoing',
        category: 'residential',
        image: 'assets/images/ongoing-project-4.png',
        completionDate: 'Expected: September 2024',
        size: '150 Units',
        features: ['Elegant Architecture', 'Premium Enclave', 'Security System', 'Landscaped Gardens', 'Community Center']
    }
]; 