import React, { Component, Fragment } from 'react';

class SearchHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { activeSearch: false };
  }

  onSearchClick = () => { this.setState({ activeSearch: true }); }

  onCancelClick = () => {
    this.setState({ activeSearch: false });
    this.props.cancelSearch();
  }

  onSearchChange = (e) => {
    this.props.handleSearch(e.target.value);
  }

  render() {
    const { activeSearch } = this.state;
    return (
      <header className="app-header">
        {activeSearch ?
          <Fragment>
            <input
              className="search"
              placeholder="Search your drink"
              onChange={(e) => { this.onSearchChange(e); }}
              value={this.props.searchFilter}
            />
            <span className="cancel-icon" onClick={() => { this.onCancelClick(); }} role="img" aria-label="Cancel">&#x24e7;</span>
          </Fragment>
        : 
          <Fragment>
            <h4 className="app-title">Random drinks 0.1</h4>
            <span onClick={this.onSearchClick} role="img" aria-label="Search">&#x1f50d;</span>
          </Fragment>
        }
      </header>
    );
  }
};

export default SearchHeader;
