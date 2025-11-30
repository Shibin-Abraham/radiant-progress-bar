import { useState, useRef, useEffect, type ReactNode } from "react"
import { CodeBlock } from "./CodeBlock"

interface VariantCardProps {
  title: string
  code: string
  index: number
  children: (key: number) => ReactNode
}

export function VariantCard({ title, code, index, children }: VariantCardProps) {
  const [refreshKey, setRefreshKey] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: "100px",
        threshold: 0.1,
      }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleRefresh = () => {
    setRefreshKey((prev) => prev + 1)
  }

  return (
    <div
      ref={cardRef}
      className="flex flex-col bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-sm font-semibold">
          {index + 1}. {title}
        </h2>
        <button
          onClick={handleRefresh}
          className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-colors text-gray-400 hover:text-white"
          title="Replay animation"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
            <path fillRule="evenodd" d="M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0v2.43l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center min-h-[180px] mb-4">
        {isVisible ? (
          children(refreshKey)
        ) : (
          <div className="size-[150px] rounded-full bg-gray-700/30 animate-pulse" />
        )}
      </div>

      <CodeBlock code={code} />
    </div>
  )
}
