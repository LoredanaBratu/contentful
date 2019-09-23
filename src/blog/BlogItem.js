// import React from "react";

// const BlogItem = props =>
// (
//   <div className="box content">
//     <p>here</p>

//     {/* <h1>{props.title}</h1>
//     <p>{props.content}</p> */}
//   </div>
// );
// export default BlogItem;
import React, { Component } from "react";

export default class BlogItem extends Component {
  render() {
    const { post } = this.props;
    console.log(this.props, "props");
    return (
      <div>
        <p>{post.fields.title}</p>
        <img
          src={
            post.fields &&
            post.fields.bannerImg.fields.file.url + "?w=200&h=200"
          }
        />
        <hr />
      </div>
    );
  }
}
