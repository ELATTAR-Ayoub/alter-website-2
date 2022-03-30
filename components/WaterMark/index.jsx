import Logo from "../Logo/Logo";

const WaterMark = ({ style, svg }) => {
    return (
        <div className={'bg-transparent relative uppercase font-bold flexCenter text-xl md:text-2xl text-secondary' + style} >
            {svg === 'w' ? <Logo svg={'w'} /> : <Logo />}
        </div >
    )
}

export default WaterMark;