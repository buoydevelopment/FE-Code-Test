import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ErrorBoundary from './shared/components/ErrorBoundary/ErrorBoundary';
import Guard from "./shared/components/Guard/guard";
import DetailSection from "./shared/components/DetailSection/DetailSection";
import List from "./shared/components/List/List";
import ListItem from "./shared/components/ListItem/ListItem";

const AppRouter = (props) => {
  const [selectedCocktail, setSelectedCocktail] = React.useState({});

  React.useEffect(() => {
    props.getList();
  }, [])

  React.useEffect(() => {
    setSelectedCocktail(props.selectedCocktail);
  }, [props.selectedCocktail])

  const { error,
    raiseError,
    getDetail,
    cocktails,
    fetching,
    cleanDetail,
    shouldGetIngredients,
    selectDrink } = props;

  const cocktailList = () => (
    <List
      comp={ListItem}
      selectCocktail={selectDrink}
      list={cocktails}
      shouldGetIngredients={shouldGetIngredients}
    />
  );

    const cocktailDetail = () => (
      <DetailSection
        fetching={fetching}
        cocktail={selectedCocktail}
        getDetail={getDetail}
        cleanDetail={cleanDetail}
      />
    );

  return (
    <React.Fragment>
      <ErrorBoundary error={error} raiseError={raiseError}>
        <Switch>
          <Route exact path='/' component={cocktailList} />
          <Guard path="/cocktail/:id"
                  component={cocktailDetail}
                  isAuthenticated={true} />
        </Switch>
      </ErrorBoundary>
    </React.Fragment>
  );
}

export default AppRouter;