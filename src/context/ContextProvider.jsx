import React, { Component } from "react";
import { getCocktails } from  "../webapi/api";
import { AppContext } from  "./ContextApi";
import ReactLoading from 'react-loading';

export default class ContextProvider extends Component { 

  constructor(props, context) {
    super(props, context);
    this.state = {
      cocktailsData: [],
      loading: true,
    }
  }

  render() {
    const { cocktailsData, loading } = this.state;
    const { children } = this.props;

    if (loading)
      return <ReactLoading type="spin" color="white" height={100} width={100} />

    return (
      <AppContext.Provider 
        value={cocktailsData}>
        {children}
      </AppContext.Provider>
    );
  }

  componentDidMount() {
    getCocktails().then(cocktailsData => {
      this.setState({
        cocktailsData: cocktailsData.drinks,
        loading: false,
      });
    });
  }
}