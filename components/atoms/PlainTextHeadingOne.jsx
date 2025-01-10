import { cn } from '@/lib/utils';

export default function PlainTextHeadingOne({ text = '', className = '' }) {
  return (
    <h1
      className={cn(
        `font-agrandir-regular
        text-[56px]
        md:text-[80px]
        font-[700]
        leading-[50px]
        md:leading-[72px]
        text-[#fff]
        tracking-wider
        ${className}`,
      )}
    >
      {text}
    </h1>
  );
}
