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
  Youtube,
} from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky w-full top-0">
      <ColorsGradientBackground className="h-[150px] animate-gradient" />
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
          <div className="flex flex-col items-center animate-fade-in hover:cursor-pointer">
            <PlainTextHeadingOne
              text="Faishal"
              className="hover:cursor-pointer"
            />
            <PlainTextBodyOne
              text="Software Engineer"
              className="hover:cursor-pointer"
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
            py-[16px]
            md:py-0
            gap-[8px]
            md:gap-[16px]
            animate-icons`,
          )}
        >
          <Instagram
            className="icon-animate hover:cursor-pointer"
            color="#bebebe"
          />
          <Facebook
            className="icon-animate hover:cursor-pointer"
            color="#bebebe"
          />
          <Youtube
            className="icon-animate hover:cursor-pointer"
            color="#bebebe"
          />
          <Twitter
            className="icon-animate hover:cursor-pointer"
            color="#bebebe"
          />
          <Linkedin
            className="icon-animate hover:cursor-pointer"
            color="#bebebe"
          />
          <Mail className="icon-animate hover:cursor-pointer" color="#bebebe" />
          <Github
            className="icon-animate hover:cursor-pointer"
            color="#bebebe"
          />
          <Gitlab
            className="icon-animate hover:cursor-pointer"
            color="#bebebe"
          />
        </div>
      </div>
    </header>
  );
}
