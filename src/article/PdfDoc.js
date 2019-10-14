import React from "react";

class PdfDoc extends React.Component {
  downloadFile(fileURL, fileName) {
    // for non-IE
    if (!window.ActiveXObject) {
      var save = document.createElement("a");
      save.href = fileURL;
      save.target = "_blank";
      var filename = fileURL.substring(fileURL.lastIndexOf("/") + 1);
      save.download = fileName || filename;
      if (
        navigator.userAgent.toLowerCase().match(/(ipad|iphone|safari)/) &&
        navigator.userAgent.search("Chrome") < 0
      ) {
        document.location = save.href;
        // window event not working here
      } else {
        debugger;
        var evt = new MouseEvent("click", {
          view: window,
          bubbles: true,
          cancelable: false
        });
        save.dispatchEvent(evt);
        (window.URL || window.webkitURL).revokeObjectURL(save.href);
      }
    }

    // for IE < 11
    else if (!!window.ActiveXObject && document.execCommand) {
      var _window = window.open(fileURL, "_blank");
      _window.document.close();
      _window.document.execCommand("SaveAs", true, fileName || fileURL);
      _window.close();
    }
  }
  render() {
    const { article } = this.props;
    console.log(article[0].fields.pdfDoc[0].fields.file.url, "art");
    const fileURL = article[0].fields.pdfDoc[0].fields.file.url;
    const fileName = article[0].fields.pdfDoc[0].fields.file.fileName;
    return (
      <div>
        <div className="container">
          <div className="row document ">
            {(article || []).map((article, i) => (
              <div className="document col-md-3">
                {/* REDIRECT to PDF */}
                <a href={article.fields.pdfDoc[0].fields.file.url}>
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
          <div
            className="down"
            onClick={() => this.downloadFile(fileURL, fileName)}
          >
            Hahahah
          </div>
        </div>
      </div>
    );
  }
}

export default PdfDoc;
