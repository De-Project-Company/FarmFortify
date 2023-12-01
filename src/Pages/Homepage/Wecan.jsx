import { help } from "../../DataCalls/help"
const Wecan = () => {
  const cardlist = help.map(x => <HelpCard key={x.cardTitle} cardDesc={x.cardDesc} cardImage={x.cardImage} cardTitle={x.cardTitle}/>)
  return (
    <section className="wecan py-6 md:pl-16 lg:px-[4vw] md:py-6 lg:py-28 ">
      <div className="flex justify-center mb-12">
        <h3 className="text-3xl font-[AeonikBold] text-[#33383D]">How Can We Help</h3>
      </div>
      <div className="">
      <div className=" flex overflow-x-auto lg:grid grid-cols-2 place-items-center gap-14">
      {cardlist}
      </div>
      </div>
    </section>
  )
}

export default Wecan

const HelpCard = ({cardImage, cardTitle, cardDesc})=>{
  return(<div className="">
  <div className="px-12 md:px-14 py-16 bg-white w-[550px] h-[290px] weCanCards z-30">
    <header className="flex items-center mb-4 gap-3">
      <img src={cardImage} alt={cardTitle}  className="w-9"/>
      <h4 className="text-[#E49115] text-2xl">
        {cardTitle}
      </h4>
    </header>
    <main className="pt-3">
    <p className="text-lg font-[AeonikReg]">
      {cardDesc}
    </p>
    </main>
  </div>
  </div>)
}