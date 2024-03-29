import Link from 'next/link'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { NextResponse, NextRequest } from 'next/server';

//components
import Icon from '../../components/Icon';
import Philosophy from '../../components/Philosophy'

//src
import { GiStairsGoal} from 'react-icons/gi';
import { FiBookOpen } from 'react-icons/fi';
import { MdFamilyRestroom } from 'react-icons/md';
import { BiDumbbell } from 'react-icons/bi';
import Himg from '../../src/homeH.jpg'


export default function Join() {

  return (
    <div className='flexCenter flex-col'>
      <div className='fHeader bg-sideColor'>
        <div className='w-full overflow-hidden relative h-30vh md:h-30vh'>
          <img src="https://images.pexels.com/photos/949126/pexels-photo-949126.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className='bluredHmain lg:w-full lg:h-auto h-full w-full absolute -translate-x-1/2 translate-y-1/2' alt="gym picture" />
          <div className='Hpres2'>
            <h1>Join the family</h1>
          </div>
        </div>
      </div>

      <div className="aboutPar">
        <div className="par1">
          <div className='span2swd'><Icon icon={< BiDumbbell size='24' className=' uppercase text-xl mb-2 text-primary' />} text={''} /></div>
          <h2 className='text-left md:text-center'>Almost Done!</h2>
          <p className='text-left md:text-center'>Enter Your Personal Information to complete the registration.</p>
        </div>
      </div>

      <div className="joinS">
          <h1>Personal Info</h1>
          <div className="fieldInput">
            <div className="form">
            <label htmlFor="NAME">FIRST NAME</label>
            <input type="text" name="NAME" id="NAME" placeholder='Member first name' />
            </div>
            <div className="form">
            <label htmlFor="lName">LASt NAME</label>
            <input type="text" name="lName" id="lName" placeholder='Member last name'/>
            </div>
            <div className="form">
            <label htmlFor="EMAIl">EMAIl</label>
            <input type="text" name="EMAIl" id="EMAIl" placeholder='exmaple@gmail.com'/>
            </div>
            <div className="form">
            <label htmlFor="birthday">birthday</label>
            <input type="text" name="birthday" id="birthday" placeholder='dd/mm/yyyy'/>
            </div>
            <div className="form">
            <label htmlFor="GENDER">GENDER</label>
            <select name="GENDER" id="GENDER">
                <option value="male">male</option>
                <option value="female">female</option>
            </select>
            </div>
            <div className="form">
            <label htmlFor="club">club city</label>
            <select name="club" id="club">
                <option value="rabat">rabat</option>
                <option value="casablanca">casablanca</option>
                <option value="sale">sale</option>
            </select>
            </div>
            <div className="form">
            <label htmlFor="Membership">Membership Options</label>
            <select name="Membership" id="Membership">
                <option value="Base">Base $10.99</option>
                <option value="Peak">Peak $23.99</option>
                <option value="PeakR">Peak Results $29.99</option>
            </select>
            </div>
        </div>
      </div>

      <div className="joinS">
          <h1>Address</h1>
          <div className="fieldInput">
            <div className="form">
            <label htmlFor="Adreess1">Adreess line 1</label>
            <input type="text" name="Adreess1" id="Adreess1" placeholder='123 street name' />
            </div>
            <div className="form">
            <label htmlFor="Adreess2">Adreess line 1</label>
            <input type="text" name="Adreess2" id="Adreess2" placeholder='123 street name'/>
            </div>
            <div className="form">
            <label htmlFor="City">City</label>
            <input type="text" name="City" id="City" placeholder='city name'/>
            </div>
            <div className="form">
            <label htmlFor="pCode">postal code</label>
            <input type="number" name="pCode" id="pCode" placeholder='12345'/>
            </div>
            <div className="form">
            <label htmlFor="Country">Country</label>
            <input type="text" name="Country" id="Country" placeholder='Country name'/>
            </div>
            <div className="form">
            <label htmlFor="phone">phone number</label>
            <input type="tel" name="phone" id="phone" placeholder='+212 653215646'/>
            </div>
        </div>
      </div>

      <div className="joinS">
          <h1>Emergency Contact</h1>
          <div className="fieldInput">
            <div className="form">
                <label htmlFor="ENAME">FIRST NAME</label>
                <input type="text" name="ENAME" id="ENAME" placeholder='Member first name' />
            </div>
            <div className="form">
                <label htmlFor="ElName">LASt NAME</label>
                <input type="text" name="ElName" id="ElName" placeholder='Member last name'/>
            </div>
                <div className="form">
                <label htmlFor="EEMAIl">EMAIl</label>
                <input type="text" name="EEMAIl" id="EEMAIl" placeholder='exmaple@gmail.com'/>
            </div>
            <div className="form">
            <label htmlFor="phone">phone number</label>
            <input type="tel" name="phone" id="phone" placeholder='+212 653215646'/>
            </div>
        </div>
      </div>

      <p>To complete your membership, we require two forms of authorized payment: a credit card for the payment due today, and a bank account (Checking or Savings) for your recurring and annual dues.</p>

      <div className="joinS">
          <h1>Due Today — Payment Info</h1>
          <div className="fieldInput">
            <div className="form">
                <label htmlFor="CCard">CREDIT CARD NUMBER</label>
                <input type="text" name="CCard" id="CCard" placeholder='CREDIT CARD NUMBER' />
            </div>
            <div className="multi-col">
                <div className="form">
                    <label htmlFor="EXPIRATION">EXPIRATION</label>
                    <input type="text" name="EXPIRATION" id="EXPIRATION" placeholder='CREDIT CARD NUMBER' />
                </div>
                <div className="form">
                    <label htmlFor="CSC">CSC</label>
                    <input type="text" name="CSC" id="CSC" placeholder='CSC CREDIT CARD' />
                </div>
            </div>
            <div className="form">
                <label htmlFor="NCard">NAME ON CARD</label>
                <input type="text" name="NCard" id="NCard" placeholder='NAME ON CREDIT CARD' />
            </div>
        </div>
      </div>

      <p>We Will Charge This Card Today & Use Your Bank Account for Recurring Payments.</p>

      <p>We will also keep this credit card on file as a backup to your account. We will use it if we are unable to process your monthly recurring dues or annual dues to your bank account on file.</p>

        <div className="confirmBuy">
            <h2>Confirm Your Purchase Details</h2>
            <div className="card">
                <h3>LOCATION</h3>
                <div className="sec">
                    <div className="">
                        <p>Rabat</p>
                    </div>
                    <div className="change">
                        <p>change</p>
                    </div>
                </div>
            </div>
            <div className="card">
                <h3>MEMBERSHIP</h3>
                <div className="sec">
                    <div className="">
                    <p>$22.99 <span>Peak</span> </p>
                    </div>
                    <div className="change">
                        <p>change</p>
                    </div>
                </div>
            </div>
            <div className="card">
                <h3>PAYMENT TYPE</h3>
                <div className="sec">
                    <div className="">
                    <p>Monthly w/ Annual Commitment</p>
                    </div>
                    <div className="change">
                        <p>change</p>
                    </div>
                </div>
            </div>
            <div className="card">
                <h3>ANNUAL FEE (NOT DUE TODAY*)</h3>
                <div className="sec">
                    <div className="">
                        <p>$59.99</p>
                    </div>
                    <div className="change">
                        <p>change</p>
                    </div>
                </div>
            </div>
        </div>
    
    <div className="joinS"> 
    <div className="fieldInput">
        <div className="formbtns">
            <button>COMPLETE PURCHASE & JOIN US</button>
        </div>
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
