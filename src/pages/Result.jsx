import React from 'react'
import { Nav } from '../components'
import caseImg from '../assets/images/case.png'
import SpecCard from '../components/SpecCard';

function Result() {
    const ratings = [1, 2, 3, 4, 5];
    var rate = ratings[3];

    return (
        <div className="bg-Dark-Blue w-full sm:min-h-screen md:h-screen font-lato">
            <Nav />
            <div className="min-h-screen w-full flex flex-col gap-y-8 md:gap-y-20 justify-center items-center max-container z-10">
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
                            height={400}
                        />
                    </div>
                    <div className='flex gap-x-14 w-[600px] overflow-x-hidden'>
                        <div>
                            <SpecCard
                                type={"Motherboard"}
                                compName={"MSI B650 GAMING PLUS WIFI"}
                                rate={4}
                            />
                            <SpecCard
                                type={"Graphic Processing Unit (GPU)"}
                                compName={"GIGABYTE GeForce RTX 4070 SUPER WINDFORCE OC 12G"}
                                rate={2}
                            />
                            <SpecCard
                                type={"Power Supply (PSU)"}
                                compName={"Thermaltake GF1 850W"}
                                rate={4}
                            />
                            <SpecCard
                                type={"Storage"}
                                compName={"Western Digital Blue SN580 M.2 2280 2TB"}
                                rate={3}
                            />
                        </div>
                        <div>
                        <SpecCard
                                type={"Motherboard"}
                                compName={"MSI B650 GAMING PLUS WIFI"}
                                rate={4}
                            />
                            <SpecCard
                                type={"Graphic Processing Unit (GPU)"}
                                compName={"GIGABYTE GeForce RTX 4070 SUPER WINDFORCE OC 12G"}
                                rate={2}
                            />
                            <SpecCard
                                type={"Power Supply (PSU)"}
                                compName={"Thermaltake GF1 850W"}
                                rate={4}
                            />
                            <SpecCard
                                type={"Storage"}
                                compName={"Western Digital Blue SN580 M.2 2280 2TB"}
                                rate={3}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result