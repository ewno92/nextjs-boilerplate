import react from "react";
import { useState } from "react";
import { signin, authenticate } from "../../actions/auth";
import Router from "next/router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const SigninComponent = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    message: "",
    showForm: true,
  });

  const { email, password, error, loading, message, showForm } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit");

    setValues({ ...values, loading: true, error: false });
    const user = { email, password };

    signin(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        //save user token to cookie
        //save user info to localstorage
        // authenticate user
        authenticate(data, () => {
          Router.push(`/`);
        });
      }
    });
    console.table({ email, password, error, loading, message, showForm });
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

  const signinform = () => {
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
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

        <Button onClick={handleSubmit}>Sign in</Button>
      </Form>
    );
  };

  return (
    <>
      {showError()}
      {showLoading()}
      {showMessage()}

      {showForm && signinform()}
    </>
  );
};

export default SigninComponent;
