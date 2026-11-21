---
name: Precision Engineering Portfolio
colors:
  surface: '#121315'
  surface-dim: '#121315'
  surface-bright: '#38393b'
  surface-container-lowest: '#0d0e10'
  surface-container-low: '#1b1c1e'
  surface-container: '#1f2022'
  surface-container-high: '#292a2c'
  surface-container-highest: '#343537'
  on-surface: '#e3e2e5'
  on-surface-variant: '#bdc8d1'
  inverse-surface: '#e3e2e5'
  inverse-on-surface: '#303033'
  outline: '#87929a'
  outline-variant: '#3e484f'
  surface-tint: '#7bd0ff'
  primary: '#8ed5ff'
  on-primary: '#00354a'
  primary-container: '#38bdf8'
  on-primary-container: '#004965'
  inverse-primary: '#00668a'
  secondary: '#c4c7ca'
  on-secondary: '#2d3134'
  secondary-container: '#46494d'
  on-secondary-container: '#b6b8bc'
  tertiary: '#c7cdda'
  on-tertiary: '#2a313b'
  tertiary-container: '#abb2be'
  on-tertiary-container: '#3e454f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c4e7ff'
  primary-fixed-dim: '#7bd0ff'
  on-primary-fixed: '#001e2c'
  on-primary-fixed-variant: '#004c69'
  secondary-fixed: '#e0e2e6'
  secondary-fixed-dim: '#c4c7ca'
  on-secondary-fixed: '#191c1f'
  on-secondary-fixed-variant: '#44474a'
  tertiary-fixed: '#dce3f0'
  tertiary-fixed-dim: '#c0c7d3'
  on-tertiary-fixed: '#151c25'
  on-tertiary-fixed-variant: '#404752'
  background: '#121315'
  on-background: '#e3e2e5'
  surface-variant: '#343537'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.03em
  display-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 38px
    fontWeight: '700'
    lineHeight: 46px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-mono-lg:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.08em
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
The brand voice embodies architectural precision, industrial rigor, and mechanical elegance. Designed for an engineer and technologist, the interface strips away decorative fluff in favor of structural clarity, telemetry accents, and deliberate modularity.

The aesthetic fuses **Architectural Minimalism** with **Industrial High-Tech**:
- **Atmosphere:** Deep void workspaces, calibrated wireframe grids, and instrumentation readouts.
- **Tone:** Methodical, high-performing, authoritative, and obsessively refined.
- **Visual Pillars:** Fine 1px hairline lattices, technical data callouts, crisp monospaced coordinates, and restrained cyan telemetry pulses against a dense carbon backdrop.

## Colors
The palette operates with strict chromatic discipline:

- **Surface Tiers:**
  - `Base Canvas`: `#0A0B0D` (Obsidian baseline for maximum depth)
  - `Surface Level 1`: `#121418` (Module panel backgrounds)
  - `Surface Level 2`: `#16191F` (Elevated components, hover states, active modules)
- **Border / Structural Grid:**
  - `Hairline Grid`: `rgba(255, 255, 255, 0.12)` (Primary geometric separator)
  - `Muted Grid`: `rgba(255, 255, 255, 0.05)` (Background canvas lattice)
- **Signal & Telemetry:**
  - `Primary (#38BDF8)`: Reserved for active signals, critical status glyphs, focal interaction paths, and live metrics.
  - `Accent Secondary (#E5E7EB)`: High-fidelity typographic foreground for maximum legibility.
  - `Neutral Ink-Soft (#9CA3AF)`: Secondary telemetry, metric labels, and descriptive narrative.

## Typography
Typography is treated as an engineering instrument:
- **Headlines (`Space Grotesk`):** Tracked slightly tight in uppercase or title-case to evoke architectural blueprints and industrial schematics.
- **Narrative (`Inter`):** Clean, neutral, and unembellished, providing effortless reading across project case studies and architectural overviews.
- **Instrumentation (`JetBrains Mono`):** Applied to telemetry tags, timestamps, coordinates, line-counts, specs, and status indicators. Always uppercase for labels, strict alignment for data values.

## Layout & Spacing
The layout adheres strictly to a 12-column architectural grid:
- **Desktop (1024px+):** 12 columns, 1.5rem gutter, 3rem canvas edge margin. Content modules snap to hard border edges.
- **Tablet (768px - 1023px):** 8 columns, 1.25rem gutter, 2rem canvas edge margin.
- **Mobile (< 768px):** 4 columns, 1rem gutter, 1.25rem outer margin.
- **Modular Rhythm:** Cards, panels, and sidebars share structural border borders (collapsing adjacent 1px borders rather than doubling up margins), generating a monolithic structural apparatus.

## Elevation & Depth
Depth is produced via **chromatic density and optical outlines** rather than traditional drop shadows:

- **Tonal Stepping:** Layering from `#0A0B0D` (canvas floor) to `#121418` (structural container) to `#16191F` (focused interactive node).
- **Hairline Bounding:** Surfaces are bounded by `1px solid rgba(255, 255, 255, 0.12)`.
- **Glow & Telemetry Focus:** Interactive elements or active states emit a calibrated, diffused photon aura: `0 0 16px rgba(56, 189, 248, 0.18)` paired with an inner border shift to `rgba(56, 189, 248, 0.5)`.
- **Crosshair & Coordinate Accents:** Intersections of panels display subtle corner crosshairs (`+`) or indexed step stamps (`[01]`, `[SYS_ON]`) in place of standard floating elevation.

## Shapes
Sharpness is absolute:
- **Zero Radius:** All corners remain strictly `0px` (`roundedness: 0`), reinforcing industrial chassis design and raw architectural drafts.
- **Notched Variants:** Selected accent badges, interactive CTA terminals, or inspection modals may utilize mechanical 45-degree chamfered cuts (4px to 8px bevel corners) achieved via CSS clip paths.
- **Divider Geometry:** Dividers are unbroken 1px hairlines, occasionally interrupted by a single centered status marker or mono label.

## Components

### Buttons
- **Primary Terminal Button:** Sharp rectangular shell, filled with `#38BDF8`, text in `#0A0B0D` (Space Grotesk, bold uppercase), 0px corner radius. On hover: shifts background to `#E5E7EB` with a `0 0 12px rgba(56, 189, 248, 0.4)` emission.
- **Outline Spec Button:** Transparent fill, `1px solid rgba(255, 255, 255, 0.12)`, text in `#E5E7EB` (JetBrains Mono). On hover: border turns to `#38BDF8`, background takes on `rgba(56, 189, 248, 0.05)`.

### Technical Badges & Status Chips
- Height: 24px, padding: `0 8px`.
- Background: `#16191F`, border: `1px solid rgba(255, 255, 255, 0.12)`.
- Typography: `JetBrains Mono` 11px uppercase.
- Status Indicator: Integrated 4px square LED indicator in `#38BDF8` with intermittent slow pulse animation.

### Structural Cards & Modules
- Enclosed inside `#121418` with `1px solid rgba(255, 255, 255, 0.12)`.
- Header strip containing a monospaced module ID (e.g., `// MOD_PROJECT_01`) separated by a hairline border from the primary payload.
- Hover state: Border shifts to `rgba(255, 255, 255, 0.25)` with an illuminated cyan corner accent.

### Inputs & Terminal Fields
- Background: `#0A0B0D`, border: `1px solid rgba(255, 255, 255, 0.15)`.
- Caret: Block-style cyan cursor (`#38BDF8`).
- Active State: Border transitions to `#38BDF8` with a subtle localized aura; label locks to the top border line in `JetBrains Mono`.

### Checkboxes & Toggle Switches
- Checkboxes: 16x16px square, 0px radius, `#0A0B0D` fill, `1px solid rgba(255, 255, 255, 0.2)`. Selected state fills `#38BDF8` with a high-contrast `#0A0B0D` cross or check.
- Toggles: Segmented two-position rectangular toggle, sliding a solid `#38BDF8` block over an etched grid track.

### Specialized Component: Architectural Data Grid / Blueprint View
- A portfolio showcase wrapper featuring coordinates (`X: 142.09`, `Y: 88.41`), an ambient background vector matrix (`rgba(255,255,255,0.03)`), and modular snap-lines defining project parameters, role metrics, and live source links.