import '../styles/globals.css'
import '../styles/memberships.css'
import '../styles/slider.css'



// components
import Header from '../components/Header'
import SideNav from '../components/SideNav';
import Footer from '../components/Footer';


function MyApp({ Component, pageProps }) {
  return (
    <div className='App overflow-x-hidden'>
      <Header />
      <SideNav />
      <div className='min-h-90vh px-4 max-w-7xl mx-auto mt-16 md:mt-0 '>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}

export default MyApp
