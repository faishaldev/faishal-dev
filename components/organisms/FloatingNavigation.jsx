import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

export default function FloatingNavigation() {
  return (
    <nav className={cn(`sticky w-full bottom-0 p-10 animate-fade-in`)}>
      <div
        className={cn(
          `absolute
          top-0
          left-1/2
          transform
          -translate-x-1/2
          -translate-y-1/2
          flex
          gap-2
          items-center
          bg-[#101012]
          border
          border-[#6D6D6D]
          text-gray-400
          rounded-full
          p-2
          w-fit`,
        )}
      >
        <Button
          effect="shineHover"
          className={cn(
            `rounded-full
            focus:outline-none
            text-[#bebebe]
            font-medium
            font-acumin-regular
            tracking-wider`,
          )}
        >
          Projects
        </Button>
        <Button
          effect="shineHover"
          className={cn(
            `rounded-full focus:outline-none text-[#bebebe] font-acumin-regular tracking-wider`,
          )}
        >
          Blogs
        </Button>
        <Button
          effect="shineHover"
          className={cn(
            `rounded-full focus:outline-none text-[#bebebe] font-acumin-regular tracking-wider`,
          )}
        >
          Vlogs
        </Button>
      </div>
    </nav>
  );
}
