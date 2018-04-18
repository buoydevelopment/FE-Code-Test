import * as Actions from "./ActionTypes";
import CocktailService from "../provider/cocktails/CocktailsService";

export function selectCocktail(cockTailId) {
    return (dispatch, getStore) => {
      dispatch({
        type: Actions.CHANGE_APP_PROPS,
        props: true
      });
      CocktailService.getDetailCocktails(cockTailId).then(resp => {
        console.log("RESP", resp);
        dispatch({
          type: Actions.SELECTED_COCKTAIL,
          props: resp.data.drinks[0]
        });
        dispatch({
            type: Actions.CHANGE_APP_PROPS,
            props: false
        });
      }).catch(err => {
        console.log("error getting cocktail details", err);
        dispatch({
            type: Actions.CHANGE_APP_PROPS,
            props: false
        });
      })
    }
};

export function getCocktails() {
    return (dispatch, getStore) => {
        dispatch({
            type: Actions.CHANGE_APP_PROPS,
            props: true
        });
        CocktailService.getCocktails().then(resp => {
            dispatch({
                type: Actions.ACT_LOAD_COCKTAILS,
                props: resp.data.drinks
            });
            dispatch({
                type: Actions.CHANGE_APP_PROPS,
                props: false
            });
        }).catch(err =>{
            console.log("error getting cocktails", err);
            dispatch({
                type: Actions.CHANGE_APP_PROPS,
                props: false
            });
        })
    }
}
