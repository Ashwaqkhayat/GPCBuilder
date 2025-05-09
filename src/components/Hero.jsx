import { useNavigate } from 'react-router-dom';
import motherboard from '../assets/images/hero-motherboard.png';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen relative max-container flex flex-col justify-center items-center">
            <div className="flex flex-col items-center justify-center gap-6 relative z-10 mt-[-1rem] md:mt-[-9rem] lg:mt-[-15rem]">
                <h1 className="text-Mint font-lato font-bold text-center text-[36px] px-10">
                    Let AI build a customized PC <br /> made exclusively for you
                </h1>
                <button
                    className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#707fff] via-slate-500 to-Lime px-20 py-6 hero-btn"
                    onClick={() => { navigate('/build'); }}
                >
                    <div className="absolute inset-px z-10 flex items-center justify-center rounded-2xl bg-Dark-Blue">
                        <h1 className="text-Purple font-lato text-lg font-bold">New Build</h1>
                    </div>
                </button>

            </div>
            <div className="absolute z-0 flex justify-center mt-[-5rem] items-center max-w-[780px] px-9">
                <img src={motherboard} alt="Motherboard" className="object-contain w-full h-full opacity-65 mask-image-gradient" />
            </div>
        </div>
    );
}

export default Hero;
