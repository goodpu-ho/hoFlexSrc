import React from "react";
import TV from "router/TV";
import Movie from "router/Movie";
import Search from "router/Search";
import Detail from "router/Detail"
import {BrowserRouter, Switch, Router, Route } from "react-router-dom";
import Header from "./Header";

const RouterControll = () => (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route path="/" exact component={Movie}></Route>
            <Route path="/movie" exact component={Movie}></Route>
            <Route path="/tv" exact component={TV}></Route>
            <Route path="/search" exact component={Search}></Route>
            <Route path="/movie/:id" exact component={Detail}></Route>
            <Route path="/tv/:id" exact component={Detail}></Route>
        </Switch>
    </BrowserRouter>
)

export default RouterControll;