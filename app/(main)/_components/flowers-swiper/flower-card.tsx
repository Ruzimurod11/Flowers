// components/ParkCard.tsx
import Rating from "@/components/common/rating"
import ClientImg from "@/components/custom/client-img"
import React from "react"
import { FiArrowUpRight } from "react-icons/fi"

interface Flower {
    id: string
    name: string
    description: string
    image: string
}

const FlowerCard = ({ item }: { item: Flower }) => {
    return (
        <div className="flex flex-col items-center w-[clamp(164px,20vw,auto)] rounded-[10px] bg-white shadow-[0px_3px_10px_0px_#D5D5D540]">
            <div className="relative w-[clamp(18rem,18vw,19rem)] h-[clamp(15rem,16vw,18rem)] bg-white flex items-center justify-center rounded-t-[10px] overflow-hidden">
                <ClientImg
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-t-[10px]"
                />
            </div>

            <div className="w-full px-[clamp(8px,2vw,16px)] py-[clamp(12px,2vw,24px)] bg-[#ffffff] rounded-b-[10px] border-t border-[#f1f2f4]">
                <p className="self-stretch justify-start text-[#212121] text-2xl font-semibold  leading-9 max-sm:font-medium max-sm:text-[15px] lg:hidden">
                    {item.name}
                </p>
                <div className="flex gap-2.5 items-center">
                    <Rating value={0} size={"small"} readOnly={true} max={5} />
                    <p className="text-[#33373e] text-base font-semibold  leading-normal">
                        {0} ({0})
                    </p>
                </div>
                <p className="mt-4 self-stretch justify-start text-[#212121] text-2xl font-semibold  leading-9 max-sm:font-medium max-sm:text-[15px] max-lg:hidden">
                    {item.name}
                </p>
                <div className="mt-6 flex items-center justify-between max-sm:mt-4">
                    <div>
                        <p className="justify-start text-[#53575e] text-[15px] font-medium  leading-snug max-sm:text-xs max-sm:leading-[18px]">
                            34
                        </p>
                    </div>
                    <button className="p-[9px] bg-[#83109f] rounded-full">
                        <FiArrowUpRight size={24} color="#ffffff" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FlowerCard
