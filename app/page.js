import PlainTextBodyOne from '@/components/atoms/PlainTextBodyOne';
import PlainTextHeadingOne from '@/components/atoms/PlainTextHeadingOne';
import ColorsGradientBackground from '@/components/templates/ColorsGradientBackground';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <div className="relative">
      <ColorsGradientBackground className="h-[150px] brig animate-gradient" />
      <div className="absolute top-0 p-[16px] md:p-[32px] w-full h-full">
        <div
          className={cn(
            `flex
            flex-col
            md:flex-row
            justify-between
            md:justify-normal
            md:items-center
            w-full
            h-full`,
          )}
        >
          <div className="flex flex-col items-center animate-fade-in">
            <PlainTextHeadingOne
              text="Faishal"
              className="hover-lighting hover:cursor-pointer"
            />
            <PlainTextBodyOne
              text="Software Engineer"
              className="hover-lighting hover:cursor-pointer"
            />
          </div>
          <div className="flex flex-col items-center w-full">
            <hr className="md:hidden w-full" />
            <PlainTextBodyOne
              text='"Crafting code like threads of art"'
              className="italic w-full text-center font-semibold animate-typing py-1"
            />
            <hr className="md:hidden w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
