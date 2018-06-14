import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DrinkListComponent from '../components/drink-list'

class DrinkList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      drinkList: []
    };
  }

  componentWillMount(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass')
      .then(response => response.json())
      .then(({drinks}) => {
        this.setState({
          drinkList: drinks,
          isLoading: false
        })
      })
      .catch(e => console.error('Error fetching drinks list: ', e))
  }

  render(){
    const { drinkList, isLoading } = this.state;
    const { filterString } = this.props;
    const filteredDrinkList = filterString ?
      drinkList.filter( ({strDrink}) => strDrink.toLocaleLowerCase().includes(filterString.toLocaleLowerCase())) :
      drinkList;
    return <DrinkListComponent drinkList={filteredDrinkList} isLoading={isLoading}/>
  }
}

DrinkList.propTypes = {
  filterString: PropTypes.string
}

export default DrinkList;