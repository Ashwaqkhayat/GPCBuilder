import { List, X } from "@phosphor-icons/react";
import { useRef } from "react";
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const navRef = useRef();
    const navigate = useNavigate();

    function showNav() {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header className="sm:px-16 px-8 py-8 absolute z-50 w-full">
            <div className="flex justify-center items-center max-container">
                <a href="/" className="flex items-center space-x-3 mr-auto">
                    <img src="Logo.png" alt="Logo" />
                    <h1 className="hidden sm:block text-Mint font-lato font-bold text-xl">PC BUILDER</h1>
                </a>
                <nav ref={navRef} className="nav-slider">
                    <a className="hover:text-Purple duration-500 nav-link" href="" onClick={() => { navigate('/'); }}>FAQs</a>
                    <a className="hover:text-Purple duration-300 nav-link" href="">Sign In</a>
                    <X
                        className="cursor-pointer nav-btn nav-close-btn"
                        size={28}
                        weight="bold"
                        color="#DBF6E9"
                        onClick={showNav}
                    />
                </nav>
                <List
                    className="cursor-pointer nav-btn nav-open-btn"
                    size={28}
                    weight="bold"
                    color="#DBF6E9"
                    onClick={showNav}
                />
            </div>
        </header>
    );
}

export default Nav;