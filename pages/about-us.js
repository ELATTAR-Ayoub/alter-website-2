import Link from 'next/link'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { NextResponse, NextRequest } from 'next/server';

//components
import Icon from '../components/Icon';
import Philosophy from '../components/Philosophy'

//src
import { GiStairsGoal} from 'react-icons/gi';
import { FiBookOpen } from 'react-icons/fi';
import { MdFamilyRestroom } from 'react-icons/md';
import { BiDumbbell } from 'react-icons/bi';
import Himg from '../src/homeH.jpg'


export default function Aboutus() {

  return (
    <div className='flexCenter flex-col'>
      <div className='fHeader bg-sideColor'>
        <div className='w-full overflow-hidden relative h-30vh md:h-30vh'>
          <img src="https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className='bluredHmain lg:w-full lg:h-auto h-full w-full absolute -translate-x-1/2 translate-y-1/2' alt="gym picture" />
          <div className='Hpres2'>
            <h1>About us</h1>
          </div>
        </div>
      </div>

      <div className="aboutPar">
        <div className="par1">
          <div className='span2swd'><Icon icon={< BiDumbbell size='24' className=' uppercase text-xl mb-2 text-primary' />} text={''} /></div>
          <h2 className='text-left md:text-center'>We are Altiras</h2>
          <p className='text-left md:text-center'>Some may call it a tagline, but for us, it’s a way of life. It’s our Monday-thru-every-day mantra. An unfiltered philosophy that drives us to create a community and a gym for all.
            <br />
            <br /> 
            Our Training Philosophy means room for everyone, regardless of shape, size, age, race, gender or fitness level. No matter your workout of choice, we want you to feel good while reaching your goals. Join the fun.</p>
        </div>
      </div>

      <div className="aboutPar">
        <div className="Imgcontainer">
          <img src="https://t4.ftcdn.net/jpg/01/45/40/53/360_F_145405399_oKXdgplZ2ZgesRrz0IdQEqA9OH3neqKI.jpg" alt="" />
        </div>
        <div className="par1">
          <div className='span2swd'><Icon icon={< FiBookOpen size='24' className=' uppercase text-xl mb-2 text-primary' />} text={''} /></div>
          <h2 >Welcome to the Our Family</h2>
          <p >There are no judgments here – No too much or not enough. No glares of disapproval. Here we keep open minds. We are nurturers. We seek only to encourage, empower and entertain. There is no one type. There is no one reason. There is no one way. <br /><br /> What we are is a diverse community; what we have is a culture of fun; what there is, is room for everyone: all kinds of people with all kinds of goals who’ve chosen to come reach them with us.</p>
        </div>
      </div>

      <div className="aboutPar md:flex-row-reverse">
        <div className="Imgcontainer">
          <img src="https://c4.wallpaperflare.com/wallpaper/724/369/287/black-and-white-hall-rod-gym-wallpaper-thumb.jpg" alt="" />
        </div>
        <div className="par1">
        <div className='span2swd'><Icon icon={< MdFamilyRestroom size='24' className=' uppercase text-xl mb-2 text-primary' />} text={''} /></div>
          <h2 >Why We Do What We Do</h2>
          <p >There are no judgments here – No too much or not enough. No glares of disapproval. Here we keep open minds. We are nurturers. We seek only to encourage, empower and entertain. There is no one type. There is no one reason. There is no one way.
          <br />
          <br />
          What we are is a diverse community; what we have is a culture of fun; what there is, is room for everyone: all kinds of people with all kinds of goals who’ve chosen to come reach them with us.</p>
        </div>
      </div>

      <div className="aboutPar">
        <div className="Imgcontainer">
          <img src="https://ywcavan.org/sites/default/files/styles/hero_1x_1920/public/assets/blog/hero_image/bigstock-Man-and-woman-at-gym-in-fitnes-12843608-v5_0.jpg?itok=1SOFE5wt" alt="" />
        </div>
        <div className="par1">
          <div className='span2swd'><Icon icon={< GiStairsGoal size='24' className=' uppercase text-xl mb-2 text-primary' />} text={''} /></div>
          <h2 >Our Goals</h2>
          <p >There are no judgments here – No too much or not enough. No glares of disapproval. Here we keep open minds. We are nurturers. We seek only to encourage, empower and entertain. There is no one type. There is no one reason. There is no one way.
            <br />
            <br /> 
            What we are is a diverse community; what we have is a culture of fun; what there is, is room for everyone: all kinds of people with all kinds of goals who’ve chosen to come reach them with us.</p>
        </div>
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
