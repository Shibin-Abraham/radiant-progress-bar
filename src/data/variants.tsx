import { type ReactNode } from "react"
import { RadiantProgressBar } from "radiant-progress-bar"

export interface Variant {
  title: string
  code: string
  render: (key: number) => ReactNode
}

export const variants: Variant[] = [
  {
    title: "Default (Auto Text)",
    code: `<RadiantProgressBar percentage={75} />`,
    render: (key) => <RadiantProgressBar key={key} percentage={75} />,
  },
  {
    title: "Single Color (Blue)",
    code: `<RadiantProgressBar
  percentage={65}
  barColor="#3b82f6"
/>`,
    render: (key) => <RadiantProgressBar key={key} percentage={65} barColor="#3b82f6" />,
  },
  {
    title: "1 Gradient (Purple)",
    code: `<RadiantProgressBar
  percentage={80}
  barGradients={['#8b5cf6']}
/>`,
    render: (key) => <RadiantProgressBar key={key} percentage={80} barGradients={['#8b5cf6']} />,
  },
  {
    title: "2 Gradients (Blue → Red)",
    code: `<RadiantProgressBar
  percentage={90}
  barGradients={['#3b82f6', '#ef4444']}
/>`,
    render: (key) => <RadiantProgressBar key={key} percentage={90} barGradients={['#3b82f6', '#ef4444']} />,
  },
  {
    title: "3 Gradients (RGB)",
    code: `<RadiantProgressBar
  percentage={95}
  barGradients={['#ef4444', '#22c55e', '#3b82f6']}
/>`,
    render: (key) => <RadiantProgressBar key={key} percentage={95} barGradients={['#ef4444', '#22c55e', '#3b82f6']} />,
  },
  {
    title: "Custom Children (Node)",
    code: `<RadiantProgressBar
  percentage={70}
  barGradients={['#f59e0b', '#ef4444']}
>
  <YourIcon />
</RadiantProgressBar>`,
    render: (key) => (
      <RadiantProgressBar key={key} percentage={70} barGradients={['#f59e0b', '#ef4444']}>
        <div className="relative z-10 text-black font-bold text-lg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M11.99 2.243a4.49 4.49 0 0 0-3.398 1.55 4.49 4.49 0 0 0-3.497 1.306 4.491 4.491 0 0 0-1.307 3.498 4.491 4.491 0 0 0-1.548 3.397c0 1.357.6 2.573 1.548 3.397a4.491 4.491 0 0 0 1.307 3.498 4.49 4.49 0 0 0 3.498 1.307 4.49 4.49 0 0 0 3.397 1.549 4.49 4.49 0 0 0 3.397-1.549 4.49 4.49 0 0 0 3.497-1.307 4.491 4.491 0 0 0 1.306-3.497 4.491 4.491 0 0 0 1.55-3.398c0-1.357-.601-2.573-1.549-3.397a4.491 4.491 0 0 0-1.307-3.498 4.49 4.49 0 0 0-3.498-1.307 4.49 4.49 0 0 0-3.396-1.549Zm3.53 7.28a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 1 0 1.06 1.06l6-6Zm-5.78-.905a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm4.5 4.5a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
          </svg>
        </div>
      </RadiantProgressBar>
    ),
  },
  {
    title: "Custom Children (Function)",
    code: `<RadiantProgressBar
  percentage={85}
  barGradients={['#10b981', '#06b6d4']}
>
  {(count) => (
    <div className="flex flex-col items-center">
      <span className="text-2xl font-bold">{count}</span>
      <span className="text-xs">percent</span>
    </div>
  )}
</RadiantProgressBar>`,
    render: (key) => (
      <RadiantProgressBar key={key} percentage={85} barGradients={['#10b981', '#06b6d4']}>
        {(count) => (
          <div className="relative z-10 flex flex-col items-center">
            <span className="text-2xl font-bold text-gray-400">{count}</span>
            <span className="text-xs text-gray-300">percent</span>
          </div>
        )}
      </RadiantProgressBar>
    ),
  },
  {
    title: "Small Size (100px)",
    code: `<RadiantProgressBar
  percentage={60}
  size={100}
  barGradients={['#ec4899', '#8b5cf6']}
/>`,
    render: (key) => <RadiantProgressBar key={key} percentage={60} size={100} barGradients={['#ec4899', '#8b5cf6']} />,
  },
  {
    title: "Large Size (200px)",
    code: `<RadiantProgressBar
  percentage={50}
  size={200}
  barGradients={['#14b8a6', '#06b6d4']}
/>`,
    render: (key) => <RadiantProgressBar key={key} percentage={50} size={200} barGradients={['#14b8a6', '#06b6d4']} />,
  },
  {
    title: "Fast Animation (5ms)",
    code: `<RadiantProgressBar
  percentage={45}
  speed={5}
  barGradients={['#f59e0b', '#eab308']}
/>`,
    render: (key) => <RadiantProgressBar key={key} percentage={45} speed={5} barGradients={['#f59e0b', '#eab308']} />,
  },
  {
    title: "Slow Animation (50ms)",
    code: `<RadiantProgressBar
  percentage={55}
  speed={50}
  barGradients={['#84cc16', '#22c55e']}
/>`,
    render: (key) => <RadiantProgressBar key={key} percentage={55} speed={50} barGradients={['#84cc16', '#22c55e']} />,
  },
  {
    title: "Custom Path Color",
    code: `<RadiantProgressBar
  percentage={40}
  barGradients={['#f97316']}
  pathColor="#1f2937"
/>`,
    render: (key) => <RadiantProgressBar key={key} percentage={40} barGradients={['#f97316']} pathColor="#1f2937" />,
  },
  {
    title: "Dynamic Style (Function)",
    code: `<RadiantProgressBar
  percentage={88}
  barGradients={['#a855f7', '#ec4899']}
  style={(count) => ({
    boxShadow: \`0 0 \${count / 2}px rgba(168, 85, 247, 0.8)\`,
    transform: \`scale(\${1 + count / 500})\`,
  })}
>
  {(count) => <span>{count}%</span>}
</RadiantProgressBar>`,
    render: (key) => (
      <RadiantProgressBar
        key={key}
        percentage={88}
        barGradients={['#a855f7', '#ec4899']}
        style={(count) => ({
          boxShadow: `0 0 ${count / 2}px rgba(168, 85, 247, 0.8)`,
          transform: `scale(${1 + count / 500})`,
        })}
      >
        {(count) => (
          <span className="bg-clip-text text-transparent bg-linear-to-r from-[#ec4899] to-[#a855f7] font-bold text-xl">{count}%</span>
        )}
      </RadiantProgressBar>
    ),
  },
  {
    title: "Clickable",
    code: `<RadiantProgressBar
  percentage={77}
  barGradients={['#06b6d4', '#3b82f6']}
  onClick={() => alert('Clicked!')}
  className="cursor-pointer hover:scale-110 transition-transform"
/>`,
    render: (key) => (
      <RadiantProgressBar
        key={key}
        percentage={77}
        barGradients={['#06b6d4', '#3b82f6']}
        onClick={() => alert('Progress bar clicked!')}
        className="cursor-pointer hover:scale-110 transition-transform"
      />
    ),
  },
  {
    title: "Custom ClassName",
    code: `<RadiantProgressBar
  percentage={92}
  barGradients={['#fbbf24', '#f59e0b']}
  className="shadow-2xl size-24 text-sm shadow-yellow-500"
/>`,
    render: (key) => (
      <RadiantProgressBar
        key={key}
        percentage={92}
        barGradients={['#fbbf24', '#f59e0b']}
        className="shadow-2xl size-24 text-sm shadow-yellow-500"
      />
    ),
  },
  {
    title: "No Count Display",
    code: `<RadiantProgressBar
  percentage={68}
  barGradients={['#06b6d4', '#8b5cf6']}
  showCount={false}
/>`,
    render: (key) => <RadiantProgressBar key={key} percentage={68} barGradients={['#06b6d4', '#8b5cf6']} showCount={false} />,
  },
  {
    title: "Inner Circle Gradient",
    code: `<RadiantProgressBar
  percentage={82}
  barGradients={['#f59e0b', '#ef4444']}
  className="before:bg-linear-to-br before:from-gray-900
    before:via-gray-800 before:to-black text-white"
/>`,
    render: (key) => (
      <RadiantProgressBar
        key={key}
        percentage={82}
        barGradients={['#f59e0b', '#ef4444']}
        className="before:bg-linear-to-br before:from-gray-900 before:via-gray-800 before:to-black text-white"
      />
    ),
  },
  {
    title: "Counterclockwise",
    code: `<RadiantProgressBar
  percentage={75}
  barGradients={['#10b981', '#3b82f6']}
  direction="counterclockwise"
/>`,
    render: (key) => <RadiantProgressBar key={key} percentage={75} barGradients={['#10b981', '#3b82f6']} direction="counterclockwise" />,
  },
  {
    title: "Custom Inner Size (90%)",
    code: `<RadiantProgressBar
  percentage={85}
  barGradients={['#f59e0b', '#ec4899']}
  className="before:size-[90%] before:bg-pink-300"
/>`,
    render: (key) => (
      <RadiantProgressBar
        key={key}
        percentage={85}
        barGradients={['#f59e0b', '#ec4899']}
        className="before:size-[90%] before:bg-pink-300"
      />
    ),
  },
  {
    title: "Style: Box Shadow",
    code: `<RadiantProgressBar
  percentage={78}
  barGradients={['#3b82f6', '#8b5cf6']}
  style={{
    boxShadow: '0 20px 50px rgba(59, 130, 246, 0.5)',
  }}
/>`,
    render: (key) => (
      <RadiantProgressBar
        key={key}
        percentage={78}
        barGradients={['#3b82f6', '#8b5cf6']}
        style={{ boxShadow: '0 20px 50px rgba(59, 130, 246, 0.5)' }}
      />
    ),
  },
  {
    title: "Style: Custom Size",
    code: `<RadiantProgressBar
  percentage={65}
  barGradients={['#ec4899', '#f43f5e']}
  style={{
    width: '180px',
    height: '180px',
  }}
/>`,
    render: (key) => (
      <RadiantProgressBar
        key={key}
        percentage={65}
        barGradients={['#ec4899', '#f43f5e']}
        style={{ width: '180px', height: '180px' }}
      />
    ),
  },
  {
    title: "Style Fn: Dynamic Glow",
    code: `<RadiantProgressBar
  percentage={95}
  barGradients={['#a855f7', '#ec4899']}
  style={(count) => ({
    boxShadow: \`0 0 \${count / 2}px rgba(168, 85, 247, \${count / 100})\`,
    filter: \`brightness(\${1 + count / 200})\`,
  })}
/>`,
    render: (key) => (
      <RadiantProgressBar
        key={key}
        percentage={95}
        barGradients={['#a855f7', '#ec4899']}
        style={(count) => ({
          boxShadow: `0 0 ${count / 2}px rgba(168, 85, 247, ${count / 100})`,
          filter: `brightness(${1 + count / 200})`,
        })}
      />
    ),
  },
  {
    title: "Custom Inner Color",
    code: `<RadiantProgressBar
  percentage={72}
  barGradients={['#06b6d4', '#8b5cf6']}
  innerColor="#1e1b4b"
  className="text-white"
/>`,
    render: (key) => (
      <RadiantProgressBar
        key={key}
        percentage={72}
        barGradients={['#06b6d4', '#8b5cf6']}
        innerColor="#1e1b4b"
        className="text-white"
      />
    ),
  },
  {
    title: "CSS Override (::before)",
    code: `<RadiantProgressBar
  percentage={90}
  className="custom-progress"
/>

/* CSS */
.custom-progress::before {
  background: linear-gradient(135deg, #0f172a, #1e1b4b, #312e81) !important;
}

.custom-progress {
  transition: transform 0.3s ease;
}

.custom-progress:hover {
  transform: scale(1.05) rotate(5deg);
}`,
    render: (key) => (
      <RadiantProgressBar
        key={key}
        percentage={90}
        className="custom-progress"
      />
    ),
  },
]
