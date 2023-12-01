import Button from '../../Components/Buttton'
import newsletter from '../../assets/newsletter.jpg'
const Newsletter = () => {
  return (
    <div className="px-3 py-16 md:py-44 flex items-center justify-center">
      <div className='flex flex-wrap lg:flex-nowrap justify-center items-center'>
        <img src={newsletter} alt="news image" />
        <div className='w-full max-w-[640px] md:pl-10 pt-3 flex flex-col justify-center items-center'>
          <h4 className='text-4xl md:text-[40px] text-black font-[AeonikBold] text-center'>Subscribe to our Newsletter</h4>
          <p className='text-center md:w-3/4 text-base font-[AeonikLight] pt-3 pb-8'>Subscribe to our newsletter to get updated tips and resources to help in your agriculture journey.</p>
          <form action="" className='md:w-3/4 flex flex-col gap-3'>
            <input type="email" className='border-[0.5px] border-grey w-full text-xl px-6 py-4 rounded-md' placeholder='Email Address' />
          <button className='w-full bg-[#E49115] py-4 text-2xl rounded-md text-white'>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
