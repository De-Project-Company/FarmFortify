import landingBg from '../../assets/LandingImage.svg'
import Button from '../../Components/Buttton'

const Landing = () => {
  return (
    <div className="w-full h-[100%] bg-no-repeat lg:bg-cover text-white px-7 py-6 md:px-16 lg:px-28 md:py-6 lg:py-14 mt-14 hero relative" style={{ backgroundImage: "url(" + landingBg + ")" }}>
      <div className='lg:w-2/3 opacity-90'>
      <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold '>
      Empowering Nigerian Farmers to <span className='bg-[#e49115] bg-clip-text text-transparent'>transition</span> into Large-scale Agriculture <span className='bg-[#e49115] bg-clip-text text-transparent'>with ease</span>
      </h1>
      
      <p className='my-11 md:text-2xl'>
      We provide smallholder farmers first hand access to finance, useful resources to help them scale up, and ensuring agricultural development and sustainability in Nigeria.
      </p>

      <div>
        <Button>Apply for a Loan</Button>
      </div>
      </div>
    </div>
  )
}

export default Landing
