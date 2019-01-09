import React, { Component } from "react";
import PropTypes from "prop-types";
import "./MyMountainRegister.css";

class MyMountainRegister extends Component {
  render() {
    const { name, hometown, comments, sign_time, image_url } = this.props.log;
    return (
      <div className="log-entry">
        {this.props.index !== 0 && <hr />}
        {image_url && <img className="user-image" alt="user" src={image_url} />}
        <h4>Name: {name}</h4>
        <h4>Hometown: {hometown}</h4>
        <h4>Comments: {comments} </h4>
        <h4>Date: {sign_time}</h4>
      </div>
    );
  }
}

MyMountainRegister.propTypes = {
  name: PropTypes.string,
  hometown: PropTypes.string,
  comments: PropTypes.string,
  sign_time: PropTypes.string
};

export default MyMountainRegister;
