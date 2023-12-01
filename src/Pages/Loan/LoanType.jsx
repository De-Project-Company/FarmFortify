import { ltype } from "../../DataCalls/loantype";

const LoanType = () => {
  return (
    <div className="px-7 py-5 md:px-16 lg:px-[4vw] md:py-6 lg:py-[73px] loanty">
      <header>
        <h3 className="text-center py-12 md:py-[72px] text-3xl text md:text-4xl font-[AeonikBold]">
          Type Of Loans
        </h3>
      </header>
      <div className="flex flex-wrap lg:grid grid-cols-2 gap-y-14 place-items-center">
        {ltype.map((x, index) => (
          <div key={index}>
            <div>
              <div className="w-full lg:max-w-[508px] h-[373px] px-14 py-[71px] bg-white">
                <img src={x.Img} alt={x.headText} />
                <div>
                    <h3 className="text-orange text-[28px] pt-[10px] pb-[25px] font-[AeonikBold]">{x.headText}</h3>
                    <p className="text-lg font-[AeonikLight]">{x.bodyText}</p>
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
