# 🥤 Juice Cane - Animated E-Commerce Website

A modern, visually stunning juice cane selling website featuring immersive 3D animations and smooth interactions. Built with cutting-edge web technologies to deliver an exceptional user experience.

## ✨ Features

- **3D Animations**: Interactive Three.js animations for an immersive product showcase
- **Headless CMS**: Content management powered by Prismic for easy updates
- **Smooth Animations**: Fluid transitions and scroll-based animations
- **Responsive Design**: Seamless experience across all devices
- **Full-Stack**: Built-in backend API routes for order processing and management
- **Modern UI**: Clean, contemporary design with engaging visual elements

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) - React framework with server-side rendering
- **3D Graphics**: [Three.js](https://threejs.org/) - WebGL 3D animations
- **CMS**: [Prismic](https://prismic.io/) - Headless content management system
- **Styling**: CSS Modules / Tailwind CSS
- **Animation Libraries**: GSAP / Framer Motion (if applicable)
- **Language**: JavaScript/TypeScript

## 📁 Project Structure

```
juice-project/
├── juice/                  # Next.js application
│   ├── app/               # App router pages and layouts
│   │   ├── api/          # Backend API routes
│   │   ├── components/   # React components
│   │   └── page.js       # Home page
│   ├── public/           # Static assets (images, models)
│   ├── lib/              # Utility functions and configurations
│   ├── styles/           # Global styles
│   ├── prismicio.js      # Prismic configuration
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- Prismic account (for CMS)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd juice-project/juice
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env.local` file in the `juice/` directory:
```env
PRISMIC_ACCESS_TOKEN=your_prismic_access_token
NEXT_PUBLIC_PRISMIC_ENVIRONMENT=your_prismic_repo_name
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Features in Detail

### Three.js Integration
- Interactive 3D product models
- Scroll-triggered animations
- Optimized performance for smooth rendering

### Prismic CMS
- Dynamic content management
- Easy product updates
- Rich text editing capabilities

### API Routes
- Order processing endpoints
- Product management
- Customer data handling

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

This project can be easily deployed on:
- [Vercel](https://vercel.com) (recommended for Next.js)
- [Netlify](https://netlify.com)
- Any Node.js hosting platform

**Note**: When deploying, set the root directory to `juice/` in your deployment settings.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Your Name - Rudra Verma(https://github.com/outgoingrudra)

## 🙏 Acknowledgments

- Three.js community for amazing 3D capabilities
- Prismic for the powerful CMS platform
- Next.js team for the incredible framework

---

Made with ❤️ and fresh juice cane