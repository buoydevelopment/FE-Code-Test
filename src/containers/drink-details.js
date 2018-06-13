import React, {Component} from 'react';


class DrinkList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      drinkDetails: {}
    };
  }

  componentWillMount(){
    const id = this.props.match.params.id;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(response => response.json())
      .then(({drinks}) => {
        this.setState({
          drinkDetails: drinks[0],
          isLoading: false
        })
      })
      .catch(e => console.error('Error fetching drink details: ', e));
  }

  render(){
    const {drinkDetails, isLoading} = this.state;
    return isLoading ? <div>Loading...</div> : <div>{drinkDetails.strInstructions}</div>
  }
}

export default DrinkList;