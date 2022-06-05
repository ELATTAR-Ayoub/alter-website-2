import Link from 'next/link'

// components
import WaterMark from '../WaterMark'
import Icon from '../Icon'

// icons
// 
import { FiMenu } from 'react-icons/fi';

const Header = ({ }) => {
    return (
        <div onScroll={changeHeader} id='header' className='flexCenter z-30 fixed top-0 right-0 w-screen px-8 py-3 pt-5 text-sm bg-secondary md:bg-secondary '>
            <div className='flexCenter justify-between w-screen max-w-7xl mx-auto'>
                <header className='flexCenter justify-between'>
                    <Link href='/'>
                        <a>
                            <WaterMark svg={'w'} />
                        </a>
                    </Link>
                </header>

                <nav id='nav' className="bg-transparent w-auto md:w-4/6">
                    <div className="flexCenter justify-around m-3 text-sideColor hidden md:flex uppercase">
                        <Link href="/">
                            <a className="nav-Link">
                                Home
                            </a>
                        </Link>
                        <Link href="/locations">
                            <a className="nav-Link">
                                locations
                            </a>
                        </Link>
                        <Link href="/about-us">
                            <a className="nav-Link">
                                about us
                            </a>
                        </Link>
                        <Link  href='/service'>
                            <a className="nav-Link">
                                service
                            </a>
                        </Link>
                        <Link href='/contact-us'>
                            <a className="nav-Link">
                                contact us
                            </a>
                        </Link>
                    </div>
                </nav>

                <div className='HbtnLinks hidden lg:flex '>
                    <Link href='/free-trial'>
                        <a>
                            free trial
                        </a>
                    </Link>
                    <Link href='/join'>
                        <a>
                            join
                        </a>
                    </Link>
                </div>
                <div onClick={dropNav} className=' flex cursor-pointer md:hidden  '>
                        <Icon icon={< FiMenu size='32' className='text-sideColor' />} text={''} />
                </div>
            </div>
        </div>
    )
}

const dropNav = () => {
    const nav = document.getElementById('sideNav');
    nav.style.width = '100%';
}

const changeHeader = () => {
    const header = document.getElementById('header');
    header.addEventListener('scroll', function(event) {
        if (header.scrollHeight - header.scrollTop === header.clientHeight)
        {
            console.log('scrolled');
        }
    })
}


export default Header;