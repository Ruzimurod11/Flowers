"use client"

import MainLayout from "@/components/layouts/main-layout"
import FlowersSwiper from "./flowers-swiper"

export default function Index() {
    return (
        <main className="bg-white">
            <MainLayout>
                <div className="flex flex-col items-center justify-center mt-30 px-4 sm:px-6 md:px-10 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-green-800 mb-6">
                        Welcome to FlowerPower
                    </h1>

                    <p className="max-w-xl text-green-700 text-base sm:text-lg md:text-xl mb-10">
                        Discover the most beautiful flowers and bouquets
                        handpicked for you. Brighten your day with nature's
                        finest colors and scents.
                    </p>

                    <button className="bg-green-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-green-800 transition">
                        Shop Now
                    </button>

                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl w-full">
                        {[
                            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
                            "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=400&q=80",
                            "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=400&q=80",
                            "https://plus.unsplash.com/premium_photo-1676253709098-8f336062797b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFydGlmaWNpYWwlMjBmbG93ZXJzfGVufDB8fDB8fHww",
                        ].map((src, idx) => (
                            <img
                                key={idx}
                                src={src}
                                alt="Flower"
                                className="rounded-lg object-cover w-full h-48 sm:h-56 md:h-64 shadow-md hover:scale-105 transition-transform duration-300"
                            />
                        ))}
                    </div>
                </div>
            </MainLayout>
            <div className="bg-gradient-to-b from-red-200 to-red-100 pb-10">
                <FlowersSwiper />
            </div>
        </main>
    )
}
