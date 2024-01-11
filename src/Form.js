import React, { useState } from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
// import { makeStyles } from "@mui/styles";
import "./styles/form.css";
// import { styled } from "@mui/system";

const Form = () => {
  // State to manage the form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    password: "",
    website: "",
  });

  // State to manage errors
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    mobile: false,
    address: false,
    password: false,
    website: false,
  });

  // Validation function for email
  const validateEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  // Validation function for password
  const validatePassword = (value) => {
    // Password should contain at least one special character and one uppercase letter
    return /^(?=.*[!@#$%^&*])(?=.*[A-Z])/.test(value);
  };

  // Event handler for input change
  const handleInputChange = (event, type) => {
    const { value } = event.target;

    // Update the form data
    setFormData({
      ...formData,
      [type]: value,
    });

    // Perform validation based on whether the field is non-empty
    setErrors({
      ...errors,
      [type]:
        value.trim() === "" ||
        (type === "email" && !validateEmail(value)) ||
        (type === "password" && !validatePassword(value)),
    });
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if any field is empty or fails specific validations
    const hasErrors = Object.keys(formData).some(
      (key) =>
        formData[key].trim() === "" ||
        (key === "email" && !validateEmail(formData[key])) ||
        (key === "password" && !validatePassword(formData[key]))
    );

    // If any field has errors, set errors for all fields
    if (hasErrors) {
      setErrors({
        name: formData.name.trim() === "",
        email: formData.email.trim() === "" || !validateEmail(formData.email),
        mobile: formData.mobile.trim() === "",
        address: formData.address.trim() === "",
        password:
          formData.password.trim() === "" ||
          !validatePassword(formData.password),
        website: formData.website.trim() === "",
      });
      return;
    }

    localStorage.setItem("Data", JSON.stringify(formData));
  };

  return (
    <section className="main-section">
      <section className="form-section">
        <h1 className="form-heading">Login 👇</h1>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
            margin: "1rem",
            height: "100%",
            "& > :not(style)": { m: 1.2, width: "100%", height: "100%" },
          }}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <TextField
            error={errors.name}
            id="name"
            label="Name"
            value={formData.name}
            helperText={errors.name ? "Name is required." : ""}
            onChange={(e) => handleInputChange(e, "name")}
          />
          <TextField
            error={errors.email}
            id="email"
            label="Email"
            value={formData.email}
            helperText={errors.email ? "Invalid email address." : ""}
            onChange={(e) => handleInputChange(e, "email")}
          />
          <TextField
            error={errors.mobile}
            id="mobile"
            label="Mobile"
            value={formData.mobile}
            helperText={errors.mobile ? "Mobile number is required." : ""}
            onChange={(e) => handleInputChange(e, "mobile")}
          />
          <TextField
            error={errors.address}
            id="address"
            label="Address"
            value={formData.address}
            helperText={errors.address ? "Address is required." : ""}
            onChange={(e) => handleInputChange(e, "address")}
          />

          <TextField
            error={errors.website}
            id="website"
            label="Website"
            value={formData.website}
            helperText={errors.website ? "Website URL is required." : ""}
            onChange={(e) => handleInputChange(e, "website")}
          />
          <TextField
            error={errors.password}
            id="password"
            label="Password"
            type="password"
            value={formData.password}
            helperText={errors.password ? "Invalid password." : ""}
            onChange={(e) => handleInputChange(e, "password")}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </section>
    </section>
  );
};

export default Form;
