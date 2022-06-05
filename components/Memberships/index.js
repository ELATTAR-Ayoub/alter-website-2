import Link from 'next/link'
// 
const Memberships = () => {
    return (
        <div className="flexCenter items-start w-screen flex-wrap p-4">
          <div className="memberships ">
            <div className="container">
              <span>Peak Results</span>
              <h2>$29.99</h2>
              <p>Monthly Recurring Payment</p>
              <hr/>
              <p>acces to all clubs</p>

              <Link href='/join/peak-results'>
                <a className='btn-Primary hover:bg-primary hover:text-sideColor'>
                  SELECT
                </a>
              </Link>
            </div>
            <div className="container2 peak-r">
              <h2>includes</h2>
              <p>Cardio, Weights & Machines</p>
              <p>Locker Rooms with Showers</p>
              <p>Free Wi-Fi</p>
              <p>CrunchONE Kickoff</p>
              <p>Power Half Hour Circuit Training</p>
              <p>Group Fitness Classes</p>
              <p>Crunch Live Online Workouts</p>
              <p>Free T-shirt</p>
              <p>Ride Classes</p>
              <p>HydroMassage®</p>
              <p>Tanning</p>
              <p>Guest Privileges</p>
              <p>Advanced HIIT Classes</p>
            </div>
            
          </div>
          
          <div className="memberships ">
            <div className="container">
              <span>Peak</span>
              <h2>$23.99</h2>
              <p>Monthly Recurring Payment</p>
              <hr/>
              <p>acces to all clubs</p>

              <Link href='/join/peak'>
                <a className='btn-Primary hover:bg-primary hover:text-sideColor'>
                  SELECT
                </a>
              </Link>
            </div>
            <div className="container2 peak">
              <h2>includes</h2>
              <p>Cardio, Weights & Machines</p>
              <p>Locker Rooms with Showers</p>
              <p>Free Wi-Fi</p>
              <p>CrunchONE Kickoff</p>
              <p>Power Half Hour Circuit Training</p>
              <p>Group Fitness Classes</p>
              <p>Crunch Live Online Workouts</p>
              <p>Free T-shirt</p>
              <p>Ride Classes</p>
            </div>
            
          </div>

          <div className="memberships ">
            <div className="container">
              <span>Base</span>
              <h2>$9.99</h2>
              <p>Monthly Recurring Payment</p>
              <hr/>
              <p>acces to all clubs</p>

              <Link href='/join/base'>
                <a className='btn-Primary hover:bg-primary hover:text-sideColor'>
                  SELECT
                </a>
              </Link>
            </div>
            <div className="container2 base">
              <h2>includes</h2>
              <p>Cardio, Weights & Machines</p>
              <p>Locker Rooms with Showers</p>
              <p>Free Wi-Fi</p>
              <p>CrunchONE Kickoff</p>
              <p>Power Half Hour Circuit Training</p>
            </div>
          </div>
        </div>
    )
}

export default Memberships;