# Portfolio Setup Guide - Complete Instructions

## Quick Overview of Updates

✓ Navbar - Uniform across all pages with hover effects  
✓ Lenis scrolling - REMOVED (now using native browser scrolling)  
✓ Marquee animations - REMOVED (now static visible text)  
✓ All emojis - REMOVED (replaced with image placeholders)  
✓ Footer - Improved with better design  
✓ CV download button - "Download my CV" functional  

---

## Step 1: Add Required Images & Files

### Create image directories:
```bash
mkdir -p public/images
```

### Required folder structure:
```
/project
├── public/
│   ├── chimanjuroCV.pdf          ← Your CV file (REQUIRED for download button)
│   └── images/
│       ├── anjurologo.png        ← Logo for navbar & loading screen
│       ├── bg-left.png           ← Homepage left background (optional)
│       ├── bg-right.png          ← Homepage right background (optional)
│       ├── profile-cutout.png    ← Profile image for hero section
│       ├── service-icon-placeholder.png
│       ├── service-portfolio-1.png
│       ├── service-portfolio-2.png
│       ├── specialty-acting.png
│       ├── specialty-modeling.png
│       ├── specialty-design.png
│       ├── specialty-development.png
│       ├── specialty-content.png
│       └── specialty-assistant.png
└── app/
```

---

## Step 2: Download Button Setup (IMPORTANT)

### To enable the CV download:

1. Rename your CV file to: `chimanjuroCV.pdf`
2. Place it in: `/public/chimanjuroCV.pdf`
3. That's it! The button on the homepage will work automatically

### Example:
```
public/
├── chimanjuroCV.pdf   ← Place your CV here
└── images/
```

---

## Step 3: Image Replacement Guide

### 3.1 Logo Image (Required)
**File:** `/public/images/anjurologo.png`
- Used in: Navbar and loading screen
- Recommended size: 256×256px or larger
- Format: PNG with transparency (recommended)

### 3.2 Background Images (Optional)
**Files:** 
- `/public/images/bg-left.png` (Homepage left side)
- `/public/images/bg-right.png` (Homepage right side)
- Recommended size: 400×600px
- Format: PNG or JPG

### 3.3 Service Icons (Required if you want images)
Replace these placeholder paths in `app/(pages)/services/page.tsx`:
```javascript
// Line ~119: SERVICE CARD IMAGE PLACEHOLDER
Change: src="/images/service-icon-placeholder.png"
To: src="/images/your-service-icon.png"

// Lines ~203-225: SERVICE PORTFOLIO IMAGES
Change: src="/images/service-portfolio-1.png"
To: src="/images/your-portfolio-1.jpg"
```

### 3.4 Specialty Icons (Required if you want images)
Replace in `app/page.tsx` around line 238:
```javascript
{ iconPath: '/images/specialty-acting.png', ... }
{ iconPath: '/images/specialty-modeling.png', ... }
{ iconPath: '/images/specialty-design.png', ... }
{ iconPath: '/images/specialty-development.png', ... }
{ iconPath: '/images/specialty-content.png', ... }
{ iconPath: '/images/specialty-assistant.png', ... }
```

---

## Step 4: Text Content Updates

### Update these in `app/(pages)/services/page.tsx`:
- Service names and descriptions (lines 10-23)
- Edit the services array to match your offerings

### Update these in `app/(pages)/experience/page.tsx`:
- Experience entries (lines 30-44)
- Workshop entries (lines 46-56)

### Update these in `app/components/Footer.tsx`:
- Email address (line 97): `chimanjuro123@gmail.com`
- Social media links (lines 99-107)

---

## Step 5: Color Customization

### Marquee Text Color
In `app/components/KineticMarquee.tsx` (line 13):
```jsx
<p className="text-2xl font-semibold tracking-wide text-orange-400">
  {/* Change 'text-orange-400' to your preferred color */}
  {/* Options: text-orange-500, text-amber-500, text-yellow-500, etc. */}
</p>
```

### All Orange colors use Tailwind classes:
- `text-orange-400` - Lighter orange
- `text-orange-500` - Medium orange (primary)
- `text-orange-600` - Darker orange

---

## Step 6: Background Images for Pages (Optional)

To add background images to any page, add this comment guide to the page file:

```jsx
// Add background image to main element
style={{ 
  backgroundImage: "url('/images/bg-services.png')",
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}
```

Place background images in `/public/images/`:
- `bg-services.png` - Services page
- `bg-experience.png` - Experience page
- `bg-about.png` - About page
- `bg-projects.png` - Projects page
- `bg-contact.png` - Contact page

---

## Step 7: Deployment

### Build and test locally:
```bash
pnpm build
pnpm dev
```

### Deploy to Vercel:
```bash
vercel deploy
```

Or use the Vercel dashboard to connect your GitHub repository.

---

## Files Modified

### Core Components:
- ✓ `app/components/PillNavbar.tsx` - Navbar with hover effects
- ✓ `app/components/LenisScroll.tsx` - Disabled smooth scrolling
- ✓ `app/components/KineticMarquee.tsx` - Static text (no animation)
- ✓ `app/components/Footer.tsx` - Improved footer design
- ✓ `app/components/CyberCursor.tsx` - Orange cursor color

### Pages:
- ✓ `app/page.tsx` - Home page with CV guide
- ✓ `app/(pages)/services/page.tsx` - Services page (emojis removed)
- ✓ `app/(pages)/experience/page.tsx` - Experience page (orange colors)

---

## Troubleshooting

### CV Download Not Working
- Ensure file is at: `/public/chimanjuroCV.pdf`
- File name must be exact: `chimanjuroCV.pdf`
- Reload the page after adding the file

### Images Not Showing
- Check file path matches exactly (case-sensitive)
- Ensure file is in `/public/images/` folder
- Check file format is supported (PNG, JPG, JPEG)

### Navbar Links Not Working
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Check that all page routes exist in `/app/(pages)/` folder
- Ensure PillNavbar is imported on all pages

### Colors Not Showing
- Use valid Tailwind color classes: `text-orange-400`, `text-orange-500`, etc.
- Don't use custom hex colors in className, use Tailwind utilities only
- For custom colors, modify `tailwind.config.ts` or `globals.css`

---

## Performance Tips

1. **Image Optimization**
   - Use 1920×1080px for full-width backgrounds
   - Use 256×256px for logos and small icons
   - Compress images before uploading (use TinyPNG or similar)

2. **File Sizes**
   - CV PDF should be under 5MB
   - Background images should be under 2MB each
   - Use WebP format for better compression if supported

3. **Caching**
   - Next.js automatically handles image optimization
   - Static files in `/public` are cached by default
   - No manual cache management needed

---

## Need Help?

All code has inline comments marked with:
- `// TO REPLACE:` - Where to change image paths
- `// CUSTOMIZE COLOR:` - Where to change colors
- `// Example:` - Examples of how to use

Search for these comments in the code to find all customization points.

---

## Summary of What Changed

### Removed:
- ❌ Lenis smooth scrolling (laggy, auto-scroll)
- ❌ Marquee animation (moving text was hard to read)
- ❌ All emojis (replaced with image placeholders)
- ❌ Magnetic hover effects on navbar
- ❌ Cyan color (changed to orange)

### Added:
- ✅ Native browser scrolling (smooth, fast)
- ✅ Static visible marquee text
- ✅ Image placeholders for customization
- ✅ Navbar hover underline effects
- ✅ Improved footer with sections
- ✅ "Download my CV" button (fully functional)
- ✅ Comprehensive guides in code comments
- ✅ Orange-themed design throughout

---

**Your portfolio is ready! Just add your images to `/public/images/` and your CV to `/public/` and it's all set to go!** 🚀
