import { useEffect, useState } from "react"
import Button from "../../Components/Buttton"

const Reviews = () => {

    const [time, setTime] = useState()

    const [countdown, setCountDown] = useState({
        days: '',
        hours: '',
        minutes: '',
        seconds: ''
    })

    useEffect(()=>{
        setTimeout(()=>{setCountDown})
    },[countdown])


  return (
    <div className="py-20">
      <div className="bg-[#D3F5C6] px-14 flex justify-around py-6 items-center">
        <div>
            <button className="border border-slate-400 px-2 font-[AeonikReg]">Coming next</button>
            <h3 className="text-[#1A7408] text-4xl mt-2">November Farmer&apos;s Market</h3>
            <p className="my-2">Happening Live In Ibadan!</p>
            <Button>Book A Stand</Button>
        </div>

        <div className="flex items-center timer ">
            <div className="flex flex-col items-center bg-[#1A7408] text-white px-6 py-3 rounded-md time">
                <h4 className="text-2xl">15</h4>
                <p>Days</p>
            </div>
            <p className="text-5xl text-[#1A7408]">:</p>
            <div className="flex flex-col items-center bg-[#1A7408] text-white px-6 py-3 rounded-md time">
                <h4 className="text-2xl">20</h4>
                <p>Hours</p>
            </div>
            <p className="text-[#1A7408] text-5xl">:</p>
            <div className="flex flex-col items-center bg-[#1A7408] text-white px-6 py-3 rounded-md time">
                <h4 className="text-2xl">05</h4>
                <p>Minutes</p>
            </div>
            <p className="text-[#1A7408] text-5xl">:</p>
            <div className="flex flex-col items-center bg-[#1A7408] text-white px-6 py-3 rounded-md time">
                <h4 className="text-2xl">34</h4>
                <p>Seconds</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
