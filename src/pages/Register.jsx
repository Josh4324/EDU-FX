import React from "react";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { EduContext } from "../context/context";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Register() {
  const { SignUp } = useContext(EduContext);
  const navigate = useNavigate();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const createSignUpMutation = useMutation(SignUp, {
    onSuccess: (data) => {
      if (data.code === 201) {
        toast.success("User Registration Successful");
        navigate("/login");
      }
    },
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const cred = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    createSignUpMutation.mutate(cred);
  };
  return (
    <div>
      <div>
        <Link to="/">
          <img className="logo" src="./images/logo.png" alt="logo" />
        </Link>
      </div>

      <div style={{ marginTop: "100px" }} className="reg-text1">
        FX Mastery Accelerator
      </div>

      <form onSubmit={handleSubmit} className="rform">
        <div className="rbox">
          <label className="rlabel">FirstName</label>
          <input
            ref={firstNameRef}
            className="rinput"
            placeholder="Enter first name"
            required
          />
        </div>

        <div className="rbox">
          <label className="rlabel">LastName</label>
          <input
            ref={lastNameRef}
            className="rinput"
            placeholder="Enter last name"
            required
          />
        </div>

        <div className="rbox">
          <label className="rlabel">Email Address</label>
          <input
            ref={emailRef}
            className="rinput"
            placeholder="Enter email address"
            required
          />
        </div>

        <div className="rbox">
          <label className="rlabel">Create Password</label>
          <input
            ref={passwordRef}
            className="rinput"
            type="password"
            placeholder="Enter new password"
            required
          />
        </div>

        <button className="rbut">Create Account</button>

        <div className="reg-flex">
          <div className="reg-text2 ">Have an account?</div>

          <Link to="/login">
            <div className="reg-text3">Log in</div>
          </Link>
        </div>
      </form>
    </div>
  );
}
