import rightArr from "../../assets/rightArrow.png";
import leftArr from "../../assets/leftArrow.png";
import { Mktrends } from "../../DataCalls/MarketTrends";
import { useEffect } from "react";

const MarketTrends = () => {
  useEffect(()=>{
    let mkt = document.getElementById('mkt')
    const stocksInterval = ()=>{
      if(mkt.scrollLeft >=  (mkt.scrollWidth - mkt.clientWidth)){
        mkt.scrollLeft = 0
      }else{
        mkt.scrollLeft +=50
      }
    }
    setInterval( stocksInterval,3500)
    return ()=> clearInterval(stocksInterval, 3500)
  })

  return (
    <div className="">
      <header className="flex justify-between pb-[45px] px-7 md:px-[4vw] py-52">
        <h5 className="text-3xl font-[AeonikBold] ">Latest Market Trends</h5>
        <div className="flex items-center">
          <img src={leftArr} alt="left Arrow" />
          <img src={rightArr} alt="Right Arrow" />
        </div>
      </header>
      <main className="flex gap-4 overflow-x-auto flex-nowrap scroll-smooth mkt" id="mkt">
        {Mktrends.map((x, index) => (
          <div key={index}>
            <div className="w-[307px] border-[0.5px solid #626262]">
              <div className="h-[220px]">
              <img src={x.img} alt={x.productName} className="h-[220px] w-[307px]" />
              </div>
              <div className="px-4 py-6 flex gap-2 flex-col items-center justify-center border-2 h-[183px]">
                <button className="text-white px-3 py-2 rounded-md bg-grey text-xl font-[AeonikMed]">
                  {x.productName}
                </button>
                <p className="text-black text-xl font-[AeonikBold]">{x.productprice}</p>
                <p className="text-black text-sm font-[AeonikLight] pt-3">{x.priceIncrease}</p>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default MarketTrends;
