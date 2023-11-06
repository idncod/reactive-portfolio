import Link from 'next/link'
import {useState} from 'react'
import { BsFillMoonStarsFill } from "react-icons/bs";


const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
    <div className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
    <nav className="py-4 py-10 mb-12 flex justify-between dark:text-white">
      <a href="/">
        <h1 className="font-bold">idncod.</h1>
      </a>
      <ul className="flex space-x-6 items-center">
      <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md"
            href="mailto:idncod@protonmail.com"
          >
            Email me
          </a>
          </li>
          <li className="flex items-center space-x-2">
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-2xl"
          />
        </li>
      </ul>
    </nav>
  </div>
  </div>
  )
}

export default Navbar;