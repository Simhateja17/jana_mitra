export interface Review {
    id: string;
    author: string;
    position: string;
    company?: string;
    rating: number;
    text: string;
    date: string;
}

export const reviews: Review[] = [
    {
        id: '1',
        author: 'Rajesh Kumar',
        position: 'CEO',
        company: 'TechCorp Solutions',
        rating: 5,
        text: 'Jana Mithra Infrastructure delivered our office complex on time and exceeded our expectations. Their attention to detail and commitment to quality is remarkable. The project management team was professional throughout.',
        date: 'March 2023'
    },
    {
        id: '2',
        author: 'Priya Sharma',
        position: 'Homeowner',
        rating: 5,
        text: 'We are extremely happy with our new home at Skyline Towers. The construction quality is excellent, and the amenities are world-class. Jana Mithra team was very supportive throughout the buying process.',
        date: 'April 2023'
    },
    {
        id: '3',
        author: 'Mohammed Ali',
        position: 'Director',
        company: 'Retail Chain India',
        rating: 4,
        text: 'The City Center Mall project was handled professionally. Jana Mithra Infrastructure demonstrated excellent project management skills and delivered a modern commercial space that meets all our requirements.',
        date: 'February 2023'
    },
    {
        id: '4',
        author: 'Sunita Patel',
        position: 'Villa Owner',
        rating: 5,
        text: 'Green Valley Villas is a dream come true. The sustainable features and beautiful landscaping make it a perfect home. Jana Mithra\'s commitment to environmental responsibility is commendable.',
        date: 'August 2023'
    },
    {
        id: '5',
        author: 'Arjun Nair',
        position: 'Business Owner',
        rating: 5,
        text: 'Working with Jana Mithra Infrastructure was a great experience. They understood our vision and delivered a space that perfectly suits our business needs. Highly recommended for commercial projects.',
        date: 'May 2023'
    }
]; 