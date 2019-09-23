import React from "react";

class CardRef extends React.Component {
  render() {
    const { post } = this.props;
    console.log(this.props, "ref");
    return (
      <div className="post">
        {/* <img
          src={
            post.fields &&
            post.fields.cardRef[0].fields.cardImages[0].fields.file.url +
              "?w=200&h=200"
          }
          alt="img-card-ref"
        /> */}
        <hr />
      </div>
    );
  }
}

export default CardRef;
