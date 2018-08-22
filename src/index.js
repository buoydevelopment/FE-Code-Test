import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import App from "./App";
import DrinkProvider from "./drinkAPI/DrinkProvider";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <DrinkProvider>
    <React.Fragment>
      <CssBaseline />
      <App />
    </React.Fragment>
  </DrinkProvider>,
  document.getElementById("root")
);
registerServiceWorker();
