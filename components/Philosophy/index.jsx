// src 
import positivity from '../../src/illustration-gym-1.png'
import inclusivity from '../../src/illustration-gym-2.png'
import fun from '../../src/illustration-gym-3.png'

const Philosophy = ({}) => {
    return (
        <div className="philosophy md:p-0 px-16 mb-4">
            <div className="container">
              <img src={positivity.src} alt="positivity" />
              <h2>POSITIVITY</h2>
              <p>We are nurturers: we seek only to encourage, entertain, and empower.</p>
            </div>
            <div className="container">
              <img src={inclusivity.src} alt="inclusivity" />
              <h2>INCLUSIVITY</h2>
              <p>Here we keep open minds. There is no one type or way in our diverse community. Come as you are!</p>
            </div>
            <div className="container">
              <img src={fun.src} alt="fun" />
              <h2>FUN</h2>
              <p>We know serious fitness is hard, but that doesn’t mean it can’t be an edge of your seat, can’t get enough, look forward to your workouts party.</p>
            </div>
          </div>
    )
}

export default Philosophy;