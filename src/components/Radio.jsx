import { createContext, useContext } from "react";

const RadioContext = createContext();

const Radio = ({ children, ...props }) => {
    const { value, onChange } = useContext(RadioContext);

    return (
        <label 
        className= {`w-[172px] h-[44px] shadow rounded-2xl flex justify-center items-center cursor-pointer text-Mint text-lg transition-all ${
            value == props.value
            ? "bg-Purple border-Purple font-semibold"
            : "bg-OffWhite bg-opacity-15 border-solid border-half border-Mint border-opacity-30"
        }`}
        >
            <input
                type="radio"
                className="hidden"
                checked={value == props.value}
                onChange={onChange}
                {...props}
            />
            {children}
        </label>
    );
}

export default Radio;

export function RadioGroup({ value, onChange, children }) {
    return (
        <RadioContext.Provider value={{ value, onChange }}>
            {children}
        </RadioContext.Provider>
    )
}
