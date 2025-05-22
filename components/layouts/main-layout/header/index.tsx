"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
]

const linkVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
}

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-pink-100 via-white to-pink-100 backdrop-blur-md shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-3xl font-extrabold text-pink-700 tracking-tight hover:text-pink-600 transition duration-300"
                >
                    FlowerPower
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-10">
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.href}
                            href={link.href}
                            variants={linkVariants}
                            initial="initial"
                            animate="animate"
                            className="text-lg text-gray-800 hover:text-pink-500 font-semibold transition-colors duration-300"
                        >
                            {link.label}
                        </motion.a>
                    ))}
                </nav>

                {/* Hamburger Icon */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
                >
                    <motion.span
                        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 7 : 0 }}
                        className="w-8 h-0.5 bg-pink-700 rounded"
                    />
                    <motion.span
                        animate={{ opacity: isOpen ? 0 : 1 }}
                        className="w-8 h-0.5 bg-pink-700 rounded"
                    />
                    <motion.span
                        animate={{
                            rotate: isOpen ? -45 : 0,
                            y: isOpen ? -7 : 0,
                        }}
                        className="w-8 h-0.5 bg-pink-700 rounded"
                    />
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-white overflow-hidden shadow-lg"
                    >
                        <ul className="flex flex-col px-6 py-4 gap-4">
                            {navLinks.map((link) => (
                                <motion.li
                                    key={link.href}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block text-lg text-gray-700 hover:text-pink-500 font-medium"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
