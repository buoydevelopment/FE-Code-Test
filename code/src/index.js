import React from "react";
import { render } from "react-dom";

const styles = {
  fontFamily: "sans-serif",
  backgroundColor: "#34a6e1",
  padding: "10px 10%",
  height: "100%"
};

const filterGlass = query => {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${query}`
  );
};

const lookUp = query => {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${query}`
  );
};

const searchDrink = query => {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
  );
};

class App extends React.Component {
  state = { drinks: [] };

  componentDidMount() {
    this.showCocktailGlass();
  }

  showCocktailGlass = () => {
    filterGlass("Cocktail_glass").then(data => {
      data.json().then(res => {
        this.setState({ ...res });
      });
    });
  };

  searchByName = name => {
    searchDrink(name).then(data => {
      data.json().then(res => {
        this.setState({ ...res });
      });
    });
  };

  handleSearch = ev => {
    if (ev.target.value.length > 1) {
      this.searchByName(ev.target.value);
    } else if (ev.target.value.length === 0) {
      this.showCocktailGlass();
    }
  };

  render() {
    let drinks = this.state.drinks.map(drink => (
      <DrinkCard key={drink.idDrink} {...drink} />
    ));

    const { search } = this.state;

    return (
      <div className="row">
        <div id="app" style={styles} className="col-8">
          <input
            type="text"
            style={{ width: "100%" }}
            onChange={this.handleSearch}
            value={search}
          />
          {drinks}
        </div>
      </div>
    );
  }
}

class DrinkCard extends React.Component {
  state = { focused: false, info: {} };

  onClick = () => {
    lookUp(`${this.props.idDrink}`).then(data => {
      data.json().then(res => {
        this.setState({
          focused: true,
          info: res.drinks[0]
        });
      });
    });
  };

  handleCollapse = () => {
    this.setState({ focused: false });
  };

  render() {
    const { idDrink, strDrink, strDrinkThumb } = this.props;
    const { focused, info } = this.state;

    const card = focused ? (
      <CardExpanded onClick={this.handleCollapse} info={info} {...this.props} />
    ) : (
      <CardCollapsed onClick={this.onClick} {...this.props} />
    );

    return card;
  }
}

const CardCollapsed = ({ onClick, idDrink, strDrink, strDrinkThumb }) => (
  <div className="row card collapsed" onClick={onClick}>
    <div className="description col-md-9">
      <h2>{strDrink}</h2>
    </div>
    <img className="col-md-3" src={strDrinkThumb} alt={idDrink} />
  </div>
);

const CardExpanded = props => (
  <div className="row card collapsed" onClick={props.onClick}>
    <div className="col-md-12">
      <div className="row">
        <img
          className="col-md-12"
          src={props.strDrinkThumb}
          alt={props.idDrink}
        />
      </div>
      <div className="row">
        <div className="description col-md-12">
          <h2>{props.strDrink}</h2>

          <ul>{ingredients(props.info)}</ul>

          <br />
          <br />
          <p>{props.info.strInstructions}</p>
        </div>
      </div>
    </div>
  </div>
);

const ingredients = drink => {
  let ing = [];

  for (let i = 1; i <= 12; i++) {
    if (drink[`strIngredient${i}`]) {
      ing.push(
        <li key={drink.idDrink + i}>
          {drink[`strMeasure${i}`]} - {drink[`strIngredient${i}`]}
        </li>
      );
    } else {
      break;
    }
  }

  return ing;
};

render(<App />, document.getElementById("root"));
