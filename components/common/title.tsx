import { cn } from "@/lib/utils"
import Image from "next/image"

interface Props {
    title: string
    className?: string
}

export default function Title({ title, className }: Props) {
    return (
        <div
            className={cn(
                "flex-col items-center gap-2 hidden lg:flex",
                className,
            )}
        >
            <h2 className="text-center text-[#212121] text-[2rem] font-bold">
                {title}
            </h2>
            <Image
                src="/icons/line.svg"
                width={128}
                height={19}
                alt="title underline decoration"
            />
        </div>
    )
}
