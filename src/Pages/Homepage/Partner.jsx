import aria from '../../assets/Arla Food Logo.svg'
import flutter from '../../assets/FlutterwaveLogo.svg'
import fcmb from '../../assets/fcmbLogo.svg'
import farmsby from '../../assets/FarmsbyLogo.svg'
import hervest from '../../assets/HerVestLogo.svg'
import sterling from '../../assets/SterlingLogo.svg'
import boa from '../../assets/boaImage.svg'

const Partner = () => {
  return (
    <div className="px-7 py-6 md:px-16 lg:px-28 md:py-6 lg:py-14">
      <div>
        <h1>Our Partners</h1>
        <div className='overflow-hidden relative h-28 w-[100%]'>
          <div className='flex items-center w-[200%] absolute overflow-hidden marquee h-32'>
          <span><img src={boa} alt="boa" className='w-20'/></span>
          <span><img src={aria} alt="aria foods" className='w-20'/></span>
          <span><img src={flutter} alt="flutter" className='w-20' /></span>
          <span><img src={farmsby} alt="farmsby" className='w-20' /></span>
          <span><img src={fcmb} alt="fcmb"
          className='w-20'/></span>
          <span><img src={sterling} alt="sterling" 
          className='w-20'/></span>
          <span><img src={hervest} alt="hervest" className='w-20' /></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partner
