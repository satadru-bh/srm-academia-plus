# Academia Plus 🎓

> An Apple Pro-grade academic intelligence dashboard for SRM Institute of Science and Technology (SRMIST).  
> **Live Production**: [srm-academia-plus.vercel.app](https://srm-academia-plus.vercel.app)

Designed with obsessive attention to craft, typography, fluidity, and utility. Built to replace the outdated portal experience with a fast, private, zero-database client that connects directly to official SRMIST portals.

---

## ✨ Features

- **⚡ At a Glance**: Real-time attendance percentage, 75% margin calculation, today's batch schedule, and upcoming academic calendar events.
- **📊 Attendance Intelligence**: Exact conducted vs absent hours breakdown with interactive bunk/margin simulator (safe skips & shortage recovery).
- **📅 5-Day Academic Cycle Timetable**: Complete 12-period cycle routine with theory/lab categorization, room allocations (`TP`, `UB`), and PNG image export.
- **🎯 Internal Marks & GPA Predictor**: Unit tests, cycle tests, surprise tests, and end-semester target score simulations.
- **🏛️ University Faculty Directory**: Fast search across 2,500+ verified SRMIST faculty members with dynamic detection of your enrolled course instructors and assigned faculty advisor.
- **📚 3,000+ Notes & PYQs Repository**: Unit-wise lecture presentations, textbooks, and previous year question papers.
- **🎨 Creative Masterpiece Themes**: 8 custom aesthetic palettes including OLED Black, Slate Dark, Barbie Pink, Tropicana, Matcha, Blue Ice, and Minimal Light.
- **🔒 Zero-Database Privacy**: 100% client-side architecture. Student credentials and session snapshots live strictly on the student's device (`localStorage`), never saved to an external database.

---

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS + Apple HIG design tokens
- **Animations**: Framer Motion
- **Icons**: Lucide Icons
- **Bundler**: Vite
- **Testing**: Vitest
- **Deployment**: Vercel ready (with integrated API proxy rewrites in `vercel.json`)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
git clone https://github.com/satadru-bh/srm-academia-plus.git
cd srm-academia-plus
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
```

---

## ☁️ Deployment on Vercel

This application is ready to deploy on **Vercel** with zero extra backend setup:

1. Import the repository `satadru-bh/srm-academia-plus` on [Vercel](https://vercel.com).
2. Framework Preset: **Vite**.
3. Build Command: `npm run build`.
4. Output Directory: `dist`.
5. Deploy! The included `vercel.json` automatically proxies API authentication requests directly to the official SRM Academia gateway.

---

## 📄 License

MIT © [Satadru Bhattacharya](https://github.com/satadru-bh)
