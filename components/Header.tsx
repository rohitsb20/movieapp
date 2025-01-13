import DarkMode from "@/components/DarkMode";
import React from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { GiFilmSpool } from "react-icons/gi"
import { FaTv } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

const navigation = [
  { icon: FaHome, name: "Home", href: "/" },
  { icon: FaRegUser, name: "About Us", href: "/about" },
  { icon: GiFilmSpool, name: "Movies", href: "/movies" },
  { icon: FaTv, name: "TV Shows", href: "/tv-shows" },
  { icon: FaRegHeart, name: "Favorites", href: "/favorites" },
];
export default function Header() {
  return (
    <div className="flex justify-between items-center h-16 px-4">
      {/* LOGO */}
      <div>
        <Link href="/" className="text-rose-600 italic font-semibold text-xl">
          MovieTank
        </Link>
      </div>

      {/* NAVIGATION */}
      <div>
        <div className="hidden md:flex space-x-4">
          {navigation.map((item) => (
            <Link href={item.href} key={item.name}>
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex gap-x-4 md:hidden">
          {navigation.map((item) => (
            <Link href={item.href} key={item.name}>
              <item.icon />
            </Link>
          ))}
        </div>
      </div>

      {/* Dark Mode Button  */}
      <div>
        <DarkMode />
      </div>
    </div>
  );
}
