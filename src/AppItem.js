import React, { Component } from "react";

export class AppItem extends Component {
  render() {
    let { title, image, category, desc, price, rating } = this.props;
    const sizing = { height: "200px", width: "180px" };
    const fontCategory = {
      color: "blue",
      fontSize: "32px",
      background: "linear-gradient(180deg, #FF5733, #000000)",
      WebkitBackgroundClip: "text",
      // WebkitTextFillColor: "transparent",
      fontWeight: "bold",
    };
    const styling = {
      border: "2px solid black",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      background: "linear-gradient(45deg, #07F3F2, #F507DD)",
    };
    return (
      <div style={styling}>
        <h1>{title}</h1>
        <img src={image} alt="/" style={sizing} />
        <p style={fontCategory}>{category}</p>
        <h3>{desc}</h3>
        <p>&#8377; {price}</p>
        <p>
          &#9733;{": "}
          {rating}
        </p>
      </div>
    );
  }
}

export default AppItem;
