"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://www.svgrepo.com/show/499962/music.svg"
            alt="Landwind Logo"
            width={36}
            height={36}
            className="mr-3"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Landwind
          </span>
        </Link>

        {/* Boutons */}
        <div className="flex items-center lg:order-2">
          <Link
            href="/download"
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
          >
            Download
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Open main menu</span>

            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full lg:flex lg:w-auto lg:order-1`}
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <Link
                href="/"
                className="block py-2 text-purple-700 lg:p-0"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/company"
                className="block py-2 text-gray-700 hover:text-purple-700 lg:p-0"
              >
                Company
              </Link>
            </li>

            <li>
              <Link
                href="/marketplace"
                className="block py-2 text-gray-700 hover:text-purple-700 lg:p-0"
              >
                Marketplace
              </Link>
            </li>

            <li>
              <Link
                href="/features"
                className="block py-2 text-gray-700 hover:text-purple-700 lg:p-0"
              >
                Features
              </Link>
            </li>

            <li>
              <Link
                href="/team"
                className="block py-2 text-gray-700 hover:text-purple-700 lg:p-0"
              >
                Team
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="block py-2 text-gray-700 hover:text-purple-700 lg:p-0"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}