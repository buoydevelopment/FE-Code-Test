import React, { Component } from 'react';
import './root.css';
import DrinkList from '../containers/drink-list';

class Root extends Component {
  constructor(props){
    super(props);
    this.state = {
      showInputFilter: false,
      filterString: '',
    }
    this.inputFilterRef = React.createRef();
  }

  componentDidUpdate(){
    if(this.state.showInputFilter){
      this.inputFilterRef.current.focus();
    }
  }

  toggleInputFilter() {
    this.setState({
      showInputFilter: !this.state.showInputFilter
    })
  }

  handleInputChange(e) {
    this.setState({
      filterString: e.target.value
    })
    if (!e.target.value){
      this.toggleInputFilter();
    }
  }

  render() {
    let headerContent;
    if (this.state.showInputFilter) {
      headerContent = <div className="titleWrapper">
        <input type="text" className="inputFilter" ref={this.inputFilterRef} placeholder="filter drinks" onChange={(e) => this.handleInputChange(e)}/>
      </div>;
    } else {
      headerContent = <div className="titleWrapper">
        <h1 className="rootTitle">Random drinks 0.1</h1>
        <img src={process.env.PUBLIC_URL+'/icons/search.svg'} alt="back" onClick={() => this.toggleInputFilter()}/>
      </div>;
    }

    return (
      <div className="root">
        <header className="rootHeader">
          {headerContent}
        </header>
        <div className="rootContent">
          <DrinkList filterString={this.state.filterString}/>
        </div>
      </div>
    );
  }
}

export default Root;
