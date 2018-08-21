import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectCocktails,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import { loadCocktails } from './actions';
import reducer from './reducer';
import saga from './saga';
import CocktailList from './CocktailList';

const mapDispatchToProps = (dispatch) => ({
  loadCocktails: (evt) => dispatch(loadCocktails()),
});

const mapStateToProps = createStructuredSelector({
  cocktails: makeSelectCocktails(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'cocktailList', reducer });
const withSaga = injectSaga({ key: 'cocktailList', saga });

export default compose(withReducer, withSaga, withConnect)(CocktailList);
export { mapDispatchToProps };
