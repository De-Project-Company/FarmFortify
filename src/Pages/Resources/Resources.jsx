// import PropTypes from 'prop-types'
import RLanding from './RLanding'
import Reports from './Reports'
import Articles from './Articles'
import Transition from '../../Transition'

const Resources = () => {
  return (
    <div>
      <RLanding/>
      <Reports/>
      <Articles/>
    </div>
  )
}

Resources.propTypes = {

}

const EnhancedResources = Transition(Resources)

export default EnhancedResources
