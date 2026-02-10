# ABA Electricals Kuwait - Next.js Website

Production-ready Next.js website with clean architecture, Tailwind CSS, and full RTL support.

## Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS integration
- ✅ Full RTL (Right-to-Left) support for Arabic
- ✅ Existing CSS preserved and integrated
- ✅ Clean component architecture
- ✅ SEO optimized
- ✅ Responsive design
- ✅ Image optimization with Next.js Image

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── products/          # Products page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   └── layout/            # Layout components
│       ├── Header.tsx     # Header with navigation
│       ├── Footer.tsx     # Footer
│       └── Preloader.tsx  # Loading screen
├── lib/
│   └── data/              # Data and constants
│       └── navigation.ts  # Navigation structure
└── styles/
    └── globals.css        # Global styles with Tailwind

assets/                     # Static assets (images, CSS, JS)
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

## RTL Support

The website supports both LTR (English) and RTL (Arabic) layouts:

- English: Default (LTR)
- Arabic: RTL support enabled

To switch between languages, modify the `lang` and `dir` attributes in the HTML tag.

## Pages

- **Home** (`/`) - Landing page with hero, services, and stats
- **About** (`/about`) - Company information
- **Services** (`/services`) - Service offerings
- **Products** (`/products`) - Product catalog
- **Contact** (`/contact`) - Contact form and information

## Customization

### Colors

Edit `tailwind.config.js`:

```js
colors: {
  primary: '#0066CC',    // Blue
  secondary: '#EA5501',  // Orange
}
```

### Navigation

Edit `src/lib/data/navigation.ts` to modify menu items.

### Contact Information

Update contact details in `src/lib/data/navigation.ts`.

## Technologies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Existing CSS** - Bootstrap, Swiper, animations
- **Image Optimization** - Next.js Image component

## Performance

- Server-side rendering (SSR)
- Static generation where possible
- Optimized images (WebP format)
- Code splitting
- Lazy loading

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 ABA Electricals Kuwait. All rights reserved.
