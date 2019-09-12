import React from "react";
import "./App.css";
import ArticleList from "./article/ArticleList";
import Graphql from "./graphql/Graphql";
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  // return <ArticleList />;
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path="/graph" component={Graphql} />
          <Route exact path="/" component={ArticleList} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
