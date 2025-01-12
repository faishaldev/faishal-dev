import { cn } from '@/lib/utils';
import PlainTextBodyOne from '../atoms/PlainTextBodyOne';

export default function AuthorQuote() {
  return (
    <div className={cn(`flex flex-col items-center py-[8px] animate-fade-in`)}>
      <hr className={cn(`w-full border-[#6D6D6D]`)} />
      <PlainTextBodyOne
        text='"Crafting code like threads of art"'
        className={cn(
          `italic text-center font-semibold animate-typing py-3 md:p-3 md:py-5`,
        )}
      />
      <hr className={cn(`w-full border-[#6D6D6D]`)} />
    </div>
  );
}
