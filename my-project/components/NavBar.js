import Link from "next/link";
const navLinks = [
  {
    label: "Shop",
    path: "/shop",
  },
  {
    label: "Products",
    path: "/products",
  },
  {
    label: "New",
    path: "/new",
  },
  {
    label: "About us",
    path: "/about",
  },
];

export const NavBar = () => {
  return (
    <div className="navBar h-12 flex flex-row justify-between m-8">
      <div className="flex bg-gray-200 justify-start">
        <Link href="/">
          <a> LOUIS</a>
        </Link>
      </div>
      <div className="flex bg-gray-500 gap-x-10">
        {navLinks.map((link) => (
          <Link href={link.path}>
            <a>{link.label} </a>
          </Link>
        ))}
      </div>
    </div>
  );
};
