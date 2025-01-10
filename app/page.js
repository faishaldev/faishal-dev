import PlainTextBodyOne from '@/components/atoms/PlainTextBodyOne';
import PlainTextHeadingOne from '@/components/atoms/PlainTextHeadingOne';
import ColorsGradientBackground from '@/components/templates/ColorsGradientBackground';
import { cn } from '@/lib/utils';
import {
  Facebook,
  Github,
  Gitlab,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  X,
  Youtube,
} from 'lucide-react';

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
        <div
          className={cn(
            `flex
            items-center
            justify-center
            md:justify-end
            gap-[8px]
            py-[16px]
            md:mt-[16px]
            animate-icons`,
          )}
        >
          <Instagram className="icon-animate" color="#bebebe" />
          <Facebook className="icon-animate" color="#bebebe" />
          <Youtube className="icon-animate" color="#bebebe" />
          <Twitter className="icon-animate" color="#bebebe" />
          <Linkedin className="icon-animate" color="#bebebe" />
          <Mail className="icon-animate" color="#bebebe" />
          <Github className="icon-animate" color="#bebebe" />
          <Gitlab className="icon-animate" color="#bebebe" />
        </div>
      </div>
    </div>
  );
}
