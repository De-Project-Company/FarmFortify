import { Formik, Field, Form, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import {HashLink} from 'react-router-hash-link'

const LoanCal = () => {
  const [resultState, setResultState] = useState(false)
  const [rvalues, setRvalues] = useState({
    mInstall:"",
    tInterest: "",
    tRepay: "",
  })
  return (
    <div>
      <div className="px-7 py-5 md:px-16 lg:px-[4vw] md:py-6 lg:py-[78px] my-24 bg-lightGreen2" id="loancal">
      <header className="flex flex-col items-center text-center justify-center">
        <h3 className=" text-3xl  text-black md:text-4xl font-[AeonikBold]">
          Loan Calculator
        </h3>
        <p className="text-base md:text-lg pt-2 md:w-[44%] font-[AeonikLight]">
          Interested in knowing how our repayment plan works? Use this
          calculator to find out about our interest rate and installment option.
        </p>
      </header>

      <Formik
        initialValues={{
          amount: "",
          annualInterest: "",
          repaymentTerms: "",
          loanType: "",
        }}
        validationSchema={Yup.object({
          amount: Yup.number("*Value has to be a number").required(
            "*Field is required"
          ),
          repaymentTerms: Yup.string().required("*Please Pick Your Term Days"),
          loanType: Yup.string().required("*Choose Your Preferred Loan Type"),
        })}
        onSubmit={(value) => {
          let tInterest = 0.05 * value.amount
          let mInstall = Math.floor((value.amount/ value.repaymentTerms) + tInterest)
          let tRepay = tInterest + value.amount
          setRvalues({...rvalues, tInterest : tInterest, mInstall: mInstall, tRepay: tRepay })
          setResultState(true)

          console.log("Yay!");
        }}
      >
        {({isValid }) => (
          <Form className="flex flex-col items-center  gap-11 justify-center pt-10 md:pt-16 ">
            <div className="flex flex-wrap gap-x-20">
              <div>
                <label
                  htmlFor=""
                  className="text-lg pb-3 flex items-center gap-3"
                >
                  Amount{" "}
                  <span className="text-sm font-[AeonikLight]">
                    (Fill in the amount you want to borrow){" "}
                  </span>
                </label>
                <Field
                  type="number"
                  name="amount"
                  className="bg-lightGreen2 border text-xl text-[#707070] border-[#707070] rounded-md px-5 py-4 w-full md:w-[420px]"
                  placeholder="e.g. N300,000"
                />
                <ErrorMessage name="amount" className="text-red-400" component="div" />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-lg flex pb-3 gap-2 items-center"
                >
                  Annual Interest Rate{" "}
                  <span className="text-sm font-[AeonikLight]">(Fixed) </span>
                </label>
                <Field
                  type="number"
                  name="annualInterest"
                  className="bg-lightGreen2 border text-xl text-[#707070] border-[#707070] rounded-md px-5 py-4 w-full md:w-[420px]"
                  placeholder="5%"
                  readOnly
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-x-20">
              <div>
              <label
                  htmlFor=""
                  className="text-lg flex pb-3 gap-2 items-center"
                >
                  Repayment Terms{" "}
                  <span className="text-sm font-[AeonikLight]">(For how long would you repay the loan?)  </span>
                </label>
                <Field
                  as="select"
                  name="repaymentTerms"
                  className="bg-lightGreen2 border text-xl text-[#707070] border-[#707070] rounded-md px-5 py-4 w-full md:w-[420px]"
                >
                  <option value="3">3 Months</option>
                  <option value="6">6 Months</option>
                  <option value="9">9 Months</option>
                  <option value="12">12 Months</option>
                  <option value="18">18 Months</option>
                </Field>
                <ErrorMessage name="repaymentTerms" className="text-red-400" component="div"/>
                
              </div>
              <div>
              <label
                  htmlFor=""
                  className="text-lg flex pb-3 gap-2 items-center"
                >
                  Type of Loan{" "}
                  <span className="text-sm font-[AeonikLight]">(What is the loan for?) </span>
                </label>
                <Field
                  as="select"
                  name="loanType"
                  className="bg-lightGreen2 border text-xl text-[#707070] border-[#707070] rounded-md px-5 py-4 w-full md:w-[420px]"
                >
                  <option value="Operational Loan">Operational Loan</option>
                  <option value="Equipment Loan">Equipment Loan</option>
                  <option value="Expansion Loan">Expansion Loan</option>
                  <option value="Seasonal Loan">Seasonal Loan</option>
                </Field>
                <ErrorMessage name="loanType" className="text-red-400" component="div"/>
                
              </div>
            </div>
            <button type='submit' disabled={!isValid} className="bg-deepGreen text-white px-16 py-4 text-xl font-[AeonikReg] disabled:bg-lightGreen disabled:border-deepGreen disabled:border disabled:text-deepGreen">Calculate</button>
          </Form>
           
        )}
      </Formik>
    </div>
    {resultState ? (<div className="px-7 py-5 md:px-16 lg:px-[4vw] md:py-6 lg:py-[72px]">
      <div className="bg-[#F1CBA8] text-black border border-[#703F23] py-10 px-11 lg:px-[102px]">
        <h1 className="text-[28px] font-[AeonikBold] pb-9">Result</h1>
        <p className="text-xl font-[AeonikLight]" id="result">Monthly Installment: <span className="text-[#AF0808] font-[AeonikReg]">N {rvalues.mInstall}</span></p>
        <p className="text-xl font-[AeonikLight] my-2">Total Interest: <span className="text-[#AF0808] font-[AeonikReg]">N {rvalues.tInterest}</span></p>
        <p className="text-xl font-[AeonikLight]">Total Repayment: <span className="text-[#AF0808] font-[AeonikReg]">N {rvalues.tRepay}</span></p>
      </div>
    </div>) : null}
    </div>
  );
};

export default LoanCal;
