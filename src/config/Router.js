import React from "react";
import { Scene, Router } from "react-native-router-flux";
import {HOME, COCKTAIL_DETAILS} from "./RouteConstant";
import Home from "../screens/Home";
import CocktailDetails from "../screens/CocktailDetails";


const RouterComponent = () => {
    return (
        <Router>
            <Scene hideNavBar>
                <Scene key={HOME} component={Home} initial/>
                <Scene key={COCKTAIL_DETAILS} component={CocktailDetails} />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
