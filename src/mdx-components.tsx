import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ ref, children }) => (
    //   <Link id={`${ref}`} href={`#${ref}`} className='prose prose-2xl'>
    //     {children}
    //   </Link>
    // ),
    // h2: ({ children }) => <div className='prose'>{children}</div>,
    // img: (props) => <Image {...(props as ImageProps)} />,
    // code: (props) => <Code color='primary'>{props.children}</Code>,
    ...components,
  };
}
