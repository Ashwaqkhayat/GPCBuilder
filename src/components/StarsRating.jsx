import { Star } from "@phosphor-icons/react";

function StarsRating({rate}) {
    return (
        <div className='flex'>
            <Star
                size={16}
                className='opacity-40'
                color="#DBF6E9"
                weight={rate > 0 ? "fill" : "regular"}
            />
            <Star
                size={16}
                className='opacity-40'
                color="#DBF6E9"
                weight={rate > 1 ? "fill" : "regular"}
            />
            <Star
                size={16}
                className='opacity-40'
                color="#DBF6E9"
                weight={rate > 2 ? "fill" : "regular"}
            />
            <Star
                size={16}
                className='opacity-40'
                color="#DBF6E9"
                weight={rate > 3 ? "fill" : "regular"}
            />
            <Star
                size={16}
                className='opacity-40'
                color="#DBF6E9"
                weight={rate > 4 ? "fill" : "regular"}
            />
        </div>
    )
}

export default StarsRating