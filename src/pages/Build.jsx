import { ArrowDown, Briefcase, Code, GameController, GlobeSimple, Palette, VideoCamera } from "@phosphor-icons/react";
import { Nav, Radio, RadioCard, RadioGroup, RadioCardGroup, DoubleRange } from "../components";
import catsData from '../data/categories.json';
import ellipse from '../assets/images/Ellipse.png';
import { useState } from "react";

const Build = () => {
    //Data
    const storageSpaces = ['128 GB', '256 GB', '512 GB', '1 TB', '2 TB', '6 TB', '8 TB'];

    //States
    const [category, setCategory] = useState("");
    const [performance, setPerformance] = useState("basic");
    const [storageIndex, setStorageIndex] = useState(0);
    const [processor, setProcessor] = useState("intel");
    const [cooling, setCooling] = useState("air");
    const [appearance, setAppearance] = useState("black");
    const [upgrade, setUpgrade] = useState("yes");
    const [budgetRange, setBudgetRange] = useState([690, 1060]);


    function handleCategory(value) {
        setCategory(value);
    }

    function handlePerformance(value) {
        setPerformance(value);
    }

    function handleStorageSpace(e) {
        setStorageIndex(Number(e));
    }

    function handleProcessor(value) {
        setProcessor(value);
    }

    function handleCooling(value) {
        setCooling(value);
    }

    function handleAppearance(value) {
        setAppearance(value);
    }

    function handleUpgrade(value) {
        setUpgrade(value);
    }

    function handleBudget(value) {
        setBudgetRange(value);
    }

    function submitSpecs() {
        console.log("Category: ", category);
        console.log("Performance: ", performance);
        console.log("Storage Space: ", storageSpaces[storageIndex]);
        console.log("Processor: ", processor);
        console.log("Cooling system: ", cooling);
        console.log("Appearance: ", appearance);
        console.log("Upgradeable: ", upgrade);
        console.log("Budget Range: ", budgetRange[0], " - ", budgetRange[1]);
    }


    return (
        <div className="bg-Dark-Blue w-full sm:min-h-screen md:h-screen md:snap-y md:snap-mandatory md:overflow-y-scroll relative font-lato overflow-hidden">
            <Nav />
            <div className="absolute top-[-18rem] left-[6rem] z-0">
                <img src={ellipse} alt="" />
            </div>

            <section id="sec1" className="min-h-screen w-full pt-32 md:pt-10 flex flex-col gap-y-8 md:gap-y-14 justify-center items-center max-container md:snap-start relative z-10">
                <div className="px-8 flex flex-col items-center gap-y-3 text-center">
                    <h3 className="text-Mint opacity-40 font-light text-sm md:text-base">We will ask you several questions to customize the PC for you, it won’t take long!</h3>
                    <h1 className="text-Mint font-bold text-2xl md:text-4xl">What will you primarily use the PC for?</h1>
                </div>
                <RadioCardGroup value={category} onChange={e => handleCategory(e.target.value)}>
                    <div className="flex flex-wrap gap-5 px-8 justify-center">
                        <RadioCard
                            value="gaming"
                            title={catsData[0].title}
                            desc={catsData[0].desc}
                            img={catsData[0].img}
                            icon={<GameController size={category == "gaming" ? 45 : 25} color="#DBF6E9" weight="bold" />}
                        />
                        <RadioCard
                            value="work"
                            title={catsData[1].title}
                            desc={catsData[1].desc}
                            img={catsData[1].img}
                            icon={<Briefcase size={category == "work" ? 45 : 25} color="#DBF6E9" weight="bold" />}
                        />
                        <RadioCard
                            value="editing"
                            title={catsData[2].title}
                            desc={catsData[2].desc}
                            img={catsData[2].img}
                            icon={<VideoCamera size={category == "editing" ? 45 : 25} color="#DBF6E9" weight="bold" />}
                        />
                        <RadioCard
                            value="graphicDesign"
                            title={catsData[3].title}
                            desc={catsData[3].desc}
                            img={catsData[3].img}
                            icon={<Palette size={category == "graphicDesign" ? 45 : 25} color="#DBF6E9" weight="bold" />}
                        />
                        <RadioCard
                            value="browsing"
                            title={catsData[4].title}
                            desc={catsData[4].desc}
                            img={catsData[4].img}
                            icon={<GlobeSimple size={category == "browsing" ? 45 : 25} color="#DBF6E9" weight="bold" />}
                        />
                        <RadioCard
                            value="coding"
                            title={catsData[5].title}
                            desc={catsData[5].desc}
                            img={catsData[5].img}
                            icon={<Code size={category == "coding" ? 45 : 25} color="#DBF6E9" weight="bold" />}
                        />
                    </div>
                </RadioCardGroup>
                <a href="#sec2" className="hidden md:block">
                    <div className="bg-Lime p-4 rounded-full hover:translate-y-[10px] duration-500 ease-in-out">
                        <ArrowDown size={25} color="#0A1015" weight="bold" />
                    </div>
                </a>
            </section>

            <section id="sec2" className="min-h-screen md:pt-3 w-full flex flex-col justify-center items-center md:snap-start gap-y-28 md:gap-y-20 max-container relative z-10">
                <div className="px-8 flex flex-col items-center gap-y-3 text-center">
                    <h3 className="text-Mint opacity-40 font-light text-sm md:text-base hidden md:block">Only 7 questions left</h3>
                    <h1 className="text-Mint font-bold text-2xl md:text-4xl">What level of performance are you expecting?</h1>

                    <div className="flex flex-col md:flex-row md:flex gap-y-[15px] md:gap-x-[15px] mt-5">
                        <RadioGroup value={performance} onChange={e => handlePerformance(e.target.value)}>
                            <Radio value="basic">Basic</Radio>
                            <Radio value="moderate">Moderate</Radio>
                            <Radio value="highend">High-end</Radio>
                        </RadioGroup>
                    </div>
                </div>

                <div className="px-8 flex flex-col items-center gap-y-16 text-center">
                    <h1 className="text-Mint font-bold text-2xl md:text-4xl">
                        How much storage do you think you need?
                    </h1>

                    <div className="flex justify-center gap-x-4 w-full">
                        <div className="w-[50%] relative flex justify-center items-center">
                            <input
                                className="cus_thumb"
                                type="range"
                                name="storage"
                                id="storage"
                                min="0"
                                max={storageSpaces.length - 1}
                                step="1"
                                value={storageIndex}
                                onChange={e => handleStorageSpace(e.target.value)}
                            />
                        </div>
                        <h2 className=" w-[5.5rem] text-2xl font-normal text-Mint text-center">{storageSpaces[storageIndex]}</h2>
                    </div>
                </div>

                <a href="#sec3" className="hidden md:block">
                    <div className="bg-Lime p-4 rounded-full hover:translate-y-[10px] duration-500 ease-in-out">
                        <ArrowDown size={25} color="#0A1015" weight="bold" />
                    </div>
                </a>
            </section>

            <section id="sec3" className="min-h-screen md:pt-3 w-full flex flex-col justify-center items-center md:snap-start gap-y-28 md:gap-y-20 max-container relative z-10">
                <div className="px-8 flex flex-col items-center gap-y-3 text-center">
                    <h3 className="text-Mint opacity-40 font-light text-sm md:text-base hidden md:block">
                        Only 5 questions left
                    </h3>
                    <h1 className="text-Mint font-bold text-2xl md:text-4xl">
                        What processor do you prefer?
                    </h1>

                    <div className="flex flex-col md:flex-row md:flex gap-y-[15px] md:gap-x-[15px] mt-5">
                        <RadioGroup value={processor} onChange={e => handleProcessor(e.target.value)}>
                            <Radio value="intel">Intel</Radio>
                            <Radio value="amd">AMD</Radio>
                            <Radio value="any">any</Radio>
                        </RadioGroup>
                    </div>
                </div>

                <div className="px-8 flex flex-col items-center gap-y-3 text-center">
                    <h1 className="text-Mint font-bold text-2xl md:text-4xl">
                        Are you interested in specific cooling solutions?
                    </h1>

                    <div className="flex flex-col md:flex-row md:flex gap-y-[15px] md:gap-x-[15px] mt-5">
                        <RadioGroup value={cooling} onChange={e => handleCooling(e.target.value)}>
                            <Radio value="air">Air cooling</Radio>
                            <Radio value="liquid">Liquid cooling</Radio>
                            <Radio value="any">any</Radio>
                        </RadioGroup>
                    </div>
                </div>

                <a href="#sec4" className="hidden md:block">
                    <div className="bg-Lime p-4 rounded-full hover:translate-y-[10px] duration-500 ease-in-out">
                        <ArrowDown size={25} color="#0A1015" weight="bold" />
                    </div>
                </a>

                <img src={ellipse} alt="" className="absolute z-[-1] left-[10%] top-[-20%]" />
            </section>

            <section id="sec4" className="min-h-screen md:pt-3 w-full flex flex-col justify-center items-center md:snap-start gap-y-28 md:gap-y-20 max-container relative z-10">
                <div className="px-8 flex flex-col items-center gap-y-3 text-center">
                    <h3 className="text-Mint opacity-40 font-light text-sm md:text-base hidden md:block">
                        Only 3 questions left
                    </h3>
                    <h1 className="text-Mint font-bold text-2xl md:text-4xl">
                        Do you have any preferences for the PC's appearance?
                    </h1>

                    <div className="flex flex-col md:flex-row md:flex gap-y-[15px] md:gap-x-[15px] mt-5">
                        <RadioGroup value={appearance} onChange={e => handleAppearance(e.target.value)}>
                            <Radio value="black">Black build</Radio>
                            <Radio value="white">White build</Radio>
                            <Radio value="mix">Mix</Radio>
                        </RadioGroup>
                    </div>
                </div>

                <div className="px-8 flex flex-col items-center gap-y-3 text-center">
                    <h1 className="text-Mint font-bold text-2xl md:text-4xl">
                        Do you plan on upgrading the PC in the future?
                    </h1>

                    <div className="flex flex-col md:flex-row md:flex gap-y-[15px] md:gap-x-[15px] mt-5">
                        <RadioGroup value={upgrade} onChange={e => handleUpgrade(e.target.value)}>
                            <Radio value="yes">Yes</Radio>
                            <Radio value="no">No</Radio>
                        </RadioGroup>
                    </div>
                </div>

                <a href="#sec5" className="hidden md:block">
                    <div className="bg-Lime p-4 rounded-full hover:translate-y-[10px] duration-500 ease-in-out">
                        <ArrowDown size={25} color="#0A1015" weight="bold" />
                    </div>
                </a>

                <img src={ellipse} alt="" className="absolute z-[-1] left-[-15rem] top-10" />
            </section>

            <section id="sec5" className="min-h-screen md:pt-3 w-full flex flex-col justify-center items-center md:snap-start gap-y-28 md:gap-y-20 max-container relative z-10">
                <div className="px-8 flex flex-col items-center gap-y-3 text-center">
                    <h3 className="text-Mint opacity-40 font-light text-sm md:text-base hidden md:block">
                        Last question for building your PC!
                    </h3>
                    <h1 className="text-Mint font-bold text-2xl md:text-4xl">
                        What is your budget range for the PC build?
                    </h1>
                    <div className="text-Mint w-[90%] md:w-[100%] my-16 flex flex-col md:flex-row items-center">
                        <div className="flex flex-col justify-center mb-12 md:mb-0 mr-0 md:mr-12 md:translate-y-[-0.6rem]">
                            <p className="text-base opacity-40 font-light">min</p>
                            <span className="text-[30px] font-medium">{budgetRange[0]}$</span>
                        </div>
                        <DoubleRange handleSliderChange={handleBudget} defaultVals={budgetRange} />
                        <div className="flex flex-col justify-center mt-12 md:mt-0 ml-0 md:ml-12 md:translate-y-[-0.6rem]">
                            <p className="text-base opacity-40 font-light">max</p>
                            <span className="text-[30px] font-medium">{budgetRange[1]}$</span>
                        </div>
                    </div>
                </div>

                <a href="#" onClick={submitSpecs} className="md:block translate-y-[-2rem]">
                    <div className="bg-Lime p-4 rounded-full hover:scale-105 duration-500 ease-in-out">
                        <p className="px-4 font-normal text-xl">Confirm</p>
                    </div>
                </a>

                <img src={ellipse} alt="" className="absolute z-[-1]" />
            </section>
        </div>
    );
}

export default Build;
