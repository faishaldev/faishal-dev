import PlainTextBodyOne from '@/components/atoms/PlainTextBodyOne';
import PlainTextHeadingOne from '@/components/atoms/PlainTextHeadingOne';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import FaishalDev from '../../assets/images/faishaldev.jpg';
import Link from 'next/link';

export default function AuthorProfile() {
  return (
    <Link
      href="/"
      className={cn(
        `flex
        justify-center
        md:justify-start
        gap-[32px]
        items-center
        w-full
        max-w-[347px]
        animate-fade-in
        hover:cursor-pointer`,
      )}
    >
      <Image
        src={FaishalDev}
        alt="Faishal's photo"
        width={115}
        height={115}
        className={cn(
          `rounded-full photo-effect cursor-pointer w-[84px] md:w-[100px] photo-glow`,
        )}
      />
      <div
        className={cn(
          `flex
          flex-col
          md:gap-[4px]
          items-center
          hover:cursor-pointer
          text-glow`,
        )}
      >
        <PlainTextHeadingOne
          text="Faishal"
          className={cn(`hover:cursor-pointer`)}
        />
        <PlainTextBodyOne
          text="Software Engineer"
          className={cn(`hover:cursor-pointer`)}
        />
      </div>
    </Link>
  );
}
