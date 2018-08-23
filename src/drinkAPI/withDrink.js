import React from "react";
import DrinkContext from "./DrinkContext";

// This function takes a component...
function withDrink(WrappedComponent) {
  // ...and returns another component...
  // ... and renders the wrapped component with the fresh data!
  // Notice that we pass through any additional props
  return class extends React.Component {
    render() {
      return (
        <DrinkContext.Consumer>
          {drinks => <WrappedComponent drinks={drinks} {...this.props} />}
        </DrinkContext.Consumer>
      );
    }
  };
}

export default withDrink;
