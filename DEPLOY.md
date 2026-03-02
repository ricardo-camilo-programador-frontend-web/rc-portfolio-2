# Deploy Instructions

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Optimize Images (Important!)

Before deploying, optimize your images:

```bash
# Copy images to public folder first
# Then run optimization
npm run optimize:images
```

### 3. Build

```bash
npm run build
```

### 4. Deploy to Netlify

The project is configured for automatic deployment on Netlify.

**Option A: Git-based deploy (Recommended)**
1. Push your code to GitHub/GitLab
2. Connect your repository to Netlify
3. Netlify will automatically detect the settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

**Option B: Manual deploy**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

## Required Files for Production

Make sure these files exist before deploying:

### Images
- `/public/images/profile.webp` - Your profile photo
- `/public/icons/icon-192x192.png` - PWA icon
- `/public/icons/icon-512x512.png` - PWA icon
- `/public/projects/*.webp` - Project screenshots

### Configuration
- ✅ `netlify.toml` - Cache headers and redirects
- ✅ `manifest.json` - PWA manifest
- ✅ `sw.js` - Service Worker

## Performance Checklist

Before deploying to production:

- [ ] All images optimized (WebP format, < 200KB each)
- [ ] No 404 errors in browser console
- [ ] Service Worker registers successfully
- [ ] Build completes without errors
- [ ] Lighthouse score > 90 on all categories

## Troubleshooting

### Build fails with TypeScript errors
```bash
# Check for type errors
npx tsc --noEmit
```

### Service Worker not registering
- Ensure `sw.js` is in the `public` folder
- Check browser console for errors
- Verify the scope is correct (`/`)

### Images not loading
- Check if images are in `public/projects/`
- Verify paths in `src/constants/data.ts`
- Use relative paths (e.g., `/projects/image.webp`)

## Environment Variables

If using GEMINI_API_KEY:

1. In Netlify Dashboard, go to Site Settings → Build & Deploy → Environment
2. Add variable: `GEMINI_API_KEY`

## Cache Invalidation

To force cache invalidation:

1. Update version in `sw.js` (CACHE_NAME)
2. Deploy
3. Users will get the new version on next visit

## Monitoring

After deploy:
1. Run Lighthouse audit
2. Check Netlify deploy logs
3. Test PWA installation
4. Verify Service Worker is active
