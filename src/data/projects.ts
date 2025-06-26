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
        title: 'Skyline Towers',
        description: 'Premium residential complex with modern amenities and sustainable design features.',
        location: 'Mumbai, Maharashtra',
        status: 'completed',
        category: 'residential',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600',
        completionDate: 'March 2023',
        size: '450 Units',
        features: ['24/7 Security', 'Swimming Pool', 'Gym', 'Green Building Certified']
    },
    {
        id: '2',
        title: 'Metro Business Park',
        description: 'State-of-the-art commercial complex designed for modern businesses.',
        location: 'Bangalore, Karnataka',
        status: 'ongoing',
        category: 'commercial',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600',
        completionDate: 'Expected: December 2024',
        size: '2.5 Million Sq.ft',
        features: ['LEED Platinum', 'Smart Building Tech', 'EV Charging', 'Food Court']
    },
    {
        id: '3',
        title: 'Green Valley Villas',
        description: 'Luxury villa project with emphasis on sustainable living and nature integration.',
        location: 'Pune, Maharashtra',
        status: 'completed',
        category: 'residential',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600',
        completionDate: 'July 2023',
        size: '120 Villas',
        features: ['Solar Powered', 'Rainwater Harvesting', 'Landscaped Gardens', 'Club House']
    },
    {
        id: '4',
        title: 'City Center Mall',
        description: 'Modern shopping and entertainment destination in the heart of the city.',
        location: 'Delhi NCR',
        status: 'completed',
        category: 'commercial',
        image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600',
        completionDate: 'January 2023',
        size: '1.8 Million Sq.ft',
        features: ['Multiplex Cinema', '300+ Retail Stores', 'Food Court', 'Parking for 2000 Cars']
    },
    {
        id: '5',
        title: 'Express Highway Project',
        description: '6-lane expressway connecting major cities with modern infrastructure.',
        location: 'Gujarat',
        status: 'ongoing',
        category: 'infrastructure',
        image: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=600',
        completionDate: 'Expected: June 2025',
        size: '150 KM',
        features: ['Smart Traffic Management', 'Service Lanes', 'Rest Areas', 'Emergency Services']
    },
    {
        id: '6',
        title: 'Riverside Apartments',
        description: 'Affordable housing project with river views and modern amenities.',
        location: 'Chennai, Tamil Nadu',
        status: 'ongoing',
        category: 'residential',
        image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=600',
        completionDate: 'Expected: March 2024',
        size: '600 Units',
        features: ['River View', 'Children\'s Play Area', 'Community Center', 'Sports Complex']
    }
]; 