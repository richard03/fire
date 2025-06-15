/**
 * Text Component
 * Komponenta pro zobrazení strukturovaného textu ve formátu Markdown
 * Podporuje základní Markdown syntaxi včetně nadpisů, odkazů, seznamů a formátování
 * 
 * @param {Object} props - Vlastnosti komponenty
 * @param {string} props.content - Text ve formátu Markdown
 * @param {string} [props.className] - Volitelné CSS třídy pro přizpůsobení vzhledu
 * @returns {JSX.Element} Vykreslený formátovaný text
 */
'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function Text({ content, className = '' }) {
  return (
    <div className={`prose prose-blue max-w-none text-foreground-800 ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Přizpůsobení stylů pro nadpisy
          h1: ({ node, ...props }) => <h1 className="text-4xl font-bold mb-4" {...props} />,
          h2: ({ node, ...props }) => <h2 className="text-3xl font-bold mb-3" {...props} />,
          h3: ({ node, ...props }) => <h3 className="text-2xl font-bold mb-2" {...props} />,
          // Přizpůsobení stylů pro odstavce
          p: ({ node, ...props }) => <p className="mb-4 text-lg" {...props} />,
          // Přizpůsobení stylů pro seznamy
          ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4" {...props} />,
          li: ({ node, ...props }) => <li className="mb-2" {...props} />,
          // Přizpůsobení stylů pro odkazy
          a: ({ node, ...props }) => <a className="text-blue-600 hover:text-blue-800" {...props} />,
          // Přizpůsobení stylů pro tučný text
          strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
          // Přizpůsobení stylů pro kurzívu
          em: ({ node, ...props }) => <em className="italic" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
} 