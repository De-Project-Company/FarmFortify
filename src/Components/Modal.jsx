import { useEffect, useState } from "react"

const Modal = ({modalAppearance, handleModalAppearance}) => {

    useEffect(()=>{
        if(modalAppearance){
            document.body.style.overflow = "hidden"
        }
        
    },[modalAppearance])

    function la (e){
        e.stopPropagation();
    }
  return (<>
    {modalAppearance && (<div className="absolute top-0 z-50 bg-[rgba(0,0,0,0.5)] h-screen w-full flex justify-center items-center" onClick={handleModalAppearance}>
      <div className="h-20 w-20 bg-white" onClick={la} >

      </div>
    </div>)}
  
  </>
    
  )
}

export default Modal
