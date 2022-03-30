import Link from 'next/link'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { NextResponse, NextRequest } from 'next/server';

//components
import Icon from '../components/Icon';
import ActivitiesCard from '../components/ActivitiesCard'
import Philosophy from '../components/Philosophy'

// icons
import { BiDumbbell } from 'react-icons/bi';

//src
import strong_man_doing_deadlift from '../src/strong-man-doing-deadlift-training.jpg'

// activities src
import physical_athlete from '../src/physical-athlete.jpg'
import strech from '../src/strech-gym.jpg'
import party_gym from '../src/party-gym.jpg'
import gymnastic_man from '../src/gymnastic-man.jpg'
import something_different from '../src/something-different.jpg'
import islamic_gym from '../src/islamic-gym.png'
import locker_room from '../src/gym-change-chamber.png'
import wifi from '../src/wifi-gym.jpg'
import strech_women from '../src/woman-in-gym-leg&leg.png'
import friend_privilage from '../src/bring-a-friend-gym.png'
import coach_train_woman from '../src/gym-train-woman.png'
import group_fitnesse from '../src/group-fitnesse-classes.png'
import running_machines from '../src/running-stuffs-gym.png'
import running_man from '../src/running-man-in-gym.png'
import heavy_weight from '../src/heavy-wheight.jpeg'


export default function Service() {

  const activityArr = [
    {
      h2: 'CARDIO, WEIGHTS & MACHINES',
      p: '',
      img: running_man,
      alt: 'CARDIO, WEIGHTS & MACHINES',
    },
    {
      h2: 'HEAVY WHIEGHT',
      p: '',
      img: heavy_weight,
      alt: 'heavy whieght',
    },
    {
      h2: 'RIDE CLASSES',
      p: '',
      img: running_machines,
      alt: 'RIDE CLASSES',
    },
    {
      h2: 'POWER HALF HOUR CIRCUIT TRAINING',
      p: 'Ommm-azingly strengthening.',
      img: strech,
      alt: 'strech yoga gym',
    },
    {
      h2: 'GROUP FITNESS CLASSES',
      p: '',
      img: group_fitnesse,
      alt: 'action sports',
    },
    {
      h2: 'SOMETHING DIFFERENT',
      p: 'It’s like a weekly bachelorette party, but better.',
      img: something_different,
      alt: 'action sports',
    },
    // {
    //   h2: 'CLIMB TO THE TOP',
    //   p: 'It’s like a weekly bachelorette party, but better.',
    //   img: 'https://images.pexels.com/photos/5383797/pexels-photo-5383797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    //   alt: 'climbing sports',
    // },
    {
      h2: 'GUEST PRIVILEGES',
      p: '',
      img: friend_privilage,
      alt: 'action sports',
    },
    {
      h2: 'PERSONAL TRAINING',
      p: '',
      img: coach_train_woman,
      alt: 'action sports',
    },
    {
      h2: 'LOCKER ROOMS WITH SHOWERS',
      p: '',
      img: locker_room,
      alt: 'action sports',
    },
    {
      h2: 'FREE WI-FI',
      p: '',
      img: wifi,
      alt: 'action sports',
    },
    {
      h2: 'STRETCHING ZONE',
      p: '',
      img: strech_women,
      alt: 'action sports',
    },
    {
      h2: 'ISLAMIC ZONE',
      p: 'Ismalic zone for only women with hijab & niqab, with no men coaches',
      img: islamic_gym,
      alt: 'islamic gym',
    },
  ]

  return (
    <div className='flexCenter flex-col'>
      <div className='fHeader bg-sideColor'>
        <div className='w-full overflow-hidden relative h-30vh md:h-30vh'>
          <img src="https://images.pexels.com/photos/5383797/pexels-photo-5383797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className='bluredHmain lg:w-full lg:h-auto h-full w-full absolute -translate-x-1/2 translate-y-1/2' alt="gym picture" />
          <div className='Hpres2'>
            <h1>Service</h1>
          </div>
        </div>
      </div>

      <div className="aboutPar">
        <div className="par1">
          <div className='span2swd'><Icon icon={< BiDumbbell size='24' className=' uppercase text-xl mb-2 text-primary' />} text={''} /></div>
          <h2 className='text-left md:text-center'>What is our services?</h2>
          <p className='text-left md:text-center'>To keep the body in good health is a duty… otherwise we shall not be able to keep our mind strong and clear.
            <br />
            <br /> 
            Our Training Philosophy means room for everyone, regardless of shape, size, age, race, gender or fitness level. No matter your workout of choice, we want you to feel good while reaching your goals. Join the fun.</p>
        </div>
      </div>

      <div className="flexCenterM flex-wrap w-full p-4">
          {
            activityArr.map((ele, i) => (
              <ActivitiesCard key={i} img={ele.img} alt={ele.alt} h2={ele.h2} p={ele.p}/>
            ))
          }
      </div>


      <div className="Hparagraph flexCenter flex-col p-4 text-sideColor w-screen bg-purple-700 mt-8 ">
        <h1>Embrace our Training Philosophy</h1>
        <div className="max-w-7xl">
          <Philosophy/>
        </div>
      </div>
    </div>

  )
}
