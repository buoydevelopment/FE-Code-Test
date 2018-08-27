import React, { Component }  from "react";
import { AppContext } from  "./ContextApi";

export default function WithCocktailData(ChildComponent) {

  return class extends Component {
    render() {
      return (
        <AppContext.Consumer>
          { drinks => 
            <ChildComponent drinks={drinks} {...this.props}/>
          }
        </AppContext.Consumer>
      );
    }
  };
}
