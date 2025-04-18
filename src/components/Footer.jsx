import ellipse from '../assets/images/Ellipse.png';

const Footer = () => {
    return (
        <div className="max-container flex flex-col gap-4 justify-center items-center h-60 py-36">
            <img src="./Logo.png" alt="" width={33} height={32.85} />
            <p className="text-Mint opacity-30 text-base">
                Copyright © 2024 . All rights reserved.
            </p>

            <div className="absolute left-[50%] translate-x-[-50%] translate-y-[15%]">
                <img src={ellipse} alt=""/>
            </div>
        </div>
    );
}

export default Footer;
