import {
    Link,
    Route,
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import React, {Component} from "react";

import styled from 'styled-components'

interface INavbarProps {
    items: string[];
}

const Nav = styled.nav`
    background: rgba(0, 0, 0, .3);
    height: 50px;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    text-align: center;
`
const A = styled.a`
    color: white;
    text-decoration: none;
    display: inline-block;
    min-width: 140px;
    height: 50px;
    line-height: 50px;
`

const Navbar = ({items}: INavbarProps) => {

    return (
        <Router>
            <Nav id="login-nav">
                {items.map(item => {
                    return (
                        <A id={`${item}`} href={`${item}`}>
                            {item}
                        </A>
                    )
                })}
            </Nav>
        </Router>
    )
}   

export default Navbar;