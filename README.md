# 🚀 Chanwoo Tak - Web3 Portfolio

창의적이고 인터랙티브한 Web3 포트폴리오 사이트입니다. 전통적인 마케팅 경험과 Web3 생태계를 연결하는 브릿지 역할을 수행하는 마케터의 이력을 소개합니다.

## ✨ Features

- 🎨 **인터랙티브 디자인**: Framer Motion을 활용한 부드러운 애니메이션
- 🌙 **다크 모드**: Web3 스타일의 어두운 테마
- 📱 **반응형 디자인**: 모든 디바이스에서 완벽한 레이아웃
- 🔗 **Web3 Integration**: 지갑 연결 기능 (예시)
- 🎯 **섹션 구성**:
  - Hero Section with Particle Effects
  - About Me
  - Web3 Experience Cards
  - Career Timeline
  - Skills Visualization
  - Contact with Web3 Connect

## 🛠 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **3D Effects**: Three.js
- **Icons**: Lucide React

## 🚀 Quick Start

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

## 📁 Project Structure

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

## 🎨 Design Features

### Gradient Effects
- Purple to Cyan gradients representing Web3 aesthetics
- Animated gradient backgrounds
- Neon glow effects on hover

### Interactive Elements
- Floating particles background
- Hover animations on cards
- Smooth scroll transitions
- Type animation for titles

### Glass Morphism
- Transparent glass effect cards
- Backdrop blur for depth
- Subtle borders with opacity

## 📊 Key Sections

### 1. **Hero Section**
- Animated name introduction
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

## 🔗 Live Demo

Visit: `http://localhost:3000` after running the development server

## 📝 Customization

이력서 정보를 수정하려면 `src/data/resume.ts` 파일을 편집하세요:

```typescript
export const resumeData = {
  name: "Your Name",
  title: "Your Title",
  // ... additional fields
}
```

## 🤝 Contact

- **Email**: tri********@gmail.com
- **Location**: 부산 수영구
- **Discord**: chanwoo#0001
- **Telegram**: @chanwoo_tak

## 📄 License

MIT License - feel free to use this template for your own portfolio!

---

Built with ❤️ for the Web3 community