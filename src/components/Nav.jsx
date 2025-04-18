const Nav = () => {
    return (
        <header className="sm:px-16 px-8 py-8 absolute z-50 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/" className="flex items-center space-x-3">
                    <img src="Logo.png" alt="Logo" />
                    <h1 className="text-Mint font-lato font-bold text-xl">PC BUILDER</h1>
                </a>
                <ul className="flex font-lato text-sm justify-center items-center gap-7 sm:gap-16 text-Mint">
                    <li><a className="hover:text-Purple duration-500" href="#">FAQs</a></li>
                    <li><a className="hover:text-Purple duration-300" href="#">Sign In</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
