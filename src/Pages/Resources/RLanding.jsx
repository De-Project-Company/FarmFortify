import RlandingImage from '../../assets/ResourceLandingImg.jpg'

const RLanding = () => {
  return (
    <div className="w-full min-h-[calc(100vh-5rem)] bg-cover text-white px-7 py-6 md:px-16 lg:px-28 md:py-6 lg:py-14 mt-14 hero relative flex flex-col justify-center text-center items-center" style={{ backgroundImage: "url(" + RlandingImage + ")" }}>
      <div className='flex flex-col text-center opacity-90 w-[85%] max-w-[450px] gap-6'>
      <h1 className='text-4xl font-[AeonikBold]'>Our Resources</h1>
      <p className='text-lg font-[AeonikLight]'>Access specially curated resources, result-driven best practices, market trends and industry news to help you make informed decisions throughout your journey</p>
      </div>
    </div>
  )
}

export default RLanding
