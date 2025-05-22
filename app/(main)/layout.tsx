"use client"

import Footer from "@/components/layouts/main-layout/footer"
import Header from "@/components/layouts/main-layout/header"
import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <main className="h-screen flex flex-col justify-between">
            <Header />
            {children}
            <Footer />
        </main>
    )
}
