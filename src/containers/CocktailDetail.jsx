import React, { Component } from 'react';
import CocktailDetailCard from '../components/CocktailDetailCard';
import { getCocktailDetail } from  "../webapi/api";
import ReactLoading from 'react-loading';



class CocktailDetail extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: true,
      cocktailsData: undefined,
    }
  }


  render() {
    const { loading, cocktailsData } = this.state;
    if(loading)
      return <ReactLoading type="spin" color="white" height={100} width={100} />

    return <div>
        <CocktailDetailCard cocktail={cocktailsData} {...this.props}/>
    </div>;
  }

  componentDidMount() {
    const { drinkId } = this.props.match.params;
    getCocktailDetail(drinkId).then(cocktailData => {
      this.setState({
        cocktailsData: cocktailData.drinks[0],
        loading: false,
      });
    });

  }


}

export default CocktailDetail;