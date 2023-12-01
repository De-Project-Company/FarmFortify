import landingBg from '../../assets/HomeLangding.jpg'
import Button from '../../Components/Buttton'

const Landing = () => {
  return (
    <div className="w-full min-h-[calc(100vh-5rem)] bg-no-repeat bg-cover text-white px-7 py-5 md:px-16 lg:px-[4vw] md:py-6 lg:py-[125px] mt-14 hero landhero relative " style={{ backgroundImage: "url(" + landingBg + ")"}}>
      <div className='lg:w-[56%] opacity-90'>
      <h1 className='text-3xl md:text-5xl lg:text-5xl font-bold '>
      Empowering Nigerian Farmers to <span className='bg-[#e49115] bg-clip-text text-transparent'>transition</span> into Large-scale Agriculture <span className='bg-[#e49115] bg-clip-text text-transparent'>with ease</span>
      </h1>
      <p className='lg:w-[95%] mt-7 my-10 md:text-xl font-[AeonikReg]'>
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
