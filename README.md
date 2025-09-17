# Chanwoo Tak - Web3 Portfolio

Interactive Web3 portfolio website showcasing marketing expertise and blockchain ecosystem experience.

## Features

- **Interactive Design**: Smooth animations powered by Framer Motion
- **Dark Mode**: Web3-styled dark theme
- **Responsive Design**: Perfect layout across all devices
- **Web3 Integration**: Wallet connection functionality
- **Section Components**:
  - Hero Section with Particle Effects
  - About Me
  - Web3 Experience Cards
  - Career Timeline
  - Skills Visualization
  - Contact with Web3 Connect

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **3D Effects**: Three.js
- **Icons**: Lucide React

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Project Structure

```
web3-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AnimatedName.tsx
│   │   ├── ParticleBackground.tsx
│   │   ├── Web3Experience.tsx
│   │   ├── CareerTimeline.tsx
│   │   ├── SkillsVisualization.tsx
│   │   └── ContactSection.tsx
│   └── data/
│       └── resume.ts
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Design Features

### Gradient Effects
- Purple to Cyan gradients representing Web3 aesthetics
- Animated gradient backgrounds
- Neon glow effects on hover

### Interactive Elements
- Floating particles background
- Hover animations on cards
- Smooth scroll transitions
- Type animation for titles
- Animated name transitions (Takchanwoo ↔ Nimdal)

### Glass Morphism
- Transparent glass effect cards
- Backdrop blur for depth
- Subtle borders with opacity

## Key Sections

### 1. **Hero Section**
- Animated name introduction with 3D rotation effects
- Dynamic typing effect for roles
- Social media links
- Call-to-action buttons

### 2. **Web3 Experience**
- Project cards with chain indicators
- Interactive hover effects
- Achievement highlights
- Protocol statistics

### 3. **Career Timeline**
- Alternating timeline layout
- Company type badges
- Key achievements
- Smooth reveal animations

### 4. **Skills Visualization**
- Category-based skill display
- Progress bars with animations
- Language proficiency circles
- Interactive tab switching

### 5. **Contact Section**
- Contact form with validation
- Web3 wallet connection
- Social media integration
- Quick connect options

## Live Demo

Visit: `http://localhost:3000` after running the development server

## Customization

To modify resume information, edit the `src/data/resume.ts` file:

```typescript
export const resumeData = {
  name: "Your Name",
  title: "Your Title",
  // ... additional fields
}
```

## Contact

- **Telegram**: nimdal

## License

MIT License - feel free to use this template for your own portfolio!

---

Built for the Web3 community