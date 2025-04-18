import gemini from '../assets/images/gemini.png';
import ellipse from '../assets/images/Ellipse.png';

const Intro = () => {
    return (
        <div className="max-container flex flex-col gap-36 justify-center items-center px-10">
            <div className="max-w-md flex flex-col gap-6 justify-center items-center">
                <div className='overflow-hidden'>
                    <img src={gemini} alt="gemini logo" width={48} height={48} className='drop-shadow-color-overlay translate-y-[-100px]' />
                </div>
                <h2 className="font-lato font-medium text-[32px] text-Mint text-center leading-10">
                    Using Google Gemini, we will build a full pc based on your preferences
                </h2>
            </div>

            <div className='flex flex-col lg:flex-row justify-between gap-x-12 gap-y-5'>
                <h2 className='font-lato text-[32px] opacity-20 bg-gradient-to-t lg:bg-gradient-to-l from-Mint to-transparent bg-clip-text text-transparent'>Easy to use</h2>
                <h2 className='font-lato text-[32px] text-Mint opacity-20'>No prior knowledge</h2>
                <h2 className='font-lato text-[32px] opacity-20 bg-gradient-to-b lg:bg-gradient-to-r from-Mint to-transparent bg-clip-text text-transparent'>Fully customized</h2>
            </div>

            <div className="absolute left-[-13rem]">
                <img src={ellipse} alt="" />
            </div>
        </div>
    );
}

export default Intro;
