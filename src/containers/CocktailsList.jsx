import React, { Component } from 'react';
import { List, AutoSizer } from 'react-virtualized';
import CocktailListCard from '../components/CocktailListCard';
import { getFuseSearch } from '../utils/search';
import { FormControl } from 'react-bootstrap';

class CocktailsList extends Component {
  
  constructor(props, context) {
    super(props, context);
    const { drinks } = props;
    this.handleCocktailSelect = this.handleCocktailSelect.bind(this);
    this.rowCocktail = this.rowCocktail.bind(this);
    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.fuseSearch = getFuseSearch(drinks);
    this.state = {
      drinks : drinks,
      searchStr : ''
    };
  }

  onChangeSearch(input) {
    const searchStr = input.target.value;
    const { drinks } = this.props;
    let result = drinks;
    if (searchStr)
      result = this.fuseSearch.search(searchStr);
    this.setState({drinks: result, searchStr: searchStr});
  }

  rowCocktail({index, key, style}) {
    const { drinks } = this.state;
    const drink =  drinks[index];
    return <CocktailListCard 
      cocktail={drink}
      key={key}
      style={style}
      onSelectCocktail={this.handleCocktailSelect}
    />
  }

  handleCocktailSelect = (id) => {
    const { history } = this.props;
    history.push(`/cocktails/${id}`);    
  };

  render() {
    const { drinks, searchStr } = this.state;
    return (
      <div style={{width: '100%'}}>
        <div>
          <FormControl
            type="text"
            value={searchStr}
            placeholder="Enter cocktail name"
            onChange={this.onChangeSearch}
          />
        </div>  
        <br/>
        <div style={{height: '67vh'}}>
          <AutoSizer >
            {({ height, width }) => (
              <List
                rowCount={drinks.length}
                width={width}
                height={height}
                rowHeight={200}
                rowRenderer={this.rowCocktail}
                overscanRowCount={10}
              />
            )}
          </AutoSizer>
        </div>
      </div>  
    );
  }
}

export default CocktailsList;