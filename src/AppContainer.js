import { connect } from 'react-redux';
import { filterAction } from './actions/drinks-actions';
import App from './App';

const mapStateToProps = (state, ownProps) => {
    return {
        drinks: state.drinksReducer.drinks,
        loadingDrinks: state.drinksReducer.loadingDrinks
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getDrinks: (g) => {
            dispatch(filterAction(g));
        }
    };
}

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;
