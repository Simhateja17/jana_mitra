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
        author: 'Mittapalli Nikitha Reddy',
        position: 'Customer',
        rating: 5,
        text: 'Sai brundhavanam lo okati sai Krishna nagar lo okati konam infrastructure antha chala bagundi compound walls, environment, konetapudu chala supportive ga dagara undi registration process antha chaipicharu. Chala thanks inka future lo kuda manchi plot me dagare kontam elane maku manchi guidance evandi.',
        date: 'December 2024'
    },
    {
        id: '2',
        author: 'Manasa Maddireddy',
        position: 'Investor',
        rating: 5,
        text: 'Ideal for investment purpose. Ventures are located in well developing area, ready for construction purpose also. I had great experience and I suggest every one without second thought you can invest on land because Janamithra infra developers is Trustable company with reasonable pricing.',
        date: 'December 2024'
    },
    {
        id: '3',
        author: 'Ritesh Aryan',
        position: 'Plot Owner',
        rating: 5,
        text: 'Bought two plots at panguru from jana mithra, Dileep sir helped a lot from all sides and guided very nicely clearing all doubts having on buying a plot (though called many and many times on small small doubts) and the staff janamithra are too patient and very hospitable.',
        date: 'December 2024'
    },
    {
        id: '4',
        author: 'Siva Sankar Reddy Obili',
        position: 'Plot Owner',
        rating: 5,
        text: 'I have purchased one open plot in SSR Highway Gardens in Jana Mithra Infra Developers. It is in Greater community. What my advice is invest on Open Sites. Well developed area. Great time for investment. IIT, IISER, Textile Park Nihan Coffee Industry, Adidas Shoe Co, ITHub, 9th Battalion, NIIMZ & more than 100 Non Polluted Industries will come. Fast developed Area.',
        date: 'December 2024'
    },
    {
        id: '5',
        author: 'Malli Somaraju',
        position: 'Investor',
        rating: 5,
        text: 'I had visited the venture with a brief idea about the firm. They had transparency and did not hide any T&C and explained all the nearby developments, they showed multiple projects based on my requirement and I was happy with their approach and suggest it as a best place to invest. Thanks for the help & keep going.',
        date: 'December 2024'
    },
    {
        id: '6',
        author: 'Murali Chirathanagandla',
        position: 'Customer',
        rating: 5,
        text: 'Venture is good. Roads park and water pipe lines to every plot. Management is very responsive and maintains good relations well with customers.',
        date: 'December 2024'
    }
]; 