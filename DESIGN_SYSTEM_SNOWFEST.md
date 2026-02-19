# SnowFest Design System

> Extracted from [snowfest.pl/en](https://www.snowfest.pl/en) — Winter music festival branding

---

## Color Palette

### Accent Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Primary Blue | `#4460FF` | Primary CTA, links, interactive elements |
| Orange | `#FF8746` | Secondary accent, highlights |
| Pink | `#FF8DF2` | Tertiary accent, decorative |
| Purple | `#B296FD` | Supporting accent |
| Turquoise | `#ADF4E6` | Supporting accent |
| Mint | `#75E4DE` | Supporting accent |
| Yellow | `#FFF217` | Warning, highlight |
| Red | `#CF0017` | Error, destructive |
| Dark Teal | `#006A84` | Dark mode accent |
| Dark Blue | `#004B9B` | Dark mode accent |

### Background Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Darkest | `#121212` | Primary dark background |
| Darker | `#242424` | Secondary dark background |
| Dark | `#424242` | Tertiary dark background |
| Light | `#B9D4F9` | Light blue background |
| Lighter | `#E8EFF7` | Off-white background |
| Lightest | `#FFFFFF` | White background |
| Success | `#D1F5E8` | Success states |
| Error | `#F5D1D1` | Error states |

### Text Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Darkest | `#121212` | Primary text on light bg |
| Darker | `#242424` | Secondary text on light bg |
| Dark | `#323232` | Body text on light bg |
| Light | `#B9D4F9` | Secondary text on dark bg |
| Lighter | `#E8EFF7` | Muted text on dark bg |
| Lightest | `#FFFFFF` | Primary text on dark bg |
| Accent | `#E4B4EF` | Accent text (light) |
| Accent Dark | `#6444CF` | Accent text (dark) |

---

## Typography

### Font Families
- **Display:** Custom font (weight 900) — used for headings
- **Body:** Custom font (weight 600) — used for paragraphs

### Type Scale
| Level | Size | Weight | Line Height | Letter Spacing |
|-------|------|--------|-------------|----------------|
| H1 | `clamp(48px, 8vw, 96px)` | 900 | 128px | -2px |
| H2 | `clamp(40px, 5.3vw, 64px)` | 900 | 80px | -1px |
| H3 | `clamp(32px, 4vw, 48px)` | 900 | 60px | — |
| H4 | `clamp(24px, 3.2vw, 32px)` | 900 | 40px | — |
| H5 | `clamp(16px, 2vw, 24px)` | 900 | — | — |
| H6 | `16px` | 900 | 20px | — |
| Body | `16px` | 600 | 1.75 | — |
| Small | `13px` | 600 | 16px | — |

---

## Spacing Scale

8px base unit:

| Token | Value |
|-------|-------|
| `space-0` | `0px` |
| `space-1` | `8px` |
| `space-2` | `16px` |
| `space-3` | `24px` |
| `space-4` | `32px` |
| `space-5` | `40px` |
| `space-6` | `48px` |
| `space-7` | `56px` |
| `space-8` | `64px` |
| `space-9` | `72px` |
| `space-10` | `80px` |

---

## Buttons

### Primary Button
- Background: White (`#FFFFFF`)
- Text: Dark (`#242424`)
- Padding: `1em 2em`
- Border radius: `4px`
- Font: Display family
- Hover: Scale `1.025`, background shifts to light blue (`#B9D4F9`)
- Transition: `all 0.2s ease-out`

### Secondary Button
- Background: Transparent
- Border: `inset 0 0 0 1px` (current color)
- Hover: Colors invert, scale `1.025`
- Transition: `all 0.2s ease-out`

### Button Sizes
| Size | Font Size | Hover Scale |
|------|-----------|-------------|
| Small | `13px` | `1.05` |
| Medium | `16px` | `1.025` |
| Large | `32px` | `1.05` |

---

## Components

### Cards
- Border radius: `8px`
- Padding: `24px` – `32px`
- Box shadow: `0 8px 24px 2px` (color variable)
- Supported aspect ratios: `16:9`, `4:3`, `1:1`, `4:1`

### Navigation
- Position: Fixed
- Height: `96px` (desktop), `256px` (mobile expanded)
- Z-index: `1000`
- Transition: `all 0.2s ease-in-out`

### Hero Section
- Min height: `max(100vh, 900px)`
- Padding: `128px 0`
- Gap: `48px`
- Background: Center-positioned image

### Grid
- Columns: 12
- Gap: `16px` (mobile) / `32px` (desktop)
- Responsive: 1 col mobile, 2-4 col tablet, 6-12 col desktop

---

## Layout & Breakpoints

### Container Widths
| Breakpoint | Max Width |
|------------|-----------|
| Mobile | `560px` |
| Tablet | `1200px` |
| Desktop | `1500px` |

### Breakpoints
| Name | Range |
|------|-------|
| Mobile | `max-width: 560px` |
| Tablet | `561px – 1200px` |
| Desktop | `min-width: 1201px` |

---

## Animations & Transitions

| Effect | Property | Duration | Easing |
|--------|----------|----------|--------|
| General | `all` | `0.2s` | `ease-in-out` |
| Button hover | `all` | `0.2s` | `ease-out` |
| Card hover | `transform` | `0.2s` | `ease-in-out` |
| Image zoom | `scale(1) → scale(1.1)` | `0.2s` | `ease-in-out` |
| Fade in | `opacity + translateY` | `0.6s` | `ease-out` |
| Menu slide | `translateX(100%) → translateX(0)` | `0.2s` | `ease-in-out` |

---

## FigJam Diagram

The visual design system has been pushed to Figma as a FigJam board: **"SnowFest Design System"**
