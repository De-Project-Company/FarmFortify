import { GreenButton } from "../../Components/Buttton"
import img1 from "../../assets/Resourcesimg1.svg"
import img2 from "../../assets/Resourcesimg2.svg"

const Resources = () => {
  return (
    <div className="px-7 py-6 md:px-16 lg:pl-28 md:py-6 lg:py-14 bg-[#D3F5C6]">
        <h3 className="text-center text-3xl font-[AeonikBold] text-[#33383D] mb-12">Resources For You</h3>
        <div className="flex gap-3 flex-wrap items-center">
            <div className="flex flex-wrap items-center">
            <img src={img1} className="w-[100%] max-w-[350px]"   alt=""/>
                <div className="px-8 py-12 bg-white w-full max-w-[350px] h-[360px]">
                    <h3 className="text-3xl font-[AeonikReg] mb-4">
                    ICAACS Nigeria 2023 New Update
                    </h3>
                    <GreenButton>
                        Industry Report
                    </GreenButton>
                    <p className="my-4 text-[#33383D]">15th October, 2023</p>
                    <p className="text-[#121415]">
                    We are ready to give tailor-made training for Nigerian farmers. This could only be done through local governments which are responsible...
                    </p>

                </div>
            </div>
            <div className=" h-[360px] bg-white w-full max-w-[350px]">
                    <img src={img2} alt="" />
                    <div className="px-3 py-2">
                    <p className="text-[#121415]">
                    We are ready to give tailor-made training for Nigerian farmers.
                    </p>
                    <div className="flex items-center gap-3 my-3">
                    <GreenButton>
                    Article
                    </GreenButton>
                    <p className="text-[#33383D]">15th October, 2023</p>
                    </div>
                    <p className="text-[#33383D]">by Victoria Ogeih</p>
                    
                    </div>

                </div>
                <div className=" h-[360px] bg-white w-full max-w-[350px]">
                    <img src={img2} alt=""  />
                    <div className="px-3 py-2">
                    <p className="text-[#121415]">
                    We are ready to give tailor-made training for Nigerian farmers.
                    </p>
                    <div className="flex items-center gap-3 my-3">
                    <GreenButton>
                    Article
                    </GreenButton>
                    <p className="text-[#33383D]">15th October, 2023</p>
                    </div>
                    <p className="text-[#33383D]">by Victoria Ogeih</p>
                    
                    </div>

                </div>
                <div className=" h-[368px] bg-white w-full max-w-[350px]">
                    <img src={img2} alt=""  />
                    <div className="px-3 py-2">
                    <p className="text-[#121415]">
                    We are ready to give tailor-made training for Nigerian farmers.
                    </p>
                    <div className="flex items-center gap-3 my-3">
                    <GreenButton>
                    Article
                    </GreenButton>
                    <p className="text-[#33383D]">15th October, 2023</p>
                    </div>
                    <p className="text-[#33383D]">by Victoria Ogeih</p>
                    
                    </div>

                </div>

        </div>
    </div>
  )
}

export default Resources
