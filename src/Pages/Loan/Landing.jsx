import loanLanding from '../../assets/loanLanding.jpg'
import Button from '../../Components/Buttton'
const Landing = () => {
  return (
    <div className="w-full min-h-[calc(100vh-5rem)] bg-no-repeat bg-cover text-white px-7 py-5 md:px-16 lg:px-[4vw] md:py-6 lg:py-[125px] mt-14 hero landhero relative " style={{ backgroundImage: "url(" + loanLanding + ")"}}>
        <div className='lg:w-[56%] opacity-90'>
        <h1 className='text-[48px] md:text-5xl lg:text-5xl font-bold '>
      Fortify and fund your Agribusiness Growth
      </h1>
      <p className='lg:w-[95%] mt-7 my-10 md:text-lg font-[AeonikLight]'>
      While you apply for loans, we facilitate your loan processing, leveraging on our partnership with accredited financing channels.
      </p>

      <div>
        <Button>Apply for a Loan</Button>
      </div>
      </div>
    </div>
  )
}

export default Landing
