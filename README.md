# ORÉA Shopify Theme

A luxury fine jewellery Shopify theme converted from React, featuring lab-grown diamonds and bespoke design services.

## Theme Structure

```
orea-shopify-theme/
├── assets/
│   ├── styles.css          # Main stylesheet
│   ├── theme.js            # Core JavaScript
│   ├── product-page.js     # Product variant selection
│   └── modals.js           # Modal management system
├── config/
│   └── settings_schema.json # Theme customizer settings
├── layout/
│   └── theme.liquid        # Main layout wrapper
├── locales/
│   └── en.default.json     # English translations
├── sections/
│   ├── header.liquid
│   ├── footer.liquid
│   ├── homepage-hero.liquid
│   ├── origin-text.liquid
│   ├── orea-standards.liquid
│   ├── bespoke-process.liquid
│   ├── sustainability-badge.liquid
│   ├── location-contact.liquid
│   ├── lab-grown-intro.liquid
│   ├── diamond-comparison.liquid
│   ├── mastery-4cs.liquid
│   ├── diamond-shapes.liquid
│   ├── product-gallery.liquid
│   ├── product-details.liquid
│   ├── product-tabs.liquid
│   ├── value-props.liquid
│   ├── related-products.liquid
│   └── ai-assistant.liquid
├── snippets/
│   ├── fourcs-cut.liquid
│   ├── fourcs-color.liquid
│   ├── fourcs-clarity.liquid
│   ├── fourcs-carat.liquid
│   ├── diamond-shape-icon.liquid
│   ├── size-guide-modal.liquid
│   ├── send-hint-modal.liquid
│   └── gift-reminder-modal.liquid
├── templates/
│   ├── index.liquid        # Homepage
│   ├── page.about.liquid   # About page
│   ├── page.about-diamonds.liquid # Diamond education
│   └── product.liquid      # Product page
├── preview.html            # Standalone preview
└── README.md
```

## Installation

### Option 1: Upload ZIP
1. Zip the theme folder
2. Go to Shopify Admin → Online Store → Themes
3. Click "Add theme" → "Upload zip file"
4. Upload and publish

### Option 2: Theme Kit CLI
```bash
# Install Theme Kit
brew tap shopify/shopify
brew install themekit

# Configure
theme configure --password=[your-password] --store=[your-store.myshopify.com] --themeid=[theme-id]

# Deploy
theme deploy
```

### Option 3: GitHub Integration
1. Push theme to GitHub repository
2. In Shopify Admin → Online Store → Themes
3. Click "Add theme" → "Connect from GitHub"
4. Select repository and branch

## Page Setup

### Homepage
Automatically uses `templates/index.liquid` with sections:
- Homepage Hero
- Origin Text
- ORÉA Standards
- Bespoke Process
- Sustainability Badge
- Location Contact

### About Diamonds Page
1. Go to Online Store → Pages → Add page
2. Title: "About Diamonds"
3. Template: `page.about-diamonds`
4. Save

### About Page
1. Go to Online Store → Pages → Add page
2. Title: "About"
3. Template: `page.about`
4. Save

## Customization

### Theme Settings
Access via Online Store → Themes → Customize → Theme settings:
- **Colors**: Brand palette (bone, carbon, accent colors)
- **Typography**: Font selections and sizes
- **Header**: Logo, navigation, sticky behavior
- **Footer**: Menus, newsletter, social links
- **Product Pages**: Display options, features
- **AI Assistant**: Enable/disable, API configuration

### Section Settings
Each section has its own schema for customization:
- Headings and copy
- Images and media
- Layout options
- Feature toggles

## Design System

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Letter spacing**: Ultra-wide for labels (0.2-0.6em)

### Colors
- **Background**: #FDFCFB (bone), #fcfcf9 (orchid-white)
- **Text**: #1A1A1A (carbon), stone palette
- **Metal gradients**: Platinum, 18k/14k gold variants

### Effects
- Film grain overlay (subtle noise texture)
- Glass navbar (backdrop blur)
- Smooth scroll and transitions

## Features

### Product Page
- Metal/Carat/Size variant selection
- Live price updates
- Add to cart with loading states
- Size guide modal
- Send hint functionality
- Gift reminder scheduler
- AI concierge integration

### 4Cs Education
- Interactive tab interface
- Cut, Color, Clarity, Carat explanations
- Visual diagrams and scales

### Diamond Shapes
- Horizontal scroll gallery
- Modal details for each shape
- SVG illustrations

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari
- Android Chrome

## Development

### Local Preview
Open `preview.html` in a browser to see a static preview of the homepage design.

### Modifying Styles
Edit `assets/styles.css` for custom CSS. The theme uses Tailwind CSS via CDN.

### Adding Sections
1. Create new file in `sections/`
2. Include `{% schema %}` block
3. Add to appropriate template

## Support

For issues or customization requests, contact the development team.

---

© 2024 ORÉA Fine Jewellery. All rights reserved.
