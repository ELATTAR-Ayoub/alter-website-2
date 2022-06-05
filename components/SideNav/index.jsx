import Link from 'next/link'

// icon
import { AiOutlineClose } from 'react-icons/ai';

// component
import Icon from '../Icon';
import WaterMark from '../WaterMark'

// functions

const SideNav = () => {
    return (
        <div id='sideNav' className="sideNav">
            <div className="flexCenter w-full justify-between transition-all px-8 py-5 text-base">
                {/* nav close btn */}
                <Link href='/'>
                    <a onClick={hideNav}>
                        <WaterMark svg={'w'} />
                    </a>
                </Link>
                <div onClick={hideNav} className=" cursor-pointer" >
                    <Icon icon={< AiOutlineClose size='32' className='' />} text={''} />
                </div>
            </div>
            {/* nav header */}
            <div className="sideNav-Links uppercase">
                <Link href="/">
                    <a onClick={hideNav}  >
                        Home
                    </a>
                </Link>
                <Link href="/locations">
                    <a onClick={hideNav}  >
                        Locations
                    </a>
                </Link>
                <Link href="/about-us">
                    <a onClick={hideNav}  >
                        About us
                    </a>
                </Link>
                <Link  href='/service'>
                    <a onClick={hideNav}  >
                        service
                    </a>
                </Link>
                <Link href='/contact-us'>
                    <a target="_blank" onClick={hideNav}  >
                        contact us
                    </a>
                </Link>
                <Link title='elattarayoub000@gmail.com' href='mailto:elattarayoub000@gmail.com'>
                    <a target="_blank" onClick={hideNav}  >
                        dev team
                    </a>
                </Link>
            </div>
        </div>
    )
}

const hideNav = () => {
    const nav = document.getElementById('sideNav');
    nav.style.width = '0%';
}


export default SideNav;