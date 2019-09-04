import React from "react";
import client from "../service/client";

class SingleArticle extends React.Component {
  constructor() {
    super();
    this.state = { article: null };
  }

  componentDidMount() {
    const { params } = this.props;
    if (params && params.link) {
      client
        .getEntries({ content_type: "post", "fields.slug": params.link })
        .then(response => {
          this.setState({ article: response.item[0] });
        });
    }
  }

  render() {
    const { article } = this.state.article;
    if (!article) {
      return <h1>Not found</h1>;
    } else {
      return (
        <div className="post">
          <div className="title">{article.fields.title}</div>
          <div className="description">{article.fields.description}</div>
          <div className="author">author</div>
          <img
            src={
              article.fields.featuredImage.fields &&
              article.fields.featuredImage.fields.file &&
              article.fields.featuredImage.fields.file.url + "?w=200&h=200"
            }
          />
          <div className="date">{article.fields.publishDate}</div>
          <hr />
        </div>
      );
    }
  }
}

export default SingleArticle;
