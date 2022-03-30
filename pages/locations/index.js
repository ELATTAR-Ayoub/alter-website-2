import Link from 'next/link'
import { useState, useEffect } from 'react';

//src
import GoogleMapTA from '../../src/GoogleMapTA.jpg'

export default function Locations() {

  return (
    <div className='flexCenter flex-col '>
    <div className='flexCenter justify-start flex-col w-screen bg-secondary text-sideColor text-center border-b-2 border-sideColor '>
        <h1 className='text-3xl md:text-5xl pt-6 md:mt-24 mt-2 font-bold drop-shadow-lg textShadowPrimary '>Find an Altiral Gym Near You</h1>

        <div className="flexCenter max-w-7xl flex-col flex-wrap w-full p-4">
            <div className="activity relative border-2 border-sideColor flexCenter w-full md:h-96 h-60 md:mx-2 my-4 mx-0 overflow-hidden shadow-lg text-sideColor">
                <img className='locationImg absolute w-full -translate-x-1/2 -translate-y-1/2 darkerImg' src={GoogleMapTA.src} alt="Google Map" />
                <div className="flexCenter relative z-20 flex-col h-full w-full text-center">
                    <h2 className='cursor-default uppercase mb-4 lg:text-4xl md:text-2xl text-xl font-bold'>Rabat</h2>
                    <p className='cursor-default text-base mb-1'>Angle Rue Raiss Mohammed Baina et, Boulevard Akrach, Rabat</p>
                    <p className='cursor-default text-base mb-6'>+212 615561479</p>
                    <div className="flexCenter w-full absolute bottom-3 left-0 ">
                        <Link href='/join/rabat'>
                            <a className='bg-sideColor uppercase w-1/2 text-center text-primary font-semibold p-4 mx-3 cursor-pointer hover:bg-secondary hover:text-primary'>
                            Select
                            </a>
                        </Link>
                        <Link href='locations/rabat'>
                            <a className='bg-sideColor uppercase w-1/2 text-center text-primary font-semibold p-4 mx-3 cursor-pointer hover:bg-secondary hover:text-primary'>
                            About
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="activity relative border-2 border-sideColor flexCenter w-full md:h-96 h-60 md:mx-2 my-4 mx-0 overflow-hidden shadow-lg text-sideColor">
                <img className='locationImg absolute w-full -translate-x-1/2 -translate-y-1/2 darkerImg' src={GoogleMapTA.src} alt="Google Map" />
                <div className="flexCenter relative z-20 flex-col h-full w-full text-center">
                    <h2 className='cursor-default uppercase mb-4 lg:text-4xl md:text-2xl text-xl font-bold'>casablanca</h2>
                    <p className='cursor-default text-base mb-1'>32 Rue Al Oukhouane, Casablanca 20250</p>
                    <p className='cursor-default text-base mb-6'>+212 712356547</p>
                    <div className="flexCenter w-full absolute bottom-3 left-0 ">
                        <Link href='/join/casablanca'>
                            <a className='bg-sideColor uppercase w-1/2 text-center text-primary font-semibold p-4 mx-3 cursor-pointer hover:bg-secondary hover:text-primary'>
                            Select
                            </a>
                        </Link>
                        <Link href='locations/casablanca'>
                            <a className='bg-sideColor uppercase w-1/2 text-center text-primary font-semibold p-4 mx-3 cursor-pointer hover:bg-secondary hover:text-primary'>
                            About
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="activity relative border-2 border-sideColor flexCenter w-full md:h-96 h-60 md:mx-2 my-4 mx-0 overflow-hidden shadow-lg text-sideColor">
                <img className='locationImg absolute w-full -translate-x-1/2 -translate-y-1/2 darkerImg' src={GoogleMapTA.src} alt="Google Map" />
                <div className="flexCenter relative z-20 flex-col h-full w-full text-center">
                    <h2 className='cursor-default uppercase mb-4 lg:text-4xl md:text-2xl text-xl font-bold'>Salé</h2>
                    <p className='cursor-default text-base mb-1'>17 route de Kénitra Lot des habous, Salé 11000</p>
                    <p className='cursor-default text-base mb-6'>+212 712356547</p>
                </div>
                <div className="absolute font-bold textShadowPrimary shadow-2xl -bottom-12 -left-24 h-1/3 bg-primary z-40 flexCenter items-end uppercase py-16 px-16 transform rotate-45">
                    <p className=' cursor-default pt-10 pr-12 transform -rotate-45'>club <br /> coming <br /> soon</p>
                </div>
            </div>
        </div>
    </div>
    </div>

  )
}
