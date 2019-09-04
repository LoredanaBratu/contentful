import React, { PropTypes } from "react";

class PdfCard extends React.Component {
  render() {
    const { article } = this.props;

    return (
      <div>
        <div className="container">
          <div className="row document">
            {(article || []).map((article, i) => (
              <div className="document  col-md-3" style={{ marginTop: "15px" }}>
                <img
                  src={article.fields.photos.fields.file.url + "?w=200&h=200"}
                />

                <div className="title">{article.fields.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default PdfCard;
