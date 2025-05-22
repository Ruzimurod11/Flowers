"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
    return (
        <footer className="bg-black border-t border-zinc-800">
            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Logo / Brand */}
                    <Link
                        href="/"
                        className="text-2xl font-extrabold text-white hover:text-pink-400 transition-colors"
                    >
                        FlowerPower
                    </Link>

                    {/* Navigation links */}
                    <div className="flex gap-6">
                        <Link
                            href="#about"
                            className="text-zinc-300 hover:text-pink-400 transition"
                        >
                            About
                        </Link>
                        <Link
                            href="#projects"
                            className="text-zinc-300 hover:text-pink-400 transition"
                        >
                            Projects
                        </Link>
                        <Link
                            href="#contact"
                            className="text-zinc-300 hover:text-pink-400 transition"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Social icons */}
                    <div className="flex gap-4">
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            href="#"
                            className="text-zinc-400 hover:text-pink-400 transition"
                        >
                            <Github className="h-5 w-5" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            href="#"
                            className="text-zinc-400 hover:text-pink-400 transition"
                        >
                            <Linkedin className="h-5 w-5" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            href="#"
                            className="text-zinc-400 hover:text-pink-400 transition"
                        >
                            <Mail className="h-5 w-5" />
                        </motion.a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 text-center text-sm text-zinc-500">
                    &copy; {new Date().getFullYear()} FlowerPower. All rights
                    reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
