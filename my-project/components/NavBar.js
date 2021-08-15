import Link from "next/link";
import { MenuIcon } from "@heroicons/react/solid";
const navLinks = [
  {
    label: "New",
    path: "/new",
  },
  {
    label: "Products",
    path: "/products",
  },
  {
    label: "About us",
    path: "/about",
  },
];

export const NavBar = () => {
  return (
    <div className=" sticky top-0 z-50 w-full h-12 bg-blue-100 flex flex-row justify-between m-8 items-center">
      <div className="flex justify-start">
        <Link href="/">
          <a> LOUIS</a>
        </Link>
      </div>
      <div className="flex gap-x-10">
        {navLinks.map((link) => (
          <Link href={link.path}>
            <a>{link.label} </a>
          </Link>
        ))}
        <MenuIcon className="p-0 m-0 w-6" />
      </div>
    </div>
  );
};
