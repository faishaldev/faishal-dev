import PlainTextBodyOne from '@/components/atoms/PlainTextBodyOne';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <section
      className={cn(
        `relative
        bg-gradient-to-t
        from-black
        to-transparent
        w-full
        max-w-[720px]
        m-auto
        h-[calc(100dvh-3dvh)]`,
      )}
    >
      <div
        className={cn(
          `relative
          w-full
          h-full
          border-t
          bg-[#101012]
          border-[#6D6D6D]
          rounded-t-3xl
          my-[110px]
          md:my-[170px]
          parallax-section`,
        )}
      >
        <PlainTextBodyOne
          text="my projects"
          className={cn(
            `absolute
            left-1/2
            transform
            -translate-x-1/2
            -translate-y-1/2
            bg-[#101012]
            px-3
            py-1
            md:py-2
            rounded-full
            border-t
            border-[#6D6D6D]
            text-[#6D6D6D]`,
          )}
        />
      </div>
    </section>
  );
}
