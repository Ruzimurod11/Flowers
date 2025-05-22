// src/components/BackHeader.tsx
"use client"

import { useRouter } from "next/navigation"
import { MdKeyboardArrowRight } from "react-icons/md"

interface BackHeaderProps {
    title: string
}

const BackHeader = ({ title }: BackHeaderProps) => {
    const router = useRouter()

    return (
        <div className="lg:hidden flex items-center mb-2 gap-2">
            <button
                onClick={() => router.back()}
                className="flex items-center disabled"
            >
                <MdKeyboardArrowRight className="rotate-180 w-7 h-7 md:w-9 md:h-9" />
            </button>
            <h2 className="text-lg font-semibold xsm:text-xl sm:text-2xl md:text-3xl">
                {title}
            </h2>
        </div>
    )
}

export default BackHeader
