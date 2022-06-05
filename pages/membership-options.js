import Link from 'next/link'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { NextResponse, NextRequest } from 'next/server';

// components
import Memberships from '../components/Memberships'
import ActivitiesCard from '../components/ActivitiesCard'
import Philosophy from '../components/Philosophy'

//src
import strong_man_doing_deadlift from '../src/strong-man-doing-deadlift-training.jpg'

export default function Locations() {

  return (
    <div className='flexCenter flex-col pt-20'>
      <div className='flexCenter justify-start mt-4 flex-col w-screen text-sideColor text-center'>
          <div className='Hparagraph'>
            <h1>Flexible Membership Options</h1>
            <p>We know decision-making is hard, but don’t sweat it. Choose the membership that’s right for you and start perspiring to greatness.</p>
          </div>
          <Memberships/>

          <div className="Hparagraph flexCenter flex-col p-4 text-sideColor w-screen bg-purple-700 mt-8 ">
            <h1>Embrace our Training Philosophy</h1>
            <div className="max-w-7xl">
              <Philosophy/>
            </div>
          </div>
      </div>
    </div>

  )
}
