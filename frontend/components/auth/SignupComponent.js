import react from "react";
import { useState, useEffect } from "react";
import { signup, isAuth } from "../../actions/auth";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Router from "next/router";
const SignupComponent = () => {
  useEffect(() => {
    isAuth && Router.push("/");
  }, []);

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    loading: false,
    message: "",
    showForm: true,
  });

  const { name, email, password, error, loading, message, showForm } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit");

    setValues({ ...values, loading: true, error: false });
    const user = { name, email, password };

    signup(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          loading: false,
          message: data.message,
          showForm: false,
        });
      }
    });
    console.table({ name, email, password, error, loading, message, showForm });
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
    console.log(e.target.value);
  };

  const showLoading = () =>
    loading ? <div className="alert alert-info">Loading...</div> : "";
  const showError = () =>
    error ? <div className="alert alert-danger">{error}</div> : "";
  const showMessage = () =>
    message ? <div className="alert alert-info">{message}</div> : "";

  const signupform = () => {
    return (
      <Form>
        <Form.Group className="mb-3">
          <Form.Control
            value={name}
            onChange={handleChange("name")}
            type="text"
            className="form-control mb-2"
            placeholder="Type your name"
          />
          <div className="formGroup">
            <input
              value={email}
              onChange={handleChange("email")}
              type="email"
              className="form-control mb-2"
              placeholder="Type your email"
            />
          </div>
          <div className="form-group">
            <input
              value={password}
              onChange={handleChange("password")}
              type="password"
              className="form-control mb-2"
              placeholder="Type your password"
            />
          </div>
        </Form.Group>

        <Button onClick={handleSubmit}>Signup</Button>
      </Form>
    );
  };

  return (
    <>
      {showError()}
      {showLoading()}
      {showMessage()}
      {showForm && signupform()}
    </>
  );
};

export default SignupComponent;
