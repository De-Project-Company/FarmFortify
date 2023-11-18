import { useEffect } from "react"
import PropTypes from 'prop-types'

const Modal = ({modalAppearance, handleModalAppearance, children}) => {

    useEffect(()=>{
        if(modalAppearance){
            document.body.style.overflow = "hidden"
        }

        if(!modalAppearance){
          document.body.style.overflow = "visible"
      }
        
    },[modalAppearance])

    function stopPropagation (e){
        e.stopPropagation();
    }
  return (<>
    {modalAppearance && (<div className="absolute top-0 z-50 bg-[rgba(0,0,0,0.5)] h-screen w-full flex justify-center items-center" onClick={handleModalAppearance}>
      <div className="w-3/4 max-w-[450px] bg-white rounded-md" onClick={stopPropagation} >
        {children}
      </div>
    </div>)}
  
  </>
    
  )
}

export default Modal

Modal.propTypes = {
  modalAppearance:  PropTypes.bool,
  handleModalAppearance : PropTypes.func,
  children : PropTypes.element

}
