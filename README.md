# Jana Mithra Infrastructure Website

A modern, interactive website for Jana Mithra Infrastructure company built with TypeScript and webpack.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive UI**: Smooth animations and transitions
- **Project Portfolio**: Filter projects by status (completed/ongoing) and category
- **Customer Reviews**: Auto-rotating testimonials carousel
- **Contact Form**: Interactive contact form with validation
- **TypeScript**: Fully typed for better developer experience
- **Modern Build System**: Webpack with hot module replacement

## Technologies Used

- TypeScript
- Webpack
- HTML5
- CSS3
- Font Awesome Icons
- Google Fonts

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Navigate to the project directory:
   ```bash
   cd "Jana Mithra"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

Start the development server with hot reloading:

```bash
npm start
```

The website will open automatically in your default browser at `http://localhost:3000`

### Building for Production

Create an optimized production build:

```bash
npm run build
```

The production files will be generated in the `dist` directory.

## Project Structure

```
Jana Mithra/
├── src/
│   ├── index.ts          # Main entry point
│   ├── index.html        # HTML template
│   ├── styles/
│   │   └── main.css      # Main stylesheet
│   ├── components/       # TypeScript components
│   │   ├── Header.ts
│   │   ├── Hero.ts
│   │   ├── Projects.ts
│   │   ├── ProjectModal.ts
│   │   ├── Reviews.ts
│   │   ├── About.ts
│   │   ├── Contact.ts
│   │   └── Footer.ts
│   └── data/            # Data files
│       ├── projects.ts
│       └── reviews.ts
├── dist/                # Production build (generated)
├── webpack.config.js    # Webpack configuration
├── tsconfig.json       # TypeScript configuration
├── package.json        # Project dependencies
└── README.md          # This file
```

## Features Overview

### Project Filtering
- Filter projects by status: All, Completed, Ongoing
- Filter by category: Residential, Commercial, Infrastructure
- Click on any project card to view detailed information

### Interactive Elements
- Smooth scroll navigation
- Animated statistics counter
- Auto-playing testimonials carousel
- Form validation and submission feedback
- Responsive mobile menu

### Performance
- Lazy loading of images
- Optimized animations
- Minimal JavaScript bundle size

## Customization

To customize the website:

1. **Company Information**: Edit the data in `src/components/` files
2. **Projects**: Update `src/data/projects.ts`
3. **Reviews**: Update `src/data/reviews.ts`
4. **Styling**: Modify `src/styles/main.css`
5. **Colors**: Change CSS variables in `:root` section of main.css

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This project is proprietary to Jana Mithra Infrastructure.

---

For any questions or support, please contact the development team. #   j a n a _ m i t r a  
 