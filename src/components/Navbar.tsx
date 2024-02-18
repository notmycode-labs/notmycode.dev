import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">Home</Link>
          <Link href="/" className="ml-4">
            About
          </Link>
        </div>
        <div className="flex items-center">
          <Link
            href="https://discord.notmycode.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 link"
          >
            Discord
          </Link>
          <Link
            href="https://github.com/notmycode-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            GitHub
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
