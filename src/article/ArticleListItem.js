import React from "react";
import * as Markdown from "react-markdown";

class ArticleListItem extends React.Component {
  render() {
    const { article } = this.props;

    return (
      <div>
        {(article || []).map((article, i) => (
          <div className="post row">
            <div
              className={
                "col-md-6 " +
                (article.fields.isImageOnLeft ? "order-2" : "order-1")
              }
            >
              <div className="title">{article.fields.title}</div>
              <Markdown className="description" source={article.content} />
            </div>
            <div
              className={
                "col-md-6 " +
                (article.fields.isImageOnLeft ? "order-1" : "order-2")
              }
            >
              <img
                src={
                  article.fields &&
                  article.fields.image.fields.file.url + "?w=800&h=800"
                }
                alt="blablabla"
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ArticleListItem;
