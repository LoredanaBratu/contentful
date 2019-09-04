import React, { PropTypes } from "react";

class Banner extends React.Component {
  render() {
    const { article } = this.props;
    return (
      <div className="post">
        <div className="title">{article.fields.title}</div>
        <img
          src={
            article.fields &&
            article.fields.image.fields.file.url + "?w=200&h=200"
          }
        />
        <hr />
      </div>
    );
  }
}

export default Banner;
