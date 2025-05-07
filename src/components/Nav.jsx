import { List, X } from "@phosphor-icons/react";
import { useState } from "react";

const Nav = () => {

    // Handle the hamburger toggle
    const [isListToggled, setListToggled] = useState(false);

    function toggleHam() {
        setListToggled(!isListToggled);
    }

    return (
        <header className="sm:px-16 px-8 py-8 absolute z-50 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/" className="flex items-center space-x-3">
                    <img src="Logo.png" alt="Logo" />
                    <h1 className="hidden sm:block text-Mint font-lato font-bold text-xl">PC BUILDER</h1>
                </a>
                <div className="block sm:hidden">
                    <List
                        className={`cursor-pointer transition-all duration-300 ease-in-out ${isListToggled ? "hidden" : "block"}`}
                        size={28} 
                        weight="bold"
                        color="#DBF6E9"
                        onClick={toggleHam}
                    />
                    <X
                        className={`cursor-pointer transition-all duration-300 ease-in-out ${isListToggled ? "block" : "hidden"}`}
                        size={28}
                        color="#dbf6e9"
                        weight="bold"
                        onClick={toggleHam}
                    />
                </div>
                <ul className="hidden sm:flex font-lato text-sm justify-center items-center gap-7 sm:gap-16 text-Mint">
                    <li><a className="hover:text-Purple duration-500" href="#">FAQs</a></li>
                    <li><a className="hover:text-Purple duration-300" href="#">Sign In</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
