import StarsRating from '../components/StarsRating';
import { ShoppingCart, WarningCircle } from "@phosphor-icons/react";

export default function SpecCard({ type, compName, rate }) {
    return (
        <div className='flex flex-col gap-y-1'>
            <p className='text-Lime text-sm'>{type}</p>
            <div className='flex flex-col gap-y-1 h-[80px] max-w-[305px]'>
                <p className='text-Mint text-base font-bold overflow-y-hidden text-wrap'>{compName}</p>
                <div className='flex justify-between items-center'>
                    <StarsRating rate={rate} />
                    <div className='border-[1px] rounded-md border-[#DBF6E9] opacity-40'>
                        <ShoppingCart size={16}
                            className='p-[3px]'
                            color="#DBF6E9" />
                    </div>
                </div>
            </div>
        </div>
    )
}
