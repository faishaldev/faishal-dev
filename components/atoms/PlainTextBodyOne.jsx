import { cn } from '@/lib/utils';

export default function PlainTextBodyOne({ text = '', className = '' }) {
  return (
    <p
      className={cn(`
        font-acumin-regular
        font-[300]
        text-[16px]
        md:text-[28px]
        leading-[24px]
        text-[#bebebe]
        tracking-wider
        ${className}`)}
    >
      {text}
    </p>
  );
}
