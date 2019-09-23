import React from "react";
import "./App.css";
import ArticleList from "./article/ArticleList";
import Graphql from "./graphql/Graphql";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import BlogContentful from "./blog/BlogContentful";

function App() {
  // return <ArticleList />;
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path="/graph" component={Graphql} />
          <Route exact path="/" component={ArticleList} />
          <Route exact path="/blog" component={BlogContentful} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
