import { useEffect, useState } from "react";
import indus1 from "../../assets/resourceimg1.jpg";
import indus2 from '../../assets/resourceimg2.jpg'

const Reports = () => {
  const [scroll, setScroll] = useState(0)
  useEffect(()=>{
    let charlie = document.getElementById('charlie')
  let sMore = document.getElementById('sMore')
  const scrollFor = ()=>{
    charlie.scrollLeft += 150 
    setScroll(charlie.scrollLeft)
  }
  sMore.addEventListener('click',scrollFor)
  return ()=>{sMore.removeEventListener('click', scrollFor)}
  },[scroll])

  


  
  return (
    <div className=" pb-24 md:pb-32">
      <div className="flex gap-5 px-7 py-6 md:px-16 lg:px-[4vw] md:py-6 lg:py-14 mt-14">
        <select
          name="Category"
          id=""
          className="outline-none bg-[#F7F7F7] px-3 py-4 text-[#33383D] text-lg rounded-lg border-2 cursor-pointer"
        >
          Select Category
          <option value="">Select Category</option>
        </select>
        <select
          name="Category"
          id=""
          className="outline-none bg-[#F7F7F7] px-3 py-4 text-[#33383D] text-lg rounded-lg border-2 cursor-pointer"
        >
          <option value="">Keyword</option>
        </select>
      </div>
      <div>
        <div className="flex px-7 md:px-[4vw] justify-between items-center py-6 lg:py-14 mt-14">
          <h3 className="text-2xl md:text-3xl font-[AeonikBold]">
            Industry Reports
          </h3>
          <p className="text-[#33383D] text-base md:text-lg font-[AeonikReg] cursor-pointer" id="sMore">
            See more &gt;
          </p>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap items-start gap-12" id="">
          <div>
            <div className="relative w-full lg:w-[720px] text-white">
              <img src={indus1} alt="" />
              <div className="absolute bg-[#1A7408] rounded-md bottom-10 mx-4 px-4 py-2 md:mx-10 md:px-16 md:py-12">
                <h1 className="text-xl md:text-3xl pb-3 ">
                  ICAACS Nigeria 2023 New Update
                </h1>
                <p className="text-xs font-[AeonikLight]">
                  High quality research contributions describing original and
                  unpublished results of conceptual, constructive, empirical,
                  experimental, or theoretical...
                </p>
              </div>
            </div>
          </div>
          <div>
          <div className="w-full ">
            <img src={indus2} alt="" />
            <div>
              <h2 className="text-[#121415] font-[AeonikBold] text-xl md:text-3xl pt-10 pb-3">
              The Business of Agriculture
              </h2>
              <p className="text-xs font-[AeonikLight] w-3/4 text-[#33383D] ">
              To ensure sustainable farming, there must be an adequate supply of seeds. You can start a seed dealing business by doing proper...
                </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
