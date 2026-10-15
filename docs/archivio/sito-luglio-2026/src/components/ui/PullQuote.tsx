interface PullQuoteProps {
  children: React.ReactNode;
}

export function PullQuote({ children }: PullQuoteProps) {
  return (
    <div className="border-l-[3px] border-[#e8a838] bg-[#111113] px-6 py-6 md:px-8 md:py-8 my-10">
      <p className="text-lg md:text-xl leading-[1.7] text-[#f5f5f0] font-light">
        {children}
      </p>
    </div>
  );
}
