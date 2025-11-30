import { VariantCard } from "./components"
import { variants } from "./data/variants"

function App() {
  return (
    <div className="w-full min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black p-8">
      <h1 className="text-4xl font-bold text-white text-center mb-4">RadiantProgressBar</h1>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        A beautiful, customizable circular progress bar component for React. Click the refresh icon to replay animations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {variants.map((variant, index) => (
          <VariantCard
            key={index}
            title={variant.title}
            code={variant.code}
            index={index}
          >
            {variant.render}
          </VariantCard>
        ))}
      </div>
    </div>
  )
}

export default App
