interface CalloutProps {
  children: React.ReactNode;
}

export function Callout({ children }: CalloutProps) {
  return (
    <aside className="not-prose my-8 border-l-2 border-accent bg-[#111113] p-6">
      <div className="font-medium text-[17px] leading-[1.7] text-[#f5f5f0]">
        {children}
      </div>
    </aside>
  );
}
