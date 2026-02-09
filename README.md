# ORÉA Shopify Liquid Theme

Complete conversion of the ORÉA React website to a Shopify Liquid theme.

## Overview

This theme is a pixel-perfect conversion of the ORÉA React application (15 pages) into a fully functional Shopify theme, maintaining all original designs and functionality.

## 🎨 Design System

The theme preserves the complete ORÉA design system:

### Colors
- **Cream** (#F9F6F1) - Primary background
- **Dark** (#4A3F35) - Primary text
- **Champagne** (#D4C4A8) - Accents
- **Gold** (#C5B8A0) - Interactive elements
- **Taupe** (#7D6B5C) - Secondary text
- **Linen** (#E8DFD3) - Borders and subtle backgrounds

### Typography
- **Headings**: Cormorant Garamond (serif)
- **Body**: Montserrat (sans-serif)

## 📁 Theme Structure

```
orea-shopify-theme/
├── assets/              # CSS, JavaScript, images
│   ├── base.css        # Reset and base styles
│   ├── orea-custom.css # Custom ORÉA component styles
│   └── global.js       # Global JavaScript functionality
├── config/             # Theme settings
│   └── settings_schema.json
├── layout/             # Base template
│   └── theme.liquid    # Main theme layout
├── locales/            # Translation files
│   └── en.default.json
├── sections/           # Modular sections
│   ├── header.liquid   # Navigation header
│   ├── footer.liquid   # Footer
│   ├── homepage-collections.liquid
│   ├── featured-products.liquid
│   └── brand-values.liquid
├── snippets/           # Reusable components
│   └── meta-tags.liquid
└── templates/          # Page templates
    ├── index.liquid    # Homepage
    ├── collection.liquid
    ├── product.liquid
    ├── page.about.liquid
    ├── page.diamonds.liquid
    ├── page.bespoke.liquid
    ├── page.faq.liquid
    ├── page.contact.liquid
    └── ...
```

## 📄 Converted Pages

All 15 original React pages have been converted to Liquid templates:

### Main Pages
1. **Homepage** (`index.liquid`) - Hero, collections, featured products, brand values
2. **About ORÉA** (`page.about.liquid`) - Company story and values
3. **About Diamonds** (`page.diamonds.liquid`) - Lab-grown diamond education
4. **Bespoke** (`page.bespoke.liquid`) - Custom jewelry design process
5. **Collection Page** (`collection.liquid`) - Product browsing with filtering
6. **Product Page** (`product.liquid`) - Product details and purchase

### Information Pages
7. **Concierge** (`page.concierge.liquid`) - Premium service details
8. **Contact** (`page.contact.liquid`) - Contact form
9. **FAQ** (`page.faq.liquid`) - Frequently asked questions
10. **Care Guide** (`page.care-guide.liquid`) - Jewelry care instructions
11. **Boutique** (Product template variation) - Enhanced product experience
12. **Shipping** (`page.shipping.liquid`) - Shipping information
13. **Returns** (`page.returns.liquid`) - Return policy
14. **Terms** (`page.terms.liquid`) - Terms and conditions

### Additional Templates
15. **Product Shape Page** - Variant of product page for different diamond shapes

## 🚀 Installation

1. **Download the theme**
   - Download this entire folder as a ZIP file

2. **Upload to Shopify**
   - Go to Shopify Admin → Online Store → Themes
   - Click "Upload theme"
   - Select the ZIP file
   - Click "Upload"

3. **Publish the theme**
   - After upload, click "Publish" to make it your active theme

## ⚙️ Configuration

### Required Setup

1. **Create Pages in Shopify**
   Create the following pages in Shopify Admin → Online Store → Pages:
   - About (template: page.about)
   - About Diamonds (template: page.diamonds)
   - Bespoke (template: page.bespoke)
   - FAQ (template: page.faq)
   - Contact (template: page.contact)
   - Concierge (template: page.concierge)
   - Care Guide (template: page.care-guide)
   - Shipping & Delivery (template: page.shipping)
   - Returns & Exchanges (template: page.returns)
   - Terms & Conditions (template: page.terms)

2. **Configure Collections**
   Create collections for:
   - Rings
   - Necklaces
   - Earrings
   - Bracelets
   - Pendants

3. **Add Products**
   - Upload product images (recommended: 1200x1600px, 3:4 ratio)
   - Add product descriptions
   - Set up variants (metal type, carat, size)

4. **Homepage Setup**
   - In Theme Editor, customize:
     - Hero section image and text
     - Featured collections
     - Featured products
     - Brand values

5. **Navigation**
   - Set up main menu with links to collections and pages
   - Configure footer menu

6. **Social Media**
   - Add Instagram and Facebook URLs in Theme Settings

## 🎯 Features

### Header/Navigation
- Fixed header with scroll effects
- Desktop mega-menu dropdowns
- Mobile-responsive hamburger menu
- Cart icon with item count
- Search, account, and cart functionality

### Homepage
- Full-screen hero section
- Featured collections with alternating layouts
- Product grid
- Brand values section

### Product Pages
- Image gallery with thumbnails
- Variant selection
- Add to cart functionality
- Related products
- Product information tabs

### Collection Pages
- Product grid layout
- Category filtering
- Responsive design

### Pages
- Accordion-style FAQ
- Contact form
- Bespoke process steps
- Brand story sections

## 🎨 Customization

### Colors
All ORÉA colors are defined as CSS variables in `layout/theme.liquid`:
```css
--color-orea-cream: #F9F6F1;
--color-orea-dark: #4A3F35;
--color-orea-champagne: #D4C4A8;
--color-orea-gold: #C5B8A0;
```

### Typography
Font families are loaded from Google Fonts and defined as variables:
```css
--font-body: 'Montserrat', sans-serif;
--font-heading: 'Cormorant Garamond', serif;
```

### Spacing & Layout
The theme uses a consistent spacing system based on rem units.

## 📱 Responsive Design

The theme is fully responsive with breakpoints at:
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: ≥ 1024px

## ⚡ Performance

- Optimized CSS with minimal bloat
- Efficient JavaScript (no heavy frameworks)
- Lazy loading for images (Shopify native)
- Mobile-first approach

## 🔧 Technical Details

### Shopify Features Used
- Liquid templating
- Sections and blocks for customization
- Theme settings
- Product variants
- Collection filtering
- Form handling
- Cart functionality

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11 not supported

## 📝 Notes

### Differences from React Version
1. **Routing**: Uses Shopify's native URL structure instead of React Router
2. **State Management**: Uses Shopify's cart system instead of React state
3. **Forms**: Uses Shopify form handling instead of React forms
4. **Images**: Uses Shopify image optimization instead of local assets

### Maintained from Original
✅ All page designs
✅ All component layouts
✅ Complete color palette
✅ Typography system
✅ Animations and transitions
✅ Responsive behavior
✅ Navigation structure

## 🆘 Support

For issues or questions about this theme:
1. Check the Shopify theme documentation
2. Review the comments in the code files
3. Contact the theme developer

## 📜 License

This theme is created for ORÉA Jewellery. All rights reserved.

---

**Version**: 1.0.0
**Last Updated**: 2024
**Created by**: Converted from React to Shopify Liquid
