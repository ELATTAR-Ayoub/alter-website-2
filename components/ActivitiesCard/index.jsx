// src 
import positivity from '../../src/illustration-gym-1.png'
import inclusivity from '../../src/illustration-gym-2.png'
import fun from '../../src/illustration-gym-3.png'
// 

const Activity = ({ img, alt, h2, p}) => {
    return (
        <div className="activity relative flexCenter w-96 md:m-2 my-4 mx-0 overflow-hidden shadow-lg text-sideColor">
            <img className='absolute h-full -translate-x-1/2 -translate-y-1/2' src={img.src} alt={alt} />
            <div className='c2lTop text-center transition-all duration-700 absolute flex items-center justify-start flex-col w-full h-full bg-secondary px-6 py-3 cursor-pointer hover:bg-opacity-75 hover:bg-primary'>
                <h2 className='uppercase mb-4 text-base font-bold'>{h2}</h2>
                <p className='text-base'>{p}</p>
            </div>
        </div>
    )
}

export default Activity;