import { useEffect, useState } from "react";
import Button from "../../Components/Buttton";
import PropTypes from 'prop-types';
import { Comments } from "../../DataCalls/Comments";


const Reviews = () => {
  let comment = Comments.map(farmers => <Commendables key={farmers.name}
   name={farmers.name} occupation={farmers.occupation} image={farmers.image} comment={farmers.comments}/>)


  const [time, setTime] = useState();

  const [countdown, setCountDown] = useState({
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setCountDown;
    });
  }, [countdown]);

  return (
    <div className="py-20">
      <div className="bg-[#D3F5C6] px-14 flex justify-around py-20 items-center">
        <div>
          <button className="border border-slate-400 px-2 font-[AeonikReg]">
            Coming next
          </button>
          <h3 className="text-[#1A7408] text-4xl mt-2 font-bold">
            November Farmer&apos;s Market
          </h3>
          <p className="my-4 text-xl font-[AeonikReg]">
            Happening Live In Ibadan!
          </p>
          <Button>Book A Stand</Button>
        </div>

        <div className="flex items-center timer ">
          <div className="flex flex-col items-center bg-[#1A7408] text-white px-6 py-3 rounded-md time">
            <h4 className="text-4xl font-bold">15</h4>
            <p className="text-lg">Days</p>
          </div>
          <p className="text-5xl text-[#1A7408]">:</p>
          <div className="flex flex-col items-center bg-[#1A7408] text-white px-6 py-3 rounded-md time">
            <h4 className="text-4xl font-bold">20</h4>
            <p className="text-lg">Hours</p>
          </div>
          <p className="text-[#1A7408] text-5xl">:</p>
          <div className="flex flex-col items-center bg-[#1A7408] text-white px-6 py-3 rounded-md time">
            <h4 className="text-4xl font-bold">05</h4>
            <p className="text-lg">Minutes</p>
          </div>
          <p className="text-[#1A7408] text-5xl">:</p>
          <div className="flex flex-col items-center bg-[#1A7408] text-white px-6 py-3 rounded-md time">
            <h4 className="text-4xl font-bold">34</h4>
            <p className="text-lg">Seconds</p>
          </div>
        </div>
      </div>
      <div className="py-14">
        <h1 className="text-center mb-12 text-2xl font-bold">Our Reviews</h1>
        <div className="flex overflow-x-auto flex-nowrap gap-8 items-center">
            {comment}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

export const Commendables = ({name, comment, occupation, image}) => {
  return (
    <div>
      <div className="flex flex-col items-center w-[700px]">
        <p className="text-center text-lg font-medium">
          &apos;{comment}&apos;
        </p>
        <div className="flex items-center">
          <div>
            <img src={image} alt={occupation} />
          </div>
          <div>
            <h5 className="text-lg font-[AeonikMed]">{name}</h5>
            <p className="text-base font-[AeonikReg]">
              {occupation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


Commendables.propTypes = {
  name: PropTypes.string,
  comment: PropTypes.string,
  occupation: PropTypes.string,
  image: PropTypes.string
}