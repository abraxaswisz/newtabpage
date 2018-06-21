import React, { Component } from "react";
import unsplash from "../helperUnsplash";

export default class RandomImage extends Component {
  state = {
    imageUrl: ""
  };
  componentDidMount = () => {
    this.renderImage();
  };

  renderImage = () => {
    unsplash.photos
      .getRandomPhoto({ query: "mountains" })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({ imageUrl: json.urls.regular });
      })
      .catch(error => console.log(error));
  };
  render() {
    return (
      <div>
        <style>
          {`
          :root {
            --bg: url(${this.state.imageUrl})
          }
          `}
        </style>
      </div>
    );
  }
}
