import React from "react";

class Document extends React.Component {
  render() {
    const { article } = this.props;
    return (
      <div className="document col-md-3">
        <img
          src={article.banner.fields.image.fields.file.url + "?w=200&h=200"}
          alt="pic"
        />
        <div className="title">{article.banner.fields.title}</div>
      </div>
    );
  }
}

export default Document;
