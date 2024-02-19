"use client"
import Link from "next/link"
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu"
import "@szhsin/react-menu/dist/transitions/slide.css"

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/",
  },
  {
    label: "Discord",
    href: "https://discord.notmycode.dev",
  },
  {
    label: "GitHub",
    href: "https://github.com/notmycode-dev",
  },
]

const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="flex items-center">
        <Link href="/" className="font-bold text-lg">
          Home
        </Link>

        <Menu
          menuClassName="z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg w-56"
          menuButton={
            <MenuButton className="p-2 font-bold text-lg">Menu</MenuButton>
          }
          transition
        >
          {links.map(function (data) {
            return (
              <Link key={data.href} href={data.href} aria-label={data.label}>
                <MenuItem className="flex cursor-default select-none items-center rounded-md px-2 py-1.5 text-sm outline-none focus:bg-white/70 dark:focus:bg-white/5">
                  {data.label}
                </MenuItem>
              </Link>
            )
          })}
        </Menu>
      </div>
    </nav>
  )
}

export default Navbar