'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Home() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="projects"
      className={cn(
        `relative
        container
        bg-gradient-to-t
        from-[#101012]
        to-transparent
        w-full
        m-auto
        h-[calc(100dvh-3dvh)]
        backdrop-blur-sm
        animate-bounce-in`,
      )}
    >
      <div
        className={cn(
          `relative
          w-full
          h-full
          border-t
          bg-gradient-to-b
          from-[#171717]
          to-transparent
          border-[#6D6D6D]
          rounded-t-3xl
          my-[180px]
          md:my-[240px]
          xl:my-[25px]
          parallax-section`,
        )}
      >
        <Button
          effect="shineHover"
          className={cn(
            `absolute
            left-1/2
            transform
            -translate-x-1/2
            -translate-y-1/2
            px-3
            py-1
            md:py-2
            bg-gradient-to-t
            from-transparent
            to-[#101012]
            rounded-xl
            border-t
            border-[#6D6D6D]
            text-[#bebebe]
            tracking-wider`,
          )}
          onClick={scrollToProjects}
        >
          PROJECTS
        </Button>
      </div>
    </section>
  );
}
