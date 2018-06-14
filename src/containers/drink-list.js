import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DrinkListComponent from '../components/drink-list'
import {DRINKS_LIST_ENDPOINT} from '../utils/constants';

class DrinkList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      drinkList: []
    };
  }

  componentDidMount(){
    let drinks = JSON.parse(sessionStorage.getItem('drinkList'));
    if (drinks) {
      this.setState({
        drinkList: drinks,
        isLoading: false
      })
    } else {
      fetch(DRINKS_LIST_ENDPOINT)
        .then(response => response.json())
        .then(({drinks}) => {
          sessionStorage.setItem('drinkList', JSON.stringify(drinks))
          this.setState({
            drinkList: drinks,
            isLoading: false
          })
        })
        .catch(e => console.error('Error fetching drinks list: ', e))
    }
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