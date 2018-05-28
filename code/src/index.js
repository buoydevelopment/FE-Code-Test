import React from "react";
import { render } from "react-dom";

const styles = {
  fontFamily: "sans-serif",
  backgroundColor: "#34a6e1",
  padding: "10px 10%",
  height: "100%"
};

const find = query => {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${query}`
  );
};

class App extends React.Component {
  state = { drinks: [] };

  componentDidMount() {
    find("g=Cocktail_glass").then(data => {
      data.json().then(res => {
        this.setState({ ...res });
      });
    });
  }

  render() {
    let drinks = this.state.drinks.map(drink => (
      <DrinkCard key={drink.idDrink} {...drink} />
    ));

    return (
      <div id="app" style={styles}>
        {drinks}
      </div>
    );
  }
}

class DrinkCard extends React.Component {
  state = { focused: "collapsed" };

  onClick = () => {
    find(`i=${this.props.idDrink}`);
  };

  render() {
    const { idDrink, strDrink, strDrinkThumb } = this.props;
    const { focused } = this.state;

    return (
      <div className={`card ${focused}`}>
        <div
          style={{ display: "inline-block", width: "75%" }}
          className="description"
        >
          <h2>{strDrink}</h2>
        </div>
        <img style={{ width: "25%" }} src={strDrinkThumb} alt={idDrink} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
