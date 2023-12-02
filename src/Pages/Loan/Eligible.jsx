import background from '../../assets/eligible.jpg'
import Button from '../../Components/Buttton'

const Eligible = () => {
  return (
    <div className=" bg-no-repeat bg-cover text-white px-7 py-6 md:px-16 lg:px-28 md:py-6 lg:py-[151px] mt-14" style={{ backgroundImage: "url(" + background + ")" }}>
        <section className='flex flex-col items-center text-center'>
            <h3 className='text-3xl font-[AeonikMed]'>
                What Kind Of Loan Am I Eligible For?
            </h3>
            <p className=' text-lg font-[AeonikLight] md:w-[40%] leading-normal my-7'>
            Not sure what kind of loan or resource fits your business needs presently? Book a free consultation from us.
            </p>
            <Button>Free Consultation</Button>
        </section>
      
    </div>
  )
}

export default Eligible
