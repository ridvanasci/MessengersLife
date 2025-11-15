# Design Guidelines: Prophets of Islam Web Application

## Design Approach

**Reference-Based with Cultural Sensitivity**: Drawing inspiration from educational platforms like Khan Academy and cultural sites like the British Museum's Islamic art section, combined with traditional Islamic design principles. The design emphasizes reverence, clarity, and educational value while incorporating geometric patterns and calligraphic elements characteristic of Islamic art.

## Core Design Principles

1. **Respectful Elegance**: Sophisticated, timeless design befitting religious content
2. **Educational Clarity**: Information hierarchy that facilitates learning
3. **Cultural Authenticity**: Subtle Islamic geometric patterns and Arabic typography
4. **Accessible Knowledge**: Easy navigation between prophets and their stories

## Typography System

**Primary Font**: Playfair Display (for headings) - elegant, traditional feel
**Secondary Font**: Inter (for body text) - modern, highly readable
**Arabic Font**: Amiri (Google Fonts) - authentic Arabic calligraphy style

**Hierarchy**:
- Page Titles: text-5xl to text-6xl, font-bold
- Prophet Names: text-4xl, font-semibold, bilingual (English/Arabic)
- Section Headers: text-2xl to text-3xl, font-semibold
- Body Text: text-base to text-lg, leading-relaxed
- Metadata/Dates: text-sm, uppercase tracking-wide

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20 (e.g., p-4, mb-8, gap-12)

**Grid Structure**:
- Desktop: 3-column grid for prophet cards (grid-cols-3)
- Tablet: 2-column grid (md:grid-cols-2)
- Mobile: Single column (grid-cols-1)
- Container: max-w-7xl for main content areas

**Section Padding**: py-16 to py-24 for desktop, py-12 for mobile

## Component Library

### Hero Section
- Full-width banner with Islamic geometric pattern overlay (SVG background)
- Centered title: "The Prophets in Islamic Tradition"
- Subtitle with count: "Exploring the lives of 25 Messengers of Allah"
- Bilingual tagline in English and Arabic
- Search bar prominently placed below title
- Height: 60vh to 70vh

### Timeline Component
- Horizontal scrollable timeline showing all 25 prophets chronologically
- Prophet markers with names and approximate periods
- Active state highlighting for selected prophet
- Sticky navigation element

### Prophet Profile Cards
- Card design with elegant borders and subtle shadows
- Top section: Prophet name in both English and Arabic
- Icon placeholder for Islamic geometric symbol (NOT human imagery)
- Key information: Period, Location, Known for (brief)
- "Learn More" CTA button
- Hover state: subtle elevation increase

### Individual Prophet Page Layout
**Header Section**:
- Large prophet name (bilingual)
- Decorative geometric border treatment
- Key stats grid: Birth location, Time period, Mentioned in Quran

**Biography Section**:
- Two-column layout on desktop (prose on left, timeline on right)
- Single column on mobile
- Rich text formatting with proper hierarchy
- Pull quotes for significant teachings

**Key Events Timeline**:
- Vertical timeline with event markers
- Cards for each major event
- Islamic date system alongside Gregorian

**Teachings Section**:
- Quote-style cards with decorative borders
- Sourced from Quran/Hadith where applicable

### Navigation
**Header**:
- Sticky navigation with site title
- Links: Home, All Prophets, Timeline, About
- Search icon in top right
- Subtle border-bottom separator

**Footer**:
- Three-column layout: About, Quick Links, Resources
- Copyright and attribution
- Links to Islamic resources and scholarly references
- Newsletter signup for updates

### Filter & Search Interface
- Sidebar filter panel on "All Prophets" page
- Filter by: Time Period, Mentioned in Quran, Location
- Real-time search with autocomplete
- Clear filters button

## Animations

Use sparingly and purposefully:
- Card hover: subtle scale (1.02) and shadow enhancement
- Page transitions: smooth fade-in for content
- Timeline scroll: gentle parallax effect
- NO distracting or continuous animations

## Images

This application uses **decorative elements only** - no human imagery per Islamic tradition.

**Image Strategy**:
1. **Hero Section**: Abstract Islamic geometric pattern background (tessellations, arabesque) - full-width, subtle overlay
2. **Location Context**: Historical site photographs (mosques, ancient cities, landscapes) where prophets lived - used in individual prophet pages
3. **Decorative Elements**: 
   - Geometric borders and dividers throughout
   - Islamic art patterns as card backgrounds (very subtle opacity)
   - Calligraphic flourishes as section separators
4. **Icons**: Use geometric Islamic star patterns, crescents, or abstract symbols - Font Awesome or custom geometric SVGs

**Specific Image Placements**:
- Hero: Full-width geometric pattern (gold/bronze on neutral)
- Prophet cards: Small geometric icon top-center
- Individual pages: Location photograph in header (30% opacity overlay)
- Section dividers: Ornamental geometric patterns

## Accessibility

- High contrast text ratios for readability
- Semantic HTML structure
- ARIA labels for Arabic text
- Keyboard navigation for timeline
- Focus states clearly visible on all interactive elements
- Bilingual content properly tagged with lang attributes

## Responsive Behavior

**Breakpoints**:
- Mobile: < 768px - Single column, stacked navigation
- Tablet: 768px - 1024px - Two columns, condensed spacing
- Desktop: > 1024px - Full multi-column layout

**Key Adaptations**:
- Timeline switches from horizontal scroll to vertical on mobile
- Navigation collapses to hamburger menu on mobile
- Typography scales down one size on mobile
- Cards stack vertically with full-width on mobile

## Special Considerations

**Cultural Sensitivity**:
- No visual depictions of prophets (use geometric symbols)
- Respectful language and tone throughout
- Accurate Islamic dates and transliterations
- References to Quranic verses formatted distinctly

**Educational Features**:
- Clear source citations
- Glossary for Islamic terms
- Related prophets connections
- Chronological context indicators

This design creates a dignified, educational experience that honors Islamic tradition while providing modern, accessible web functionality.