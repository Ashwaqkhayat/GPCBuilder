import { ArrowUp } from "@phosphor-icons/react";
import { Nav } from '../components'
import caseImg from '../assets/images/case.png'
import SpecCard from '../components/SpecCard';
import buildResult from '../data/build_result.json';

function Result() {
    const ratings = [1, 2, 3, 4, 5];
    var rate = ratings[3];

    return (
        <div className="bg-Dark-Blue w-full sm:min-h-screen md:h-screen font-lato">
            <Nav />
            <div id="result" className="min-h-screen sm:w-full pt-32 sm:pt-0 flex flex-col gap-y-8 sm:gap-y-20 justify-center items-center max-container z-10">
                <div className="px-8 flex flex-col items-center gap-y-3 max-w-[275px] sm:max-w-none text-center">
                    <h1 className="text-Mint font-bold text-4xl sm:text-2xl">This Build May Suit You!</h1>
                    <h3 className="text-Mint opacity-40 font-light text-base sm:text-sm">All components in this build are compatible</h3>
                </div>

                {/* ====== The PC specs ====== */}
                <div className='flex flex-col sm:flex-row gap-y-16 sm:gap-x-32 items-center px-12 mb-20'>
                    <div className='max-w-[230px] sm:max-w-none max-h-[414px]'>
                        <img src={caseImg} alt="PC Case image" className='w-full h-full object-cover' />
                    </div>
                    <div className='flex flex-col gap-4 sm:gap-0 sm:flex-row sm:gap-x-14 w-auto overflow-hidden'>
                        <div className='flex flex-col gap-4 sm:gap-0'>
                            {
                                buildResult.slice(0, 4).map(item =>
                                    <SpecCard
                                        type={item.type}
                                        compName={item.name}
                                        rate={item.rating}
                                    />
                                )
                            }
                        </div>
                        <div className='flex flex-col gap-4 sm:gap-0'>
                            {
                                buildResult.slice(4,8).map(item =>
                                    <SpecCard
                                        type={item.type}
                                        compName={item.name}
                                        rate={item.rating}
                                    />
                                )
                            }
                        </div>
                    </div>

                    <a href="#result" className="block sm:hidden">
                        <div className="bg-Lime p-4 rounded-full hover:translate-y-[-10px] duration-500 ease-in-out">
                            <ArrowUp size={25} color="#0A1015" weight="bold" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Result