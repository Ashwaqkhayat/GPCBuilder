import StarsRating from '../components/StarsRating';

export default function SpecCard({ type, compName, rate }) {
    return (
        <div className='flex flex-col gap-y-1 max-w-[310px] p-8 rounded-xl bg-[#EBEBEB] bg-opacity-[3%] sm:p-0 sm:bg-transparent sm:max-w-[305px]'>
            <p className='text-Lime text-sm'>{type}</p>
            <div className='flex flex-col gap-y-1 h-[60px] sm:h-[80px] max-w-[305px]'>
                <p className='text-Mint text-base font-bold overflow-y-hidden text-wrap'>{compName}</p>
                <StarsRating rate={rate} />
            </div>
        </div>
    )
}
