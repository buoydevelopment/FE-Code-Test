import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListView from './ListView';
import SearchBox from '../../components/SearchBox';
import cocktailActions from '../../redux/cocktail/actions';

const { getList } = cocktailActions;

class CocktailList extends Component {
  state = {
    search: ''
  }

  componentWillMount() {
    const { getList } = this.props;
    getList();
  }

  render() {
    let { cocktailList } = this.props; 
    const { search } = this.state; 

    cocktailList = cocktailList ? cocktailList.filter(single => single.strDrink.includes(search)) : [];

    return (
      <section>
        <SearchBox 
          placeHolder="Input a keyword to search" 
          onSearch={search => this.setState({ search })} 
        />
        <ListView list={cocktailList} />
      </section>
    );
  }
}

CocktailList.propTypes = {
  cocktailList: PropTypes.array,
};

export default connect(
  state => ({
    cocktailList: state.Cocktail.cocktailList
  }),
  { getList }
)(CocktailList);