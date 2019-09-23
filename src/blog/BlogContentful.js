import React, { Component } from "react";
import BlogItem from "./BlogItem";
import CardRef from "./CardRef";
// import { Player } from "video-react";
import client from "../service/client";

var contentful = require("contentful");

class BlogContentful extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      url: [],
      imgList: [],
      pdfList: [],
      videoList: []
    };
  }
  // client = contentful.createClient({
  //   space: "wiwgi0t9ef7y",
  //   accessToken: "XBFYqSfPnertpAMwxoOEDHwUdPX-E-gGYcTYT9WJFnM"
  // });

  componentDidMount() {
    //     this.fetchPosts().then(this.setPosts);
    //   }
    //   fetchPosts = () => this.client.getEntries({ content_type: "firstPage" });
    //   setPosts = response => {
    //     this.setState({
    //       posts: response.items
    //     });
    //     console.log(response.items, "resp content call");
    client.getEntries({ content_type: "blog" }).then(response => {
      response.items.forEach(entry => {
        console.log(response.items, "resp");
        if (entry.fields) {
          this.setState(state => {
            const posts = [...state.posts, entry.fields];
            return {
              posts
            };
          });
        }
      });
    });

    client
      .getAssets()
      .then(assets => {
        debugger;
        assets.items.map((asset, index) => {
          let url = "https:" + asset.fields.file.url + "?w=200&h=200";
          this.setState({ url: url });
          if (asset.fields.file.contentType === "image/jpeg") {
            this.setState(state => {
              const imgList = [...state.imgList, url];
              return {
                imgList
              };
            });
          } else if (asset.fields.file.contentType === "application/pdf") {
            this.setState(state => {
              const pdfList = [...state.pdfList, url];
              return {
                pdfList
              };
            });
          } else {
            this.setState(state => {
              const videoList = [...state.videoList, url];
              return {
                videoList
              };
            });
          }
        });
      })
      .catch(function(e) {
        console.log(e);
      });
  }

  render() {
    const { imgList, pdfList, videoList, posts } = this.state;

    return (
      <div>
        <p>Content goes here</p>
        {/* {posts.map(({ fields }, i) => (
          //   <pre key={i}>{JSON.stringify(fields, null, 2)}</pre>
          <BlogItem key={i} {...fields} />
        ))}
        {/* <div className="images">
          <img src={imgList && imgList.length && imgList[1]} alt="photo"></img>
          <a href={pdfList}>Aici</a> <br />
          <a href={videoList}>Video</a>
        </div> */}
        {(posts || []).map((post, i) => (
          <React.Fragment>
            {post.banner && <BlogItem key={i} post={post.banner} />}
            {/* {post.cardRef && <CardRef key={i} post={post.cardRef} />} */}
          </React.Fragment>
        ))}
        <div className="images">
          {/* {imgList ||
            [].map((img, i) => (
              <img
                src={imgList && imgList.length && imgList[i]}
                alt="photo"
              ></img>
            ))} */}
          <img src={imgList && imgList.length && imgList[1]} alt="photo"></img>
          {/* <a href={pdfList}>Aici</a> <br /> */}
          <a href={videoList}>Video</a>
        </div>
        {/* <Player
          videoWidth="300"
          videoHeight="200"
          isFullscreen="false"
          // autoPlay="true"
          src={videoList[0]}
          // src={videoList && videoList.length && videoList[0]}
          // src="https://videos.ctfassets.net/o6c22u77epoj/4SwXD8lSMr3wyrViuX3kxa/b74fcfd4a24967f09d8c8e933bcb0fc0/cookie_banner.mp4"
          type="video/mp4"
        ></Player> */}

        <video
          style={{ marginTop: "50px" }}
          width="620"
          height="240"
          src={videoList && videoList.length && videoList[0]}
          controls
          autoPlay
        ></video>
      </div>
    );
  }
}
export default BlogContentful;
