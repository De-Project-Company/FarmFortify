import PropTypes from 'prop-types'
import arrowDown from '../../assets/arrowDown.jpg'
import { useState } from 'react'
const FAQ = () => {
  return (
    <div className="py-[72px] bg-comGreen">
      <header>
        <h3 className="text-3xl text-black font-[AeonikBold] text-center pb-11">Frequently Asked Questions</h3>
      </header>
      <div className='flex flex-col items-center gap-4 px-3'>

      <Accordion question="What is FarmFortify about?"/>
      <Accordion question="Who are FarmFortify’s stakeholders?"/>
      <Accordion question="Does FarmFortify give out loans to smallholder farmers?"/>
      <Accordion question="How does FarmFortify aim to solve agricultural problems"/>
      <Accordion question="Who are your partners?"/>
      <Accordion question="Are Fish farmers eligible for the loans?"/>

      </div>
    </div>
  )
}

export default FAQ

export const Accordion = ({question, answer})=>{
  const [revealAns, setRevealAns] = useState(false)

  return(<div className='w-full max-w-[750px] bg-comGreen'>
  <button className='flex items-center justify-between w-full px-[10px] py-5 rounded-md md:text-xl text-base text-black border-[0.5px] border-grey'>
    {question}
    <span>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M11.9573 15.9299L3.9923 7.57045C3.85933 7.43096 3.78516 7.24565 3.78516 7.05295C3.78516 6.86024 3.85933 6.67493 3.9923 6.53545L4.0013 6.52645C4.06576 6.45859 4.14335 6.40456 4.22935 6.36764C4.31535 6.33072 4.40796 6.31168 4.50155 6.31168C4.59514 6.31168 4.68775 6.33072 4.77375 6.36764C4.85975 6.40456 4.93734 6.45859 5.0018 6.52645L12.5018 14.3984L19.9988 6.52645C20.0633 6.45859 20.1408 6.40456 20.2268 6.36764C20.3128 6.33072 20.4055 6.31168 20.499 6.31168C20.5926 6.31168 20.6852 6.33072 20.7712 6.36764C20.8572 6.40456 20.9348 6.45859 20.9993 6.52645L21.0083 6.53545C21.1413 6.67493 21.2154 6.86024 21.2154 7.05295C21.2154 7.24565 21.1413 7.43096 21.0083 7.57045L13.0433 15.9299C12.9733 16.0035 12.889 16.062 12.7957 16.102C12.7023 16.142 12.6018 16.1626 12.5003 16.1626C12.3988 16.1626 12.2983 16.142 12.2049 16.102C12.1116 16.062 12.0273 16.0035 11.9573 15.9299Z" fill="#33383D"/>
</svg>
    </span>
  </button>
  {revealAns ? (<div>{answer}</div>): null}
  </div>)
}

Accordion.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string
}


