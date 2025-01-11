import { cn } from '@/lib/utils';

export default function PlainTextBodyTwo({ text = '', className = '' }) {
  return (
    <p
      className={cn(`
        font-acumin-regular
        font-[300]
        text-[14px]
        md:text-[16px]
        leading-[24px]
        text-[#bebebe]
        tracking-wider
        ${className}`)}
    >
      {text}
    </p>
  );
}
