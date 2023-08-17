import React from "react";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { EduContext } from "../context/context";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const { Login } = useContext(EduContext);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const createSignUpMutation = useMutation(Login, {
    onSuccess: (data) => {
      console.log(data);
      if (data.code === 200) {
        localStorage.setItem("edu-token", data.data.token);
        localStorage.setItem("edu-role", data.data.user.role);
        localStorage.setItem("edu-status", data.data.user.hasPaid);
        if (data.data.user.role === "admin") {
          navigate("/admin");
          toast.success("User Login Successful");
        } else if (data.data.user.hasPaid === true) {
          console.log("heeer");
          navigate("/forex");
          toast.success("User Login Successful");
        } else if (data.data.user.hasPaid === false) {
          navigate("/payment");
          toast.success("User Login Successful");
        }
      }
    },
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const cred = {
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

      <div>
        <div className="reg-text1">FX Mastery Accelerator</div>

        <form onSubmit={handleSubmit} className="rform">
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
            <label className="rlabel">Password</label>
            <input
              ref={passwordRef}
              type="password"
              className="rinput"
              placeholder="Enter new password"
              required
            />
          </div>

          <button className="rbut">Log in</button>

          <div className="log-flex">
            <div className="reg-text2 ">Don’t have an account?</div>

            <Link to="/register">
              <div className="reg-text3">Create account</div>
            </Link>
          </div>

          <Link to="/forget">
            <div className="reg-text4">Forgot your password?</div>
          </Link>
        </form>
      </div>
    </div>
  );
}
