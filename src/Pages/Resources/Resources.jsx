// import PropTypes from 'prop-types'
import RLanding from './RLanding'
import Reports from './Reports'
import Articles from './Articles'
import Transition from '../../Transition'
import MarketTrends from './MarketTrends'
import FAQ from './FAQ'
import Newsletter from './Newsletter'

const Resources = () => {
  return (
    <div>
      <RLanding/>
      <Reports/>
      <Articles/>
      <MarketTrends/>
      <FAQ/>
      <Newsletter/>
    </div>
  )
}

Resources.propTypes = {

}

const EnhancedResources = Transition(Resources)

export default EnhancedResources
