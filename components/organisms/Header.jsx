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
import { Button } from '../ui/button';
import Image from 'next/image';
import FaishalDev from '../../assets/images/faishaldev.jpg';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0">
      <ColorsGradientBackground className="h-[150px] animate-gradient" />
      <div className="container m-auto absolute left-0 right-0 top-0 py-[24px] w-full h-full">
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
          <div
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
              width={115}
              height={115}
              className={cn(
                `rounded-full photo-effect brightness-75 cursor-pointer w-[84px] md:w-[100px]`,
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
                className="hover:cursor-pointer hover:scale-105 duration-150"
              />
              <PlainTextBodyOne
                text="Software Engineer"
                className="hover:cursor-pointer hover:scale-105 duration-150"
              />
            </div>
          </div>
          <div className="flex flex-col items-center py-[8px] animate-fade-in">
            <hr className="w-full border-[#6D6D6D]" />
            <PlainTextBodyOne
              text='"Crafting code like threads of art"'
              className="italic text-center font-semibold animate-typing py-3 md:p-3 md:py-5"
            />
            <hr className="w-full border-[#6D6D6D]" />
          </div>
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
                <Mail
                  className="icon-animate hover:cursor-pointer"
                  color="#bebebe"
                />
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
                  className="icon-animate hover:cursor-pointer"
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
                  w-full`,
                )}
              >
                Let's make magic! 🪄
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
