import background from '../../assets/Eligible.svg'
import secondimg from '../../assets/Mask group.svg'
import Button from '../../Components/Buttton'

const Eligible = () => {
  return (
    <div className=" bg-no-repeat bg-cover text-white px-7 py-6 md:px-16 lg:px-28 md:py-6 lg:py-14 mt-14 flex flex-wrap lg:flex-nowrap items-center" style={{ backgroundImage: "url(" + background + ")" }}>
        <section className='mb-6'>
            <h3 className='text-3xl font-[AeonikMed]'>
                What Kind Of Loan Am I Eligible For?
            </h3>
            <p className=' text-lg font-[AeonikLight] w-3/4 leading-normal my-7'>
            Not sure what kind of loan fits your business needs presently? Book a free consultation from us.
            </p>
            <Button>Free Consultation</Button>
        </section>
        <section>
            <img src={secondimg} alt="Some loans given" />
        </section>
      
    </div>
  )
}

export default Eligible
