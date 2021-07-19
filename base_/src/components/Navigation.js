import React from "react";
import { Link } from "react-router-dom";

function Navigation() {

    return <div>
        <Link to="/"> Home </Link>
        <Link to="/signin"> SingIn </Link>
        <Link to="/upload"> Upload </Link>
    </div>
}

export default Navigation