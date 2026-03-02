# Ricardo Camilo | Frontend Engineer Portfolio

Performance-optimized portfolio built with React, TypeScript, and Vite.

## 🚀 Performance Optimizations

This portfolio has been optimized for maximum Lighthouse scores:

### What Was Fixed

1. **Removed Render-Blocking Resources**
   - ❌ Removed Tailwind CDN
   - ✅ Local Tailwind build with PurgeCSS
   - ✅ Optimized Google Fonts with `font-display: swap`
   - ✅ Deferred third-party scripts (analytics, ads)

2. **Code Splitting**
   - ✅ Broke 513-line App.tsx into 10+ components
   - ✅ Lazy loading for below-fold sections
   - ✅ Vendor chunk splitting (React, Framer Motion, Icons)

3. **Image Optimization**
   - ✅ Removed raw.githubusercontent.com (was 24.5 MiB)
   - ✅ Local image pipeline with WebP/AVIF
   - ✅ Responsive images with lazy loading
   - ✅ Target: 2-4 MiB total (down from 24.5 MiB)

4. **Fixed Build Errors**
   - ✅ Removed broken `/index.css` reference
   - ✅ Fixed Next.js paths in Vite project
   - ✅ Fixed Service Worker registration
   - ✅ Zero 404 errors

5. **Security & Accessibility**
   - ✅ Content-Security-Policy
   - ✅ X-Frame-Options
   - ✅ Skip links for keyboard navigation
   - ✅ ARIA labels on interactive elements

## 📦 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide Icons** - Icon library

## 🛠️ Setup

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Optimize Images

```bash
# Place images in public/projects/ first
npm run optimize:images
```

## 📁 Project Structure

```
portfolio2.0/
├── public/
│   ├── projects/        # Project images
│   ├── images/          # Profile images
│   └── icons/           # PWA icons
├── src/
│   ├── components/      # React components
│   ├── composables/     # Custom hooks
│   ├── constants/       # Static data
│   ├── services/        # API services
│   ├── styles/          # CSS
│   ├── types.ts         # TypeScript types
│   ├── App.tsx          # Main app
│   └── index.tsx        # Entry point
├── scripts/
│   └── optimize-images.js
├── index.html
├── tailwind.config.js
├── vite.config.ts
├── netlify.toml
└── sw.js
```

## 🎯 Performance Budget

| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| TBT | < 300ms |
| Initial JS | < 170KB gzip |
| Critical Image | < 200KB |
| 404s | 0 |

## 📊 Expected Lighthouse Scores

After image optimization:

- **Performance**: 95-100
- **Accessibility**: 95-100
- **Best Practices**: 95-100
- **SEO**: 100

## 🚀 Deploy

See [DEPLOY.md](./DEPLOY.md) for deployment instructions.

## 📈 Performance Guide

See [OPTIMIZATION_GUIDE.md](./OPTIMIZATION_GUIDE.md) for detailed optimization steps.

## 📝 License

MIT © Ricardo Camilo
