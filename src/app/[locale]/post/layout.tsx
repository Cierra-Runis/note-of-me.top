import '@/styles/markdown.css';
import 'katex/dist/katex.min.css';
import React from 'react';

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className='prose max-w-full dark:prose-invert md:prose-lg lg:prose-xl'>
      {children}
    </div>
  );
}
