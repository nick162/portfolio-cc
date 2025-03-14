"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import { ToggleDarkMode } from "./ToggleDarkMode";

const Navbar = () => {
  return (
    <div className="container mx-auto fixed top-0 left-0 right-0 z-10">
      <nav className="flex justify-between items-center navbar">
        {/* Logo */}
        <div className="mt-4">
          <Image
            src="/Logo.png"
            alt="logo"
            className="cursor-pointer"
            width={180}
            height={40}
          />
        </div>

        {/* Navbar Tengah */}
        <div className="flex justify-between gap-8 dark:text-black">
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex space-x-6 bg-white px-6 py-2 rounded-full shadow-md"
          >
            <Link href="/">Beranda</Link>
            <Link href="#about">Tentang Saya</Link>
            <Link href="#portfolio">Portfolio</Link>
            <Link href="#experience">Experience</Link>
            <Link href="#service">Services</Link>
            <Link href="#review">Review</Link>
          </motion.ul>
        </div>

        <div className="dark:bg-white">
          <ToggleDarkMode />
        </div>

        {/* Navbar Kanan */}
        <div>
          <Link href="#contact">
            <Button
              name="contact"
              variant="outline"
              className="border-purple bg-purple-500 text-purple md:block hidden"
            >
              Contact Me
            </Button>
          </Link>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="block md:hidden">
            <MenuIcon arial-label="navigaion-menu" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/">Home</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="#about">About Me </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="#portfolio">Portfolio</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="#experience">Experience </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="#service">Service </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="#review">Review </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="#contact">Contact Us</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </div>
  );
};

export default Navbar;
