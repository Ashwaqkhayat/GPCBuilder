import { createContext, useContext } from "react";

const RadioCardContext = createContext();

const RadioCard = ({ title, desc, img, icon, ...props }) => {
    const { value, onChange } = useContext(RadioCardContext);

    return (
        <label className="cursor-pointer w-full sm:w-auto">
            <input
                type="radio"
                className="hidden"
                checked={value == props.value}
                onChange={onChange}
                {...props}
            />
            <div
                className={`rounded-[18px] w-full sm:w-[210px] h-[155px] relative overflow-hidden p-5 ease-in-out duration-500 cursor-pointer shadow-lg 
                    ${value == props.value ? "scale-90 bg-Purple" : "bg-black"}
                `}
            >
                <div className={`relative z-10 h-full w-full flex ${value == props.value ? "justify-center items-center" : "flex-col justify-between"}`}>
                    {icon}
                    <div>
                        <h2 className={`text-base text-Mint font-lato font-bold mb-1 ${value == props.value && "hidden"}`}>{title}</h2>
                        <p className={`text-xs font-lato font-light text-[#A0AAA5] ${value == props.value && "hidden"}`}>{desc}</p>
                    </div>
                </div>
                <img
                    src={img}
                    alt="bg"
                    className={`absolute z-0 opacity-20 top-0 left-0 w-full h-full object-cover ${value == props.value && "hidden"}`}
                />
                <div className={`absolute bg-gradient-to-t from-white to-transparent z-0 opacity-10 top-0 left-0 w-full h-full object-cover ${value == props.value && "hidden"}`} />
            </div>
        </label>
    );
}

export default RadioCard;

export function RadioCardGroup({ value, onChange, children }) {
    return (
        <RadioCardContext.Provider value={{ value, onChange }}>
            {children}
        </RadioCardContext.Provider>
    )
}
