'use client'

import Link from 'next/link'

const Nav = () => {
  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="flex flex-col md:flex-row gap-8 items-center mt-8 md:mt-0 mr-10">
      {navLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="relative capitalize font-medium text-white transition-all hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#f23557] to-[#fbb13c] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-[#f23557] after:to-[#fbb13c] hover:after:w-full after:transition-all after:duration-300"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

export default Nav
