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
import { Button } from '../ui/button';
import Link from 'next/link';

export default function AuthorLinks() {
  return (
    <div className="flex flex-col items-center justify-between md:gap-[32px] lg:gap-[16px] w-full max-w-[347px] h-full">
      <div
        className={cn(
          `flex
      items-center
      justify-center
      md:justify-end
      py-[8px]
      md:py-0
      gap-[20px]
      animate-fade-in`,
        )}
      >
        <Link
          href="https://instagram.com/faishaldev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram
            className="icon-animate hover:cursor-pointer"
            color="#bebebe"
          />
        </Link>
        <Link
          href="https://facebook.com/faishaldev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook
            className="icon-animate hover:cursor-pointer"
            color="#bebebe"
          />
        </Link>
        <Link
          href="https://youtube.com/@faishaldev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Youtube
            className="icon-animate hover:cursor-pointer"
            color="#bebebe"
          />
        </Link>
        <Link
          href="https://x.com/faishaldev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter
            className="icon-animate hover:cursor-pointer"
            color="#bebebe"
          />
        </Link>
        <Link
          href="https://linkedin.com/in/faishaldev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin
            className="icon-animate hover:cursor-pointer"
            color="#bebebe"
          />
        </Link>
        <Link
          href="mailto:hi@faishal.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail className="icon-animate hover:cursor-pointer" color="#bebebe" />
        </Link>
        <Link
          href="https://github.com/faishaldev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github
            className="icon-animate hover:cursor-pointer"
            color="#bebebe"
          />
        </Link>
        <Link
          href="https://gitlab.com/faishaldev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Gitlab
            className="icon-animate hover:cursor-pointer hover:text-white"
            color="#bebebe"
          />
        </Link>
      </div>
      <hr className="w-full border-[#6D6D6D] hidden xl:block animate-fade-in" />
      <Link
        href="https://wa.me/62895381900306"
        target="_blank"
        rel="noopener noreferrer"
        className="active:scale-95 duration-300 py-[8px] md:py-0 w-full animate-fade-in"
      >
        <Button
          effect="shine"
          className={cn(
            `font-acumin-regular
        text-[14px]
        md:text-[16px]
        text-[#bebebe]
        border
        border-[#6D6D6D]
        rounded-xl
        tracking-wider
        w-full
        hover:bg-[#6D6D6D]
        duration-300`,
          )}
        >
          Let's make magic! 🪄
        </Button>
      </Link>
    </div>
  );
}
