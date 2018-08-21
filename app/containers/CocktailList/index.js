import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectCocktailList,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import { loadCocktailList } from './actions';
import reducer from './reducer';
import saga from './saga';
import CocktailList from './CocktailList';

const mapDispatchToProps = (dispatch) => ({
  loadCocktailList: (evt) => dispatch(loadCocktailList()),
});

const mapStateToProps = createStructuredSelector({
  cocktailList: makeSelectCocktailList(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'cocktailList', reducer });
const withSaga = injectSaga({ key: 'cocktailList', saga });

export default compose(withReducer, withSaga, withConnect)(CocktailList);
export { mapDispatchToProps };
