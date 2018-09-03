import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { lookupAction } from '../../actions/drinks-actions';
import DrinkDetail from './index';

const mapStateToProps = (state, ownProps) => {
    return {
        selectedDrink: state.drinksReducer.selectedDrink,
        loadingSelectedDrink: state.drinksReducer.loadingSelectedDrink,
        serviceError: state.drinksReducer.serviceError
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getDrink: (drinkId) => {
            dispatch(lookupAction(drinkId));
        },
    };
}

const DrinkDetailContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(DrinkDetail));

export default DrinkDetailContainer;
