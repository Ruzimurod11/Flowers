"use client"
import { cn } from "@/lib/utils"
import placeholder from "@/public/images/placeholder.jpg"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image, { ImageProps } from "next/image"
import { useState } from "react"

const DEFAULT_PLACEHOLDER = placeholder

interface CustomProps {
    wrapperClassName?: string
    src?: string | StaticImport | null
}

export default function ClientImg({
    src,
    className,
    alt,
    wrapperClassName,
    ...props
}: Omit<ImageProps, "src"> & CustomProps) {
    const [image, setImage] = useState(src || DEFAULT_PLACEHOLDER)

    return (
        <div className={cn("relative w-full h-full", wrapperClassName)}>
            <Image
                src={image}
                alt={alt}
                loading="lazy"
                className={cn(
                    "object-cover bg-accent w-full h-full rounded-md",
                    className,
                )}
                onError={() => {
                    setImage(DEFAULT_PLACEHOLDER)
                }}
                fill={!props.width && !props.height ? true : false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={100}
                {...props}
            />
        </div>
    )
}
