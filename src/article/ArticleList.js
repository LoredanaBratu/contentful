import React from "react";
import ArticleListItem from "./ArticleListItem";
import Banner from "./Banner";
import Document from "./Document";
import PdfCard from "./PdfCard";
import PdfDoc from "./PdfDoc";

import client from "../service/client";

class ArticleList extends React.Component {
  state = { articles: [] };

  componentDidMount() {
    // client.getEntries({content_type: 'post', locale: 'en-US'}).then((response) => {
    //     response.items.forEach(entry => {
    //         if(entry.fields) {
    //             this.setState(state => {
    //                 const articles = [...state.articles, entry.fields];
    //                 return {
    //                   articles
    //                 };
    //             });
    //         }
    //     })
    // }).then(response=> {
    //     console.log(this.state.articles)
    //     const sortItems = this.state.articles.sort((a, b) => (a.order > b.order) ? 1 : -1)
    //     this.setState({articles: sortItems})
    // })

    //, locale: 'en-US'
    client.getEntries({ content_type: "fastStart" }).then(response => {
      response.items.forEach(entry => {
        if (entry.fields) {
          this.setState(state => {
            const articles = [...state.articles, entry.fields];
            return {
              articles
            };
          });
        }
      });
      // }).then(response=> {
      //     console.log(this.state.articles)
      //     const sortItems = this.state.articles.sort((a, b) => (a.order > b.order) ? 1 : -1)
      //     this.setState({articles: sortItems})
    });
  }

  render() {
    const { articles } = this.state;
    debugger;
    return (
      <div>
        {(articles || []).map((article, i) => (
          <React.Fragment>
            {article.banner && <Banner key={i} article={article.banner} />}
            {article.card && <ArticleListItem key={i} article={article.card} />}
            {article.document && (
              <Document key={i} article={article.document} />
            )}
            {article.card2 && (
              <ArticleListItem key={i} article={article.card2} />
            )}
            {article.pdfCard && <PdfCard key={i} article={article.pdfCard} />}
            {article.pdfDoc1 && <PdfDoc key={i} article={article.pdfDoc1} />}
          </React.Fragment>
        ))}
      </div>
    );
  }
}
export default ArticleList;
