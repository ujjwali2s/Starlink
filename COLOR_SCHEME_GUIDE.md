# Color Scheme Guide for Starlink World Website

## How to Change Colors

All colors are controlled by CSS variables in `src/app/globals.css`. Simply uncomment the theme you want to use.

### Current Theme: Cyan/Teal (Tech-Forward)
```css
--color-primary: 0 217 255;        /* Cyan #00d9ff */
--color-primary-light: 0 255 204;  /* Teal #00ffcc */
```
**Best For:** Modern tech companies, startups, innovation-focused brands

---

### Alternative 1: Corporate Blue/Gold (Traditional Corporate)
```css
--color-primary: 20 56 132;        /* Deep Blue #143884 */
--color-primary-light: 218 165 32;  /* Gold #daa520 */
```
**Best For:** Established corporations, financial services, GCC/Middle Eastern clients
**Why:** Blue = trust & stability, Gold = prestige & luxury (popular in Middle East)

---

### Alternative 2: Navy/Silver (Professional)
```css
--color-primary: 25 42 86;          /* Navy #192a56 */
--color-primary-light: 138 154 182;  /* Silver-Blue #8a9ab6 */
```
**Best For:** Professional services, consulting firms, enterprise solutions
**Why:** Conservative, trustworthy, very corporate

---

## How to Apply

### Option 1: Change Globally (Recommended)
Edit `src/app/globals.css` and uncomment your preferred theme:

```css
:root {
  /* Comment out current theme */
  /* --color-primary: 0 217 255; */
  /* --color-primary-light: 0 255 204; */
  
  /* Uncomment alternative theme */
  --color-primary: 20 56 132;        /* Deep Blue */
  --color-primary-light: 218 165 32;  /* Gold */
}
```

### Option 2: Custom Colors
Create your own theme by finding RGB values:

1. Choose your colors (use a tool like https://colorpicker.me/)
2. Convert HEX to RGB (e.g., #143884 = 20, 56, 132)
3. Update the CSS variables:

```css
--color-primary: 20 56 132;         /* Your primary color RGB */
--color-primary-light: 218 165 32;  /* Your accent color RGB */
```

---

## What Changes When You Update Colors?

✅ **Automatically Updates:**
- All gradient text headings
- Button backgrounds
- Icon backgrounds
- Border highlights on hover
- Background glow effects
- Badge colors
- Link hover states

---

## Recommendations for Oman/GCC Corporate Clients

**Best Choice: Blue/Gold Theme** ✨
- Deep blue conveys trust and professionalism
- Gold accents are culturally appreciated in the Middle East
- Traditional corporate appearance
- Suitable for government contracts and enterprise clients

**Why Not Current Cyan/Teal:**
- Very modern/tech-startup look
- Might appear too casual for conservative corporate clients
- Less traditional for GCC business culture

---

## Preview Before Committing

The current cyan/teal is applied site-wide. To preview the blue/gold theme:

1. Open `src/app/globals.css`
2. Temporarily change the color variables
3. Save and check http://localhost:3000
4. If you like it, keep it. If not, revert back.

---

## Color Psychology for Corporate Websites

| Color | Meaning | Best For |
|-------|---------|----------|
| **Blue** | Trust, Security, Professionalism | Banks, Corporate, Healthcare |
| **Gold** | Prestige, Luxury, Quality | Middle East, Premium Services |
| **Cyan** | Innovation, Technology, Modern | Tech Startups, Digital Services |
| **Navy** | Authority, Confidence, Stability | Law Firms, Consulting, Enterprise |
| **Green** | Growth, Prosperity, Harmony | Sustainability, Finance, Healthcare |

---

## Need Help?

All color changes are centralized. Just update 2 lines in `globals.css` and the entire website theme changes! 🎨
