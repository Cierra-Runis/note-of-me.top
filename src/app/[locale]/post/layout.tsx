import 'katex/dist/katex.min.css';
import React from 'react';

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className='prose max-w-full dark:prose-invert md:prose-lg prose-code'>
      {/* TODO: Use import instead */}
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/styles/github-dark.min.css'
      ></link>
      {children}
    </div>
  );
}
