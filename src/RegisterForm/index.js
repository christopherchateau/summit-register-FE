import React, { Component } from "react";
import { postImage } from "../utilities/helper/apiCalls";
import PropTypes from "prop-types";
import "./RegisterForm.css";

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      hometown: "",
      comments: "",
      imageUrl: "",
      image: false
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    if (this.state.image) {
      const imageUrl = await postImage(this.state.image);
      await this.setState({ imageUrl });
    }
    await this.props.handleLogUpdate(this.state);
  };

  handleImage = async e => {
    !e.target.files[0]
      ? this.setState({ image: false })
      : this.setState({ image: e.target.files[0] });
  };

  render() {
    const { name, hometown, comments } = this.state;
    return (
      <div className="RegisterForm">
        <form className="register-form">
          <h3 className="form-instructions">
            Name:
            <input
              className="input"
              value={name}
              name="name"
              onChange={this.handleChange}
            />
          </h3>
          <h3 className="form-instructions">
            Hometown:
            <input
              className="input"
              value={hometown}
              name="hometown"
              onChange={this.handleChange}
            />
          </h3>
          <h3 className="form-instructions">
            Comments:
            <textarea
              className="input"
              value={comments}
              name="comments"
              onChange={this.handleChange}
            />
          </h3>
          <input type="file" accept="image/*" onChange={this.handleImage} />
        </form>
        <button
          className="submit-btn"
          type="submit"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  }
}

RegisterForm.propTypes = {
  currentDisplay: PropTypes.string,
  handleBackButton: PropTypes.func,
  handleLogUpdate: PropTypes.func
};
export default RegisterForm;
