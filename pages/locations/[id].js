import Link from 'next/link'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { NextResponse, NextRequest } from 'next/server';

// components
import Memberships from '../../components/Memberships'
import ActivitiesCard from '../../components/ActivitiesCard'
import Philosophy from '../../components/Philosophy'

//src
import strong_man_doing_deadlift from '../../src/strong-man-doing-deadlift-training.jpg'

// activities src
import physical_athlete from '../../src/physical-athlete.jpg'
import strech from '../../src/strech-gym.jpg'
import party_gym from '../../src/party-gym.jpg'
import gymnastic_man from '../../src/gymnastic-man.jpg'
import something_different from '../../src/something-different.jpg'
import islamic_gym from '../../src/islamic-gym.png'
import locker_room from '../../src/gym-change-chamber.png'
import wifi from '../../src/wifi-gym.jpg'
import strech_women from '../../src/woman-in-gym-leg&leg.png'
import friend_privilage from '../../src/bring-a-friend-gym.png'
import coach_train_woman from '../../src/gym-train-woman.png'
import group_fitnesse from '../../src/group-fitnesse-classes.png'
import running_machines from '../../src/running-stuffs-gym.png'
import running_man from '../../src/running-man-in-gym.png'
import heavy_weight from '../../src/heavy-wheight.jpeg'


export default function LocationsId({location}) {

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

  const data = {};

  const router = useRouter();
  const { id } = router.query;

  if (id.toLowerCase() == 'rabat') {
    data.location = 'rabat';
    data.adress = 'Angle Rue Raiss Mohammed Baina Et, Boulevard Akrach, Rabat';
    data.coordinates = 'rabat';
  } 
  else if (id.toLowerCase() == 'casablanca') {
    data.location = 'casablanca';
    data.adress = '32 Rue Al Oukhouane, Casablanca 20250';
    data.coordinates = 'rabat';
    activityArr = activityArr.splice(2,11);
  }
  else {
    return NextResponse.redirect('/')
  }


  return (
    <div className='flexCenter flex-col '>
      <div className='fHeader bg-sideColor'>
        <div className='imgContainer h-4/5'>
          <img src={strong_man_doing_deadlift.src} className='bluredHmain lg:w-full lg:h-auto h-full w-auto absolute  -translate-x-1/2 translate-y-1/2' alt="gym picture" />
          <div className='Hpres'>
            <h1>{data.location}</h1>
            <p >{data.adress}</p>
          </div>
        </div>

        <div className='w-full h-1/5  gradientPr p-4 pt-2 text-sideColor'>
        <div className='flexCenter text-center font-semibold flex-col uppercase p-3 mb-0 md:mb-5 text-xl'>
            <p>WE ARE OPEN, CLICK HERE FOR 3 DAYS FREE TRIAL</p>
        </div>
          <div className='orangeDiv'>
            <Link href='/free-trial'>
                <a>
                  FREE TRIAL
                </a>
            </Link>
          </div>
        </div>
      </div>

      <div className='p-4 pb-0 flex-col flexCenter max-w-7xl'>
        <div className='Hparagraph p-4'>
          <h1>Look for us in the map</h1>
          <p>you can copy our coordinates in past it in your GPS so you can drive to us with your car using your tablet, phone or even your watch.</p>
        </div>

        <div className="w-full max-w-7xl">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=ANGLE%20RUE%20RAISS%20MOHAMMED%20BAINA%20ET,%20BOULEVARD%20AKRACH,%20RABAT&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
              </iframe>
            </div>
            </div>
          </div>

        <div className='Hparagraph'>
          <h1>Flexible Membership Options</h1>
          <p>We know decision-making is hard, but don’t sweat it. Choose the membership that’s right for you and start perspiring to greatness.</p>
        </div>
        <Memberships/>

        <div className="flexCenterM flex-wrap w-full p-4">
          {
            activityArr.map((ele, i) => (
              <ActivitiesCard key={i} img={ele.img} alt={ele.alt} h2={ele.h2} p={ele.p}/>
            ))
          }
        </div>

        <div className="Hparagraph flexCenter flex-col p-4 pb-0 text-sideColor w-screen bg-purple-700 mt-8 ">
          <h1>Embrace our Training Philosophy</h1>
          <div className="max-w-7xl pb-0">
            <Philosophy/>
          </div>
        </div>
      </div>
      
    </div>

  )
}
