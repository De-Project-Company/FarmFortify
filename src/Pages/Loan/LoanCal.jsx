const LoanCal = () => {
  return (
    <div className="px-7 py-5 md:px-16 lg:px-[4vw] md:py-6 lg:py-[78px] my-24 bg-lightGreen2">
      <header className="flex flex-col items-center text-center justify-center">
        <h3 className=" text-3xl  text-black md:text-4xl font-[AeonikBold]">
          Loan Calculator
        </h3>
        <p className="text-base md:text-lg pt-2 w-[44%] font-[AeonikLight]">
          Interested in knowing how our repayment plan works? Use this
          calculator to find out about our interest rate and installment option.
        </p>
      </header>
      <form action="" className="flex flex-col items-center ">
        
          <div className="flex gap-20">
            <div className="flex flex-col">
              <label htmlFor="" className="text-lg">
                Amount{" "}
                <span className="text-sm font-[AeonikLight]">
                  (Fill in the amount you want to borrow){" "}
                </span>
              </label>
              <input
                type="text"
                className="bg-lightGreen2 border text-xl text-[#707070] border-[#707070] rounded-md px-4 py-3"
                placeholder="e.g. N300,000"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-lg">
                Amount{" "}
                <span className="text-sm font-[AeonikLight]">
                  (Fill in the amount you want to borrow){" "}
                </span>
              </label>
              <input
                type="text"
                className="bg-lightGreen2 border text-xl text-[#707070]  border-[#707070] px-4 py-3 rounded-md"
              />
            </div>
          </div>
      </form>
    </div>
  );
};

export default LoanCal;
