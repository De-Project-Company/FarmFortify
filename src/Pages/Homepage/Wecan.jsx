import { help } from "../../DataCalls/help"
const Wecan = () => {
  const cardlist = help.map(x => <HelpCard key={x.cardTitle} cardDesc={x.cardDesc} cardImage={x.cardImage} cardTitle={x.cardTitle}/>)
  return (
    <section className="wecan pl-7 py-6 md:pl-16 lg:px-28 md:py-6 lg:py-14 ">
      <div className="flex justify-center mb-12">
        <h3 className="text-3xl font-[AeonikBold] text-[#33383D]">How Can We Help</h3>
      </div>
      <div className="flex overflow-x-auto lg:flex-wrap gap-14">
      {cardlist}
      </div>
    </section>
  )
}

export default Wecan

const HelpCard = ({cardImage, cardTitle, cardDesc})=>{
  return(<div className="">
  <div className="px-6 py-10 bg-white w-[490px] h-[250px] weCanCards z-30">
    <header className="flex items-center mb-4 gap-3">
      <img src={cardImage} alt={cardTitle} />
      <h4 className="text-[#E49115] text-2xl">
        {cardTitle}
      </h4>
    </header>
    <main>
    <p className="text-lg font-[AeonikReg]">
      {cardDesc}
    </p>
    </main>
  </div>
  </div>)
}