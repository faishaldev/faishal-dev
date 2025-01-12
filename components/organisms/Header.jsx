import ColorsGradientBackground from '@/components/templates/ColorsGradientBackground';
import AuthorInformation from '../molecules/AuthorInformation';
import { cn } from '@/lib/utils';

export default function Header() {
  return (
    <header className={cn(`sticky top-0`)}>
      <ColorsGradientBackground
        className={cn(`h-[160px] animate-bounce-down`)}
      />
      <div
        className={cn(
          `container m-auto absolute left-0 right-0 top-0 px-5 py-[32px] w-full h-full`,
        )}
      >
        <AuthorInformation />
      </div>
    </header>
  );
}
