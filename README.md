# RadiantProgressBar

<a href="https://www.npmjs.com/package/radiant-progress-bar">
  <img src="https://raw.githubusercontent.com/npm/logos/master/npm%20logo/npm-logo-red.svg" alt="npm" width="120" />
</a>

[![npm version](https://img.shields.io/npm/v/radiant-progress-bar.svg)](https://www.npmjs.com/package/radiant-progress-bar)
[![npm downloads](https://img.shields.io/npm/dm/radiant-progress-bar.svg)](https://www.npmjs.com/package/radiant-progress-bar)
[![bundle size](https://img.shields.io/bundlephobia/minzip/radiant-progress-bar)](https://bundlephobia.com/package/radiant-progress-bar)
[![license](https://img.shields.io/npm/l/radiant-progress-bar.svg)](https://github.com/Shibin-Abraham/radiant-progress-bar/blob/main/LICENSE)

A beautiful, customizable circular progress bar component for React with gradient support and smooth animations.

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

## Links

**[View Live Demo](https://shibin-abraham.github.io/radiant-progress-bar/)** | **[View on npm](https://www.npmjs.com/package/radiant-progress-bar)**

## Installation

```bash
npm install radiant-progress-bar
```

## Usage

```tsx
import { RadiantProgressBar } from "radiant-progress-bar"

function App() {
  return (
    <RadiantProgressBar
      percentage={75}
      barGradients={['#3b82f6', '#8b5cf6']}
    />
  )
}
```

## Features

- Gradient color support (single or multiple colors)
- Smooth counting animation
- Customizable size, speed, and direction
- Custom children support (render props)
- Dynamic styling with functions
- Tailwind CSS compatible
- Fully typed with TypeScript

## License

MIT
