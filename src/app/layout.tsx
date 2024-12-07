import React from 'react';

export default function MLayout(props: { children: React.ReactNode }) {
  return (
    <html>
      <body>{props.children}</body>
    </html>
  );
}
