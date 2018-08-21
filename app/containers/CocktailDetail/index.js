import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectCocktail,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import { loadCocktail } from './actions';
import reducer from './reducer';
import saga from './saga';
import CocktailDetail from './CocktailDetail';

const mapDispatchToProps = (dispatch) => ({
  loadCocktailDetail: (id) => dispatch(loadCocktail(id)),
});

const mapStateToProps = createStructuredSelector({
  cocktail: makeSelectCocktail(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'cocktailDetail', reducer });
const withSaga = injectSaga({ key: 'cocktailDetail', saga });

export default compose(withReducer, withSaga, withConnect)(CocktailDetail);
export { mapDispatchToProps };
