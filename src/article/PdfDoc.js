import React, { PropTypes } from "react";

class PdfDoc extends React.Component {
  render() {
    const { article } = this.props;
    return (
      <div>
        <div className="container">
          <div className="row document ">
            {(article || []).map((article, i) => (
              <div className="document col-md-3">
                {/* REDIRECT to PDF */}
                <a href={article.fields.pdfDoc[0].fields.file.url} download>
                  <span>PDF</span>
                </a>{" "}
                {/* Direct download PDF */}
                <a
                  href={article.fields.pdfDoc[0].fields.file.fileName}
                  download
                >
                  pdf
                </a>
                <div className="title">
                  {article.fields.pdfDoc[0].fields.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default PdfDoc;
