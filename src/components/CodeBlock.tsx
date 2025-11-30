import { useState } from "react"

interface CodeBlockProps {
  code: string
}

const tokenize = (code: string) => {
  const tokens: { type: string; value: string }[] = []
  let remaining = code

  const patterns: { type: string; regex: RegExp }[] = [
    { type: "comment", regex: /^(\/\/[^\n]*|\/\*[\s\S]*?\*\/)/ },
    { type: "string", regex: /^(['"`])(?:\\.|(?!\1)[^\\])*\1/ },
    { type: "template", regex: /^`[^`]*`/ },
    { type: "keyword", regex: /^(const|let|var|function|return|if|else|for|while|class|import|export|from|default|true|false|null|undefined|new|this|async|await)\b/ },
    { type: "component", regex: /^<\/?[A-Z][a-zA-Z0-9]*/ },
    { type: "tag", regex: /^<\/?[a-z][a-zA-Z0-9]*/ },
    { type: "attribute", regex: /^\s[a-zA-Z][a-zA-Z0-9]*(?==)/ },
    { type: "number", regex: /^-?\d+(\.\d+)?/ },
    { type: "bracket", regex: /^[{}[\]()]/ },
    { type: "operator", regex: /^(=>|===|!==|==|!=|<=|>=|&&|\|\||[+\-*/%=<>!&|^~?:])/ },
    { type: "punctuation", regex: /^[,;.]/ },
    { type: "property", regex: /^[a-zA-Z_$][a-zA-Z0-9_$]*(?=\s*:)/ },
    { type: "function", regex: /^[a-zA-Z_$][a-zA-Z0-9_$]*(?=\s*\()/ },
    { type: "identifier", regex: /^[a-zA-Z_$][a-zA-Z0-9_$]*/ },
    { type: "whitespace", regex: /^\s+/ },
    { type: "other", regex: /^./ },
  ]

  while (remaining.length > 0) {
    let matched = false

    for (const { type, regex } of patterns) {
      const match = remaining.match(regex)
      if (match) {
        tokens.push({ type, value: match[0] })
        remaining = remaining.slice(match[0].length)
        matched = true
        break
      }
    }

    if (!matched) {
      tokens.push({ type: "other", value: remaining[0] })
      remaining = remaining.slice(1)
    }
  }

  return tokens
}

const getTokenClassName = (type: string): string => {
  const classMap: Record<string, string> = {
    keyword: "text-purple-400",
    string: "text-amber-300",
    template: "text-amber-300",
    number: "text-cyan-300",
    comment: "text-gray-500 italic",
    component: "text-emerald-400",
    tag: "text-pink-400",
    attribute: "text-sky-300",
    bracket: "text-gray-300",
    operator: "text-pink-400",
    punctuation: "text-gray-400",
    property: "text-sky-300",
    function: "text-yellow-300",
    identifier: "text-gray-200",
    whitespace: "",
    other: "text-gray-300",
  }
  return classMap[type] || "text-gray-300"
}

export function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const tokens = tokenize(code)

  return (
    <div className="relative">
      <pre className="bg-gray-900/80 rounded-lg p-4 text-xs overflow-x-auto border border-gray-700/50">
        <code>
          {tokens.map((token, i) => (
            <span key={i} className={getTokenClassName(token.type)}>
              {token.value}
            </span>
          ))}
        </code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 rounded-md bg-gray-700/50 hover:bg-gray-600/50 transition-colors text-gray-400 hover:text-white"
        title="Copy code"
      >
        {copied ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4 text-green-400">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
            <path d="M7 3.5A1.5 1.5 0 0 1 8.5 2h3.879a1.5 1.5 0 0 1 1.06.44l3.122 3.12A1.5 1.5 0 0 1 17 6.622V12.5a1.5 1.5 0 0 1-1.5 1.5h-1v-3.379a3 3 0 0 0-.879-2.121L10.5 5.379A3 3 0 0 0 8.379 4.5H7v-1Z" />
            <path d="M4.5 6A1.5 1.5 0 0 0 3 7.5v9A1.5 1.5 0 0 0 4.5 18h7a1.5 1.5 0 0 0 1.5-1.5v-5.879a1.5 1.5 0 0 0-.44-1.06L9.44 6.439A1.5 1.5 0 0 0 8.378 6H4.5Z" />
          </svg>
        )}
      </button>
    </div>
  )
}
