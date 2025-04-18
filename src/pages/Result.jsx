import React from 'react'
import { Nav } from '../components'
import caseImg from '../assets/images/case.png'
import { ShoppingCart, WarningCircle } from "@phosphor-icons/react";
import StarsRating from '../components/StarsRating';

function Result() {
    const ratings = [1, 2, 3, 4, 5];
    var rate = ratings[3];

    return (
        <div className="bg-Dark-Blue w-full sm:min-h-screen md:h-screen font-lato">
            <Nav />
            <div className="min-h-screen w-full flex flex-col gap-y-8 md:gap-y-14 justify-center items-center max-container z-10">
                <div className="px-8 flex flex-col items-center gap-y-3 text-center">
                    <h1 className="text-Mint font-bold text-2xl md:text-4xl">This Build May Suit You!</h1>
                    <h3 className="text-Mint opacity-40 font-light text-sm md:text-base">All components in this build are compatible</h3>
                </div>

                {/* ====== The PC specs ====== */}
                <div className='flex gap-x-32 items-center'>
                    <div>
                        <img
                            src={caseImg}
                            alt="PC Case image"
                            width={300}
                        />
                    </div>
                    <div className='bg-slate-800 flex gap-x-14'>
                        <div className='flex flex-col gap-y-7 w-[280px] text-wrap'>
                            <div className='flex flex-col gap-y-2'>
                                <p className='text-Lime text-sm'>{"Motherboard"}</p>
                                <div className='flex gap-2 items-center'>
                                    <h4 className='text-Mint text-lg font-bold h-[45px]'>MSI B650 GAMING PLUS WIFI</h4>
                                    <WarningCircle size={12} color="#DBF6E9" />
                                </div>
                                <div className='flex justify-between items-center'>
                                    <StarsRating rate={5} />
                                    <div className='border-[1px] rounded-md border-[#DBF6E9] opacity-40'>
                                        <ShoppingCart size={16}
                                            className='p-[3px]'
                                            color="#DBF6E9" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <p className='text-Lime text-sm'>{"Graphic Processing Unit (GPU)"}</p>
                                <div className='flex gap-2 items-center'>
                                    <h4 className='text-Mint text-lg font-bold h-[45px]'>GIGABYTE GeForce RTX 4070 SUPER WINDFORCE OC 12G</h4>
                                    <WarningCircle size={12} color="#DBF6E9" />
                                </div>
                                <div className='flex justify-between items-center'>
                                    <StarsRating rate={3} />
                                    <div className='border-[1px] rounded-md border-[#DBF6E9] opacity-40'>
                                        <ShoppingCart size={16}
                                            className='p-[3px]'
                                            color="#DBF6E9" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <p className='text-Lime text-sm'>{"Power Supply (PSU)"}</p>
                                <div className='flex gap-2 items-center'>
                                    <h4 className='text-Mint text-lg font-bold h-[45px]'>Thermaltake GF1 850W</h4>
                                    <WarningCircle size={12} color="#DBF6E9" />
                                </div>
                                <div className='flex justify-between items-center'>
                                    <StarsRating rate={4} />
                                    <div className='border-[1px] rounded-md border-[#DBF6E9] opacity-40'>
                                        <ShoppingCart size={16}
                                            className='p-[3px]'
                                            color="#DBF6E9" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <p className='text-Lime text-sm'>{"Storage"}</p>
                                <div className='flex gap-2 items-center'>
                                    <h4 className='text-Mint text-lg font-bold h-[45px]'>Western Digital Blue SN580 M.2 2280 2TB</h4>
                                    <WarningCircle size={12} color="#DBF6E9" />
                                </div>
                                <div className='flex justify-between items-center'>
                                    <StarsRating rate={4} />
                                    <div className='border-[1px] rounded-md border-[#DBF6E9] opacity-40'>
                                        <ShoppingCart size={16}
                                            className='p-[3px]'
                                            color="#DBF6E9" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-y-7 w-[280px] text-wrap'>
                            <div className='flex flex-col gap-y-2'>
                                <p className='text-Lime text-sm'>{"Central Processing Unit (CPU)"}</p>
                                <div className='flex gap-2 items-center'>
                                    <h4 className='text-Mint text-lg font-bold h-[45px]'>Ryzen 7 7800X3D</h4>
                                    <WarningCircle size={12} color="#DBF6E9" />
                                </div>
                                <div className='flex justify-between items-center'>
                                    <StarsRating rate={5} />
                                    <div className='border-[1px] rounded-md border-[#DBF6E9] opacity-40'>
                                        <ShoppingCart size={16}
                                            className='p-[3px]'
                                            color="#DBF6E9" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <p className='text-Lime text-sm'>{"Memory"}</p>
                                <div className='h-[80px] flex flex-col gap-y-1'>
                                    <div className='flex gap-2 items-center'>
                                        <h4 className='text-Mint text-lg font-bold'>G.SKILL Trident Z5 khjihijioihohojophihojpohpohklkjlkjokuhikhihoihoi Neo RGB</h4>
                                        <WarningCircle size={12} color="#DBF6E9" />
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <StarsRating rate={3} />
                                        <div className='border-[1px] rounded-md border-[#DBF6E9] opacity-40'>
                                            <ShoppingCart size={16}
                                                className='p-[3px]'
                                                color="#DBF6E9" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <p className='text-Lime text-sm'>{"CPU Cooler"}</p>
                                <div className='flex gap-2 items-center'>
                                    <h4 className='text-Mint text-lg font-bold h-[45px]'>CORSAIR H100x RGB ELITE</h4>
                                    <WarningCircle size={12} color="#DBF6E9" />
                                </div>
                                <div className='flex justify-between items-center'>
                                    <StarsRating rate={4} />
                                    <div className='border-[1px] rounded-md border-[#DBF6E9] opacity-40'>
                                        <ShoppingCart size={16}
                                            className='p-[3px]'
                                            color="#DBF6E9" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <p className='text-Lime text-sm'>{"Case"}</p>
                                <div className='flex gap-2 items-center'>
                                    <h4 className='text-Mint text-lg font-bold h-[45px]'>Corsair 4000D Airflow Black Steel</h4>
                                    <WarningCircle size={12} color="#DBF6E9" />
                                </div>
                                <div className='flex justify-between items-center'>
                                    <StarsRating rate={4} />
                                    <div className='border-[1px] rounded-md border-[#DBF6E9] opacity-40'>
                                        <ShoppingCart size={16}
                                            className='p-[3px]'
                                            color="#DBF6E9" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result