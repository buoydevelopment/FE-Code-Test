// import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import { set_test as setTest } from '../actions'; 

import Home from '../views/pages/Home';
 
const mapStateToProps = state => {
  return {
    test: state.test || []
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    set_test: (test) => {
      dispatch(setTest(test))
    },
  }
}
 
const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
 
export default HomeContainer