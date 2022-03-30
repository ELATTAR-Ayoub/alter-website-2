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
          <img src="https://images.pexels.com/photos/949126/pexels-photo-949126.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className='bluredHmain lg:w-full lg:h-auto h-full w-full absolute -translate-x-1/2 translate-y-1/2' alt="gym picture" />
          <div className='Hpres2'>
            <h1>Contact us</h1>
          </div>
        </div>
      </div>

      <div className="aboutPar">
        <div className="par1">
          <div className='span2swd'><Icon icon={< BiDumbbell size='24' className=' uppercase text-xl mb-2 text-primary' />} text={''} /></div>
          <h2 className='text-left md:text-center'>You Ask. We Answer.Let Us Do Some Heavy Lifting!</h2>
          <p className='text-left md:text-center'>Do you have a question or comment for us?</p>
        </div>
      </div>

      <div className="fieldInput">
        <div className="form">
          <label htmlFor="email">email</label>
          <input type="text" name="email" id="email" placeholder='exmaple@gmail.com' />
        </div>
        <div className="form">
          <label htmlFor="email">message</label>
          <textarea type="text" name="email" id="email" placeholder='WHAT IS IN YOUR MIND?' cols="30" rows="10"></textarea>
        </div>
        <div className="formbtns">
          <button>Send Message</button>
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
