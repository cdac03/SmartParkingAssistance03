import React from "react";

const SignUp = () => {
  const [state, setState] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    contactNo: "",
    vehiclePlateNumber: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    const {
      firstName,
      lastName,
      email,
      password,
      address,
      contactNo,
      vehiclePlateNumber,
    } = state;
    alert(`You are registering with the following details:
    First Name: ${firstName}
    Last Name: ${lastName}
    Email: ${email}
    Password: ${password}
    Address: ${address}
    Contact Number: ${contactNo}
    Vehicle Plate Number: ${vehiclePlateNumber}`);

    // Clear form fields
    setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      address: "",
      contactNo: "",
      vehiclePlateNumber: "",
    });
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
        <div className="social-container">
          <a href="#" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span>or use your email for registration</span>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={state.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={state.lastName}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Address"
          name="address"
          value={state.address}
          onChange={handleChange}
        />
        <input
          type="tel"
          placeholder="Contact Number"
          name="contactNo"
          value={state.contactNo}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Vehicle Plate Number"
          name="vehiclePlateNumber"
          value={state.vehiclePlateNumber}
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
