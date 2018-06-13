import React, {Component} from 'react';

class drinkList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      drinkList: null
    };
  }

  componentWillMount(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass')
      .then(response => response.json())
      .then(({drinks}) => {
        const drinkList = drinks.map(drink => <div key={drink.idDrink}> {drink.strDrink} </div>);
        this.setState({
          drinkList,
          isLoading: false
        })
      })
      .catch(e => console.error('Error fetching drinks list: ', e))
  }

  render(){
    const {drinkList, isLoading} = this.state;
    return isLoading ? <div>Loading</div> : <div> {drinkList} </div>;
  }
}

export default drinkList;