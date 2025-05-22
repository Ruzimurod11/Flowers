"use client"

import MainLayout from "@/components/layouts/main-layout"
import Title from "@/components/common/title"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"
import FlowerCard from "./flower-card"
import { cn } from "@/lib/utils"
import BackHeader from "@/components/custom/back-header"

const Flowers = [
    {
        id: "1",
        name: "Flower Valley",
        description: "A peaceful place full of blooming flowers.",
        image: "https://media.istockphoto.com/id/184373587/photo/flower-in-woven-pot-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=OeudL0NstVmhC_TZJhAJJUe63AeXU-Hz0f1amz_4WNw=",
    },
    {
        id: "2",
        name: "Mountain View",
        description: "Enjoy a serene mountain landscape.",
        image: "https://media.istockphoto.com/id/514562766/photo/colorful-bouquet-of-artificial-flowers-with-ranunculus.webp?a=1&b=1&s=612x612&w=0&k=20&c=Yv8_dYw-tmbUekL-iMBZHfTXBWfjXWMnGsut6i6_WNE=",
    },
    {
        id: "3",
        name: "Sunset Park",
        description: "Beautiful sunsets every evening.",
        image: "https://media.istockphoto.com/id/1140756861/photo/close-up-of-colorful-roses-backdrop-wall.webp?a=1&b=1&s=612x612&w=0&k=20&c=44gT_FJMoZwGljwpr8__ZDvfUo_nQts8piLvO5LB0IQ=",
    },
    {
        id: "4",
        name: "Forest Haven",
        description: "Wander through lush green forests.",
        image: "https://images.unsplash.com/photo-1670924520385-7d07880cf49c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0aWZpY2lhbCUyMGZsb3dlcnN8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: "5",
        name: "Flower Valley",
        description: "A peaceful place full of blooming flowers.",
        image: "https://media.istockphoto.com/id/184373587/photo/flower-in-woven-pot-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=OeudL0NstVmhC_TZJhAJJUe63AeXU-Hz0f1amz_4WNw=",
    },
    {
        id: "6",
        name: "Mountain View",
        description: "Enjoy a serene mountain landscape.",
        image: "https://media.istockphoto.com/id/514562766/photo/colorful-bouquet-of-artificial-flowers-with-ranunculus.webp?a=1&b=1&s=612x612&w=0&k=20&c=Yv8_dYw-tmbUekL-iMBZHfTXBWfjXWMnGsut6i6_WNE=",
    },
    {
        id: "7",
        name: "Sunset Park",
        description: "Beautiful sunsets every evening.",
        image: "https://media.istockphoto.com/id/1140756861/photo/close-up-of-colorful-roses-backdrop-wall.webp?a=1&b=1&s=612x612&w=0&k=20&c=44gT_FJMoZwGljwpr8__ZDvfUo_nQts8piLvO5LB0IQ=",
    },
    {
        id: "8",
        name: "Forest Haven",
        description: "Wander through lush green forests.",
        image: "https://images.unsplash.com/photo-1670924520385-7d07880cf49c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0aWZpY2lhbCUyMGZsb3dlcnN8ZW58MHx8MHx8fDA%3D",
    },
]

const Content = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
            slidesToScroll: 1,
        },
        [Autoplay({ delay: 3000, stopOnInteraction: false })],
    )

    const [selectedIndex, setSelectedIndex] = useState(0)

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        emblaApi.on("select", onSelect)
        onSelect()
    }, [emblaApi, onSelect])

    return (
        <div className="pl-4 mt-30 pt-20">
            <Title title="Flowers" />
            <BackHeader title="Flowers" />

            <div className="overflow-hidden mt-15" ref={emblaRef}>
                <div className="flex">
                    {Flowers.map((item) => (
                        <div
                            key={item.id}
                            className="flex-[0_0_25%] pr-4 max-lg:flex-[0_0_33%] max-md:flex-[0_0_50%] max-sm:flex-[0_0_75%]"
                        >
                            <FlowerCard item={item} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center gap-2 mt-10 max-md:hidden">
                {Flowers.map((_, index) => (
                    <div
                        key={index}
                        className={cn(
                            "w-[26px] h-[26px] flex items-center justify-center border border-transparent rounded-full",
                            index === selectedIndex && "border-[#810e9d]",
                        )}
                    >
                        <button
                            className={cn(
                                "w-[9px] h-[9px] rounded-full",
                                index === selectedIndex
                                    ? "bg-[#810e9d]"
                                    : "bg-[#e0cae4]",
                            )}
                            onClick={() => emblaApi?.scrollTo(index)}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Content
