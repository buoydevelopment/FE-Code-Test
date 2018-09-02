import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { filterAction, filterDrinkByName } from './actions/drinks-actions';
import App from './App';

const mapStateToProps = (state, ownProps) => {
    return {
        drinks: state.drinksReducer.drinks,
        loadingDrinks: state.drinksReducer.loadingDrinks,
        filteredDrinks: state.drinksReducer.filteredDrinks,
        serviceError: state.drinksReducer.serviceError
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getDrinks: (g) => {
            dispatch(filterAction(g));
        },
        filterDrinkByName: (drinkName) => {
            dispatch(filterDrinkByName(drinkName))
        }
    };
}

const AppContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App));

export default AppContainer;
