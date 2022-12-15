import NavbarView from "../views/navbarView.js"
import { useState, useEffect } from "react";

export default function Navbar(props) {

    // Returns either the promiseNoData function (no data, spinner image, etc) or the content defined in the MovieView.
    return (<div>{<NavbarView/>}</div>)
}