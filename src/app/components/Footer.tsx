import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:justify-between">
      <p className="text-sm text-gray-500 px-2">
        © Copyright 2024. All Rights Reserved.
      </p>

      <div className="flex mt-3 -mx-2 sm:mt-0">
        <Link
          href="https://discord.notmycode.dev"
          className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
          aria-label="Discord server link"
        >
          {" "}
          Discord{" "}
        </Link>

        <Link
          href="/terms"
          className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
          aria-label="Subdomain Usage terms"
        >
          {" "}
          Terms{" "}
        </Link>
      </div>
    </div>
  );
};

export default Footer;
