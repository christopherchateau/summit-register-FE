import React, { Component } from "react";
import PropTypes from "prop-types";
import "./MyMountainRegister.css";

class MyMountainRegister extends Component {
  render() {
    console.log(this.props.log.name);

    const { name, hometown, comments, sign_time, image_url } = this.props.log;
    return (
      <div className="log-entry">
        <hr />
        <h4>Name: {name}</h4>
        <h4>Hometown: {hometown}</h4>
        <h4>Comments: {comments} </h4>
        <h4>Date: {sign_time}</h4>
        {image_url && <img className="user-image" alt="user image" src={image_url} />}
      </div>
    );
  }
}

MyMountainRegister.propTypes = {};

export default MyMountainRegister;
