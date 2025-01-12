import { cn } from '@/lib/utils';
import AuthorProfile from '../molecules/AuthorProfile';
import AuthorQuote from '../molecules/AuthorQuote';
import AuthorLinks from '../molecules/AuthorLinks';

export default function AuthorInformation() {
  return (
    <div
      className={cn(
        `flex
    flex-col
    xl:flex-row
    justify-between
    gap-[8px]
    md:gap-[16px]
    items-center
    w-full
    h-full`,
      )}
    >
      <AuthorProfile />
      <AuthorQuote />
      <AuthorLinks />
    </div>
  );
}
