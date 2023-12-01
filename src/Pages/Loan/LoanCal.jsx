const LoanCal = () => {
  return (
    <div className="px-7 py-5 md:px-16 lg:px-[4vw] md:py-6 lg:py-[78px] my-24 bg-lightGreen2">
      <header className="flex flex-col items-center text-center justify-center">
        <h3 className=" text-3xl  text-black md:text-4xl font-[AeonikBold]">
          Loan Calculator
        </h3>
        <p className="text-base md:text-lg pt-2 md:w-[44%] font-[AeonikLight]">
          Interested in knowing how our repayment plan works? Use this
          calculator to find out about our interest rate and installment option.
        </p>
      </header>
      <form action="" className="flex w-full w flex-col items-center justify-center pt-10 md:pt-16 ">
        
          <div className="flex flex-wrap gap-x-20">
            <div className="flex flex-col">
              <label htmlFor="" className="text-lg pb-3 flex items-center gap-3">
                Amount{" "}
                <span className="text-sm font-[AeonikLight]">
                   (Fill in the amount you want to borrow){" "}
                </span>
              </label>
              <input
                type="text"
                className="bg-lightGreen2 border text-xl text-[#707070] border-[#707070] rounded-md px-5 py-4"
                placeholder="e.g. N300,000"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-lg flex pb-3 gap-2 items-center">
              Annual Interest Rate{" "}
                <span className="text-sm font-[AeonikLight]">
                  (Fixed){" "}
                </span>
              </label>
              <input
                type="text"
                className="bg-lightGreen2 border text-xl text-[#707070]  border-[#707070] px-5 py-4 rounded-md"
                readOnly
                placeholder="5%"
              />
            </div>
          </div>
      </form>
    </div>
  );
};

export default LoanCal;
