import React from "react";
import { useIndexedDB } from "react-indexed-db";
import ArticleListItem from "./ArticleListItem";
import Banner from "./Banner";
import Document from "./Document";
import PdfCard from "./PdfCard";
import PdfDoc from "./PdfDoc";

import client from "../service/client";

class ArticleList extends React.Component {
  state = { articles: [] };

  async componentDidMount() {
    try {
      const response = await client.getEntries({
        content_type: "fastStart"
      });

      const { add, getByIndex, update } = useIndexedDB("article");

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

      //, locale: 'en-US']
      console.log(response.items);
      response.items.forEach(async entry => {
        if (entry.fields) {
          console.log(entry);
          const entryInDB = await getByIndex("id", entry.sys.id);
          console.log("ENTRY ", entryInDB);

          if (!entryInDB) {
            await add({ ...entry, id: entry.sys.id });
          } else {
            await update({ ...entry, id: entry.sys.id });
          }

          this.setState(state => {
            const articles = [...state.articles, entry.fields];
            // await add({})
            // localStorage.setItem("articles", JSON.stringify(articles));
            console.log("articles", articles);

            return {
              articles
            };
          });
        }
      });
    } catch (err) {
      const { getAll } = useIndexedDB("article");
      const data = await getAll();
      data.forEach(({ fields }) => {
        this.setState(state => {
          const articles = [...state.articles, fields];
          // await add({})
          // localStorage.setItem("articles", JSON.stringify(articles));
          console.log("articles", articles);

          return {
            articles
          };
        });
      });
    }
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
    const { getAll } = useIndexedDB("article");
    getAll().then(data => {
      console.log("DATAAA", data);
    });
    return (
      <div>
        <p>test</p>
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
