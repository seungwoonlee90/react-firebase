import React, { useState } from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";


export default () => {
    const [isLoggedIn, setIsLoggedIn] = useState();
    return (
        <Router>
            <Switch>
                {isLoggedIn? show Home : show login page}
            </Switch>
        </Router>
    )
}