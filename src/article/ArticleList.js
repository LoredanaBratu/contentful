import React from "react";
import ArticleListItem from "./ArticleListItem";
import Banner from "./Banner";
import Document from "./Document";
import PdfCard from "./PdfCard";
import PdfDoc from "./PdfDoc";

import client from "../service/client";
// const accessToken =
//   "eaca30191e4f4ed79797ac3cf3b855c4ee3a7e03ee4c4dc763871a837dbfe7da4";
// const spaceId = "y4h3skws4gkc";
// const query = ``;

class ArticleList extends React.Component {
  state = { articles: [] };

  componentDidMount() {
    // fetch(
    //   `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/master`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //       authorization: `Bearer ${accessToken}`
    //     },
    //     body: JSON.stringify({
    //       query
    //     })
    //   }
    // )
    //   .then(res => res.json())
    //   .then(response => {
    //     console.log(" resp", response);
    //   });

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
    });

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

    // }).then(response=> {
    //     console.log(this.state.articles)
    //     const sortItems = this.state.articles.sort((a, b) => (a.order > b.order) ? 1 : -1)
    //     this.setState({articles: sortItems})
  }

  render() {
    const { articles } = this.state;

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
