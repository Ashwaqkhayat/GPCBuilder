import { useState } from "react";
import { Plus } from "@phosphor-icons/react";


const faqs = ["How it works?", "Can I edit the suggested builds after generation?", "Can I share my builds?", "How long does PCBuilder take to run?"];

const Faqs = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="max-container flex flex-col gap-10 justify-center items-start px-20 mt-20">
            <h1 className="font-lato text-[32px] text-Mint font-bold leading-10">
                Frequently asked <br />questions.
            </h1>

            <div className="w-full flex flex-col">
                {faqs.map((faq, index) =>
                    <div key={index} className="border-b-[1px]" style={{ borderColor: index == faqs.length - 1 ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0.2)" }}>
                        <button onClick={() => toggleAccordion(index)}
                            className="flex justify-between items-center w-full h-20 focus:outline-none"
                        >
                            <p className="font-lato text-Mint text-base text-left">
                                {faq}
                            </p>
                            <div> <Plus size={25} color="#5363ee" weight="bold" /> </div>
                        </button>
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index
                            ? "max-h-[500px] opacity-100"
                            : "max-h-0 opacity-0"
                            }`} >
                            <div className="pb-5 text-Purple">
                                This is the content for item #. You can place any content here.
                            </div>
                        </div>
                    </div>
                )}
            </ div>
        </div>
    );
}


export default Faqs;
