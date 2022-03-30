import Link from 'next/link'
import { useState, useEffect } from 'react';

// icons 
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';

//components
import Icon from '../components/Icon';
import SliderCard from '../components/SliderCard'
import Philosophy from '../components/Philosophy'
import ActivitiesCard from '../components/ActivitiesCard'

//src
import Himg from '../src/homeH.jpg'
import bodyB from '../src/body-builder.png'
import gymBG from '../src/gym-bg-3.jpg'

import bodyB1 from '../src/gymnastic-woman2.png'
import gymBG1 from '../src/yoga-bg.jpg'

import bodyB2 from '../src/running-man.png'
import gymBG2 from '../src/running-man-1.jpg'

import bodyB3 from '../src/body-builder.png'
import gymBG3 from '../src/bofybuilder-gym-bg.jpg'


// activities src
import physical_athlete from '../src/physical-athlete.jpg'
import strech from '../src/strech-gym.jpg'
import party_gym from '../src/party-gym.jpg'
import gymnastic_man from '../src/gymnastic-man.jpg'
import something_different from '../src/something-different.jpg'
import islamic_gym from '../src/islamic-gym.png'


// slider arr



export default function Home() {
  const [index, setIndex] = useState(3)
  const [transL, setTransL] = useState(false)

  // useEffect(() => {
  //   if (transL) {
  //     setTimeout(() => {
  //       setTransL(false)
  //       setIndex((index + 1) % sliderArr.length)
  //     }, 5000);
  //   }
  // }, [transL])

  const sliderArr = [
    {
      h1: 'GROUP FITNESS CLASSES',
      p: 'We design our clubs to give you the most awesome workouts possible. That’s why our dedicated group fitness studios are four walls of innovative, hard work, fun.',
      img: bodyB.src,
      bg: gymBG.src,
    },
    {
      h1: 'Yoga relaxes you',
      p: 'Yoga improves strength, balance and flexibility.Yoga relaxes you, to help you sleep better, eat better, work better and live better.',
      img: bodyB1.src,
      bg: gymBG1.src,
    },
    {
      h1: 'MILES OF CARDIO',
      p: 'We’ve got all the equipment you need to sprint, jog or walk your way to your fitness goals. We’re cheering for you.',
      img: bodyB2.src,
      bg: gymBG2.src,
    },
    {
      h1: 'THINGS TO LEFT',
      p: 'Don’t be scared to LIFT HEAVY! You won’t get huge and bulky, you’ll just get amazing.',
      img: bodyB3.src,
      bg: gymBG3.src,
    }
  ]

  const activityArr = [
    {
      h2: 'LEFT WHIEGHT',
      p: 'Sculpt the muscles on your muscles.',
      img: physical_athlete,
      alt: 'left whieght',
    },
    {
      h2: 'THE RIDE',
      p: 'Spin me right round, baby!  Get in the saddle, gear up  and channel your inner cyclist.',
      img: party_gym,
      alt:'the ride',
    },
    {
      h2: 'MIND BODY BURN',
      p: 'Ommm-azingly strengthening.',
      img: strech,
      alt: 'strech yoga gym',
    },
    {
      h2: 'action sports',
      p: 'Your heart rate is about to raise the roof with our action-packed classes.',
      img: gymnastic_man,
      alt: 'action sports',
    },
    {
      h2: 'SOMETHING DIFFERENT',
      p: 'It’s like a weekly bachelorette party, but better.',
      img: something_different,
      alt: 'action sports',
    },
    {
      h2: 'ISLAMIC ZONE',
      p: 'Ismalic zone for only women with hijab & niqab, with no men coaches',
      img: islamic_gym,
      alt: 'islamic gym',
    },
  ]


  let i = 0;
  const handleNext = () => {
    // setTransL(true)
    setIndex((index + 1) % sliderArr.length)
  }

  // setInterval(() => {
  //   handleNext()
  //   console.log("454");
  // }, 5000);

  return (
    <div className='flexCenter flex-col '>

      <div className='fHeader bg-sideColor'>
        <div className='imgContainer h-3/4'>
          <img src={Himg.src} className='bluredHmain lg:w-full lg:h-auto h-full w-auto absolute  -translate-x-1/2 translate-y-1/2' alt="gym picture" />
          <div className='Hpres'>
            <h1><span>HARD</span> WORK, <span>HARD</span> GAIN.</h1>
            <p >MEMBERSHIPS STARTS AT 99.99MAD/MONTH.</p>
            <Link href='/join'>
                <a className=''>
                  Join now
                </a>
            </Link>
          </div>
        </div>
        <div className='w-full h-1/4  gradientPr p-4 pt-2 text-sideColor'>
          <div className='flexCenter flex-col uppercase p-3 mb-0 md:mb-5 text-xl'>
            <p className='mb-2 font-semibold  text-base'>closest club</p>
            <div className='flexCenter '>
              <p className='pr-2 font-semibold'>your local gym</p>
              <Link href='/locations/rabat'>
                  <a className='flexCenter cursor-pointer border-b-2 border-sideColor border-dotted border-opacity-0 hover:border-opacity-50'>
                    <Icon icon={< GoLocation size='24' className='uppercase text-xl' />} text={''} />
                    <p className='pr-2'>rabat</p>
                  </a>
              </Link>
            </div>
          </div>
          <div className='orangeDiv'>
            <Link href='/locations'>
                <a>
                  locations
                </a>
            </Link>
            <Link href='/join'>
                <a>
                  Join now
                </a>
            </Link>
          </div>
        </div>
      </div>
      <div className='p-4 flex-col flexCenter'>
        <div className='Hparagraph'>
          <span>Altíraser #1</span>
          <h1>Our Gym is Your Gym</h1>
          <p>Kick your feet up! With a gym designed around you, we think you’ll love it here.</p>
        </div>

        <SliderCard/>
        
        <div className='Hparagraph mt-6'>
          <span>Altíraser #2</span>
          <h1>We Are Here To Help You</h1>
          <p>No matter where you start from, no matter where you are going to.</p>
          <Philosophy/>
          
        </div>
        <div className='Hparagraph'>
          <span>Altíraser #3</span>
          <h1>Our Gym is Your Gym</h1>
          <p>Believe in the power of a motivating group fitness community.</p>
        </div>
        <div className="flexCenterM flex-wrap w-full">
          {
            activityArr.map((ele, i) => (
              <ActivitiesCard key={i} img={ele.img} alt={ele.alt} h2={ele.h2} p={ele.p}/>
            ))
          }
        </div>
      </div>
      <div className='w-screen h-1/4  gradientPr p-4 py-2 pb-6 text-sideColor'>
          <div className='flexCenter flex-col uppercase p-3 mb-0 md:mb-5 text-xl'>
            <p className='mb-2 font-semibold text-sm md:text-base'>closest club</p>
            <div className='flexCenter '>
              <p className='pr-2 font-semibold text-sm md:text-base'>your local gym</p>
              <Link href='/locations/rabat'>
                  <a className='flexCenter text-sm md:text-base cursor-pointer border-b-2 border-sideColor border-dotted border-opacity-0 hover:border-opacity-50'>
                    <Icon icon={< GoLocation size='24' className='uppercase text-base md:text-xl' />} text={''} />
                    <p className='pr-2'>rabat</p>
                  </a>
              </Link>
            </div>
          </div>
          <div className='orangeDiv w-auto'>
            <Link href='/membership-options'>
                <a >
                see our membership options
                </a>
            </Link>
          </div>
        </div>
    </div>

  )
}
