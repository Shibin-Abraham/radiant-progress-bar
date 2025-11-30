# RadiantProgressBar

<a href="https://www.npmjs.com/package/radiant-progress-bar">
  <img src="https://raw.githubusercontent.com/npm/logos/master/npm%20logo/npm-logo-red.svg" alt="npm" width="120" />
</a>

[![npm version](https://img.shields.io/npm/v/radiant-progress-bar.svg)](https://www.npmjs.com/package/radiant-progress-bar)
[![npm downloads](https://img.shields.io/npm/dm/radiant-progress-bar.svg)](https://www.npmjs.com/package/radiant-progress-bar)
[![bundle size](https://img.shields.io/bundlephobia/minzip/radiant-progress-bar)](https://bundlephobia.com/package/radiant-progress-bar)
[![license](https://img.shields.io/npm/l/radiant-progress-bar.svg)](https://github.com/user/radiant-progress-bar/blob/main/LICENSE)

A beautiful, customizable circular progress bar component for React with gradient support and smooth animations.

## Installation

```bash
# npm
npm install radiant-progress-bar

# yarn
yarn add radiant-progress-bar

# pnpm
pnpm add radiant-progress-bar
```

## Quick Start

```tsx
import { RadiantProgressBar } from "radiant-progress-bar"

function App() {
  return <RadiantProgressBar percentage={75} />
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `percentage` | `number` | `0` | Progress value (0-100) |
| `size` | `number` | `150` | Size of the progress bar in pixels |
| `barColor` | `string` | `"#22c55e"` | Solid color for the progress bar |
| `barGradients` | `string[]` | - | Array of colors for gradient effect |
| `pathColor` | `string` | `"#e5e7eb"` | Color of the background track |
| `innerColor` | `string` | - | Color of the inner circle |
| `speed` | `number` | `20` | Animation speed in milliseconds |
| `direction` | `"clockwise" \| "counterclockwise"` | `"clockwise"` | Animation direction |
| `showCount` | `boolean` | `true` | Show percentage text |
| `className` | `string` | - | Custom CSS classes |
| `style` | `CSSProperties \| (count: number) => CSSProperties` | - | Custom styles |
| `onClick` | `() => void` | - | Click handler |
| `children` | `ReactNode \| (count: number) => ReactNode` | - | Custom content inside |

## Examples

### Basic Usage

```tsx
<RadiantProgressBar percentage={75} />
```

### With Gradient Colors

```tsx
<RadiantProgressBar
  percentage={90}
  barGradients={['#3b82f6', '#ef4444']}
/>
```

### Multiple Gradients

```tsx
<RadiantProgressBar
  percentage={95}
  barGradients={['#ef4444', '#22c55e', '#3b82f6']}
/>
```

### Custom Size

```tsx
<RadiantProgressBar
  percentage={60}
  size={100}
  barGradients={['#ec4899', '#8b5cf6']}
/>
```

### Custom Children

```tsx
<RadiantProgressBar
  percentage={85}
  barGradients={['#10b981', '#06b6d4']}
>
  {(count) => (
    <div className="flex flex-col items-center">
      <span className="text-2xl font-bold">{count}</span>
      <span className="text-xs">percent</span>
    </div>
  )}
</RadiantProgressBar>
```

### Dynamic Styling

```tsx
<RadiantProgressBar
  percentage={88}
  barGradients={['#a855f7', '#ec4899']}
  style={(count) => ({
    boxShadow: `0 0 ${count / 2}px rgba(168, 85, 247, 0.8)`,
    transform: `scale(${1 + count / 500})`,
  })}
/>
```

### Counterclockwise Direction

```tsx
<RadiantProgressBar
  percentage={75}
  barGradients={['#10b981', '#3b82f6']}
  direction="counterclockwise"
/>
```

### Custom Inner Color

```tsx
<RadiantProgressBar
  percentage={72}
  barGradients={['#06b6d4', '#8b5cf6']}
  innerColor="#1e1b4b"
/>
```

### CSS Customization

```tsx
<RadiantProgressBar
  percentage={90}
  className="custom-progress"
/>
```

```css
.custom-progress::before {
  background: linear-gradient(135deg, #0f172a, #1e1b4b, #312e81) !important;
}

.custom-progress:hover {
  transform: scale(1.05) rotate(5deg);
}
```

## Styling with Tailwind CSS

You can use Tailwind CSS classes to customize the inner circle:

```tsx
<RadiantProgressBar
  percentage={82}
  barGradients={['#f59e0b', '#ef4444']}
  className="before:bg-gradient-to-br before:from-gray-900 before:via-gray-800 before:to-black"
/>
```

## License

MIT
