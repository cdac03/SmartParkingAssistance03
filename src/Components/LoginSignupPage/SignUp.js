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
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={state.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={state.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Address"
          name="address"
          value={state.address}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          placeholder="Contact Number"
          name="contactNo"
          value={state.contactNo}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Vehicle Plate Number"
          name="vehiclePlateNumber"
          value={state.vehiclePlateNumber}
          onChange={handleChange}
          required
        />
        <button style={{marginTop:10}} type="submit">Sign Up</button>
        <div className="mobile-sign-in">
          <span>Already have an account.</span>
          <a href="sign-in">Sign In</a>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
