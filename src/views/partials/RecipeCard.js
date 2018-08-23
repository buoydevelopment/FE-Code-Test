import React, { Component } from 'react';
import '../../App.css'
class Page extends Component {
  render() {
    return(
      <div className="card mt-3">
        <div className="row no-gutters">
          <div className="col">
            <div className="card-block mx-3">
              <h5 className="mt-3 card-title"><b>{this.props.my_recipe.strDrink}</b></h5>
            </div>
          </div>
          <div className="col-auto">
            <img src={this.props.my_recipe.strDrinkThumb} className="img-card rounded m-3" style={{ marginLeft: 0 + " !important" }} alt=""/>
          </div>
        </div>
      </div>
    );
  }
}
export default Page;
