import React, {Component} from 'react';
import DrinkListComponent from '../components/drink-list'

const dl = [{"strDrink":"9 1/2 Weeks","strDrinkThumb":"https://www.thecocktaildb.com/images/media/drink/xvwusr1472669302.jpg","idDrink":"16108"},{"strDrink":"A. J.","strDrinkThumb":"https://www.thecocktaildb.com/images/media/drink/uryyrr1472811418.jpg","idDrink":"11002"},{"strDrink":"A1","strDrinkThumb":"https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg","idDrink":"17222"}];

class DrinkList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isLoading: true,
      // drinkList: []
      isLoading: false,
      drinkList: dl
    };
  }

  // componentWillMount(){
  //   fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass')
  //     .then(response => response.json())
  //     .then(({drinks}) => {
  //       this.setState({
  //         drinkList: drinks,
  //         isLoading: false
  //       })
  //     })
  //     .catch(e => console.error('Error fetching drinks list: ', e))
  // }

  render(){
    const {drinkList, isLoading} = this.state;
    return <DrinkListComponent drinkList={drinkList} isLoading={isLoading}/>
  }
}

export default DrinkList;