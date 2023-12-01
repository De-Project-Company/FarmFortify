import { ltype } from "../../DataCalls/loantype";

const LoanType = () => {
  return (
    <div className="px-7 py-5 md:px-16 lg:px-[4vw] md:py-6 lg:py-[73px] loanty">
      <header>
        <h3 className="text-center py-12 md:py-[72px] text-3xl text md:text-4xl font-[AeonikBold]" id="loantype">
          Type Of Loans
        </h3>
      </header>
      <div className="flex flex-wrap lg:grid md:grid-cols-2 gap-y-14 place-items-center">
        {ltype.map((x, index) => (
          <div key={index}>
            <div className="w-full">
              <div className="w-full lg:max-w-[508px] h-[373px] px-7 py-14 md:px-14 md:py-[71px] bg-white">
                <img src={x.Img} alt={x.headText} />
                <div>
                    <h3 className="text-orange text-xl md:text-[28px] pt-[10px] pb-[25px] font-[AeonikBold]">{x.headText}</h3>
                    <p className="text-base text-lg font-[AeonikLight]">{x.bodyText}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoanType;
