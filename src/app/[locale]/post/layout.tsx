export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className='prose dark:prose-invert md:prose-lg lg:prose-xl max-w-full'>
      {children}
    </div>
  );
}
