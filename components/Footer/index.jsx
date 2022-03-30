// components
import WaterMark from '../WaterMark'

// icons
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube} from 'react-icons/bs';


// others
import Link from 'next/link'
import Icon from '../Icon';

const Footer = () => {
    return (
        <div className='w-screen z-10 relative flexCenter flex-col bg-secondary text-sideColor capitalize '>
            <div className='flexCenter justify-between w-screen max-w-7xl m-4 mt-3 mb-0 p-4 flex-col items-start md:flex-row'>
                <div className="">
                    <WaterMark svg={'w'} />
                </div>
                <div className='mt-3 font-semibold md:my-0'>
                    created with &lt;3 by <span className='text-sideColor hover:text-primary transition-all'>
                        <Link href='https://github.com/ELATTAR-Ayoub'>
                            <a target='_'>
                                ELATTAR Ayoub
                            </a>
                        </Link>
                    </span>

                </div>
            </div>
            <div className='flexCenter md:justify-between justify-start w-screen max-w-7xl p-4 text-sideColor mt-0 m-4 mb-6 items-start flex-col-reverse md:flex-row'>
                <div>
                    <div className="flexCenter flex-row mb-2 -ml-2">
                        <Icon icon={< BsFacebook size='24' className='m-2 ml-0 hover:text-primary cursor-pointer transition-all' />} text={''} />
                        <Icon icon={< BsInstagram size='24' className='m-2 hover:text-primary cursor-pointer transition-all' />} text={''} />
                        <Icon icon={< BsTwitter size='24' className='m-2 hover:text-primary cursor-pointer transition-all' />} text={''} />
                        <Icon icon={< BsYoutube size='24' className='m-2 hover:text-primary cursor-pointer transition-all' />} text={''} />
                    </div>
                    <p className='font-semibold'>&#169; Altiral.</p>
                    <p className="text-sideColor text-opacity-50">ALL RIGHTS RESERVED</p>
                </div>
                <div className='footer-links flexCenter justify-start md:justify-end flex-wrap w-1/3 mb-4'>
                    <Link href='/my-assets'>
                        <a >
                            My Digital Assets
                        </a>
                    </Link>
                    <span>-</span>
                    <Link href='/create-asset'>
                        <a >
                            Sell Digital Asset
                        </a>
                    </Link>
                    <span>-</span>
                    <Link href='/dashboard'>
                        <a >
                            Creator Dashboard
                        </a>
                    </Link>
                    <span>-</span>
                    <Link href='/contact-us'>
                        <a >
                            Contact us
                        </a>
                    </Link>
                    <span>-</span>
                    <Link title='elattarayoub000@gmail.com' href='mailto:elattarayoub000@gmail.com'>
                        <a target='_' >
                            Dev Team
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;