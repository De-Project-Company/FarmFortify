import Landing from './Landing'
import Transition from '../../Transition'
import Access from './Access'
import LoanType from './LoanType'
import LoanCal from './LoanCal'
import Eligible from './Eligible'

const Loan = () => {
  return (
    <div>
      <Landing/>
      <Access/>
      <LoanType/>
      <LoanCal/>
      <Eligible/>
    </div>
  )
}

const EnhancedLoan = Transition(Loan)

export default EnhancedLoan
