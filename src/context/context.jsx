/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { http } from "../utils/constant";
import axios from "axios";
export const EduContext = React.createContext();

export const EduProvider = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("invest-token");
  axios.defaults.headers.common["Authorization"] = "JWT " + token;

  const SignUp = async (data) => {
    try {
      const response = await axios.post(`${http}/api/v1/user/signup`, data);
      return response.data;
    } catch (error) {
      if (error.response.data.data) {
        return toast.error(error.response.data.data[0].password);
      } else {
        return toast.error(error.response.data.message);
      }
    }
  };

  const Login = async (data) => {
    try {
      const response = await axios.post(`${http}/api/v1/user/login`, data);
      return response.data;
    } catch (error) {
      console.log(error.response);
      return toast.error(error.response.data.message);
    }
  };

  const forgetPassword = async (data) => {
    try {
      const response = await axios.post(`${http}/api/v1/user/forgot`, data);
      return response.data;
    } catch (error) {
      console.log(error.response);
      return toast.error(error.response.data.message);
    }
  };

  const verifyEmail = async (data) => {
    try {
      const response = await axios.post(`${http}/api/v1/user/verify`, data);
      return response.data;
    } catch (error) {
      console.log(error.response);
      return toast.error(error.response.data.message);
    }
  };

  const resetPassword = async (data) => {
    try {
      const response = await axios.post(`${http}/api/v1/user/reset`, data);
      return response.data;
    } catch (error) {
      console.log(error.response);
      return toast.error(error.response.data.message);
    }
  };

  const AuthCheck = async () => {
    const token = localStorage.getItem("invest-token");
    if (!token) {
      navigate("/login");
    }
  };

  const Logout = async () => {
    localStorage.removeItem("invest-token");
    navigate("/login");
  };

  const getUserData = async () => {
    const response = await axios.get(`${http}/api/v1/user`);
    return response.data;
  };

  const getPaymentHistory = async () => {
    const response = await axios.get(`${http}/api/v1/payment`);
    return response.data;
  };

  const Update = async (data) => {
    try {
      const response = await axios.patch(`${http}/api/v1/user`, data);
      return response.data;
    } catch (error) {
      return toast.error(error.response.data.message);
    }
  };

  const initializePayment = async (data) => {
    try {
      const response = await axios.post(`${http}/api/v1/payment`, data);
      return response.data;
    } catch (error) {
      return toast.error(error.response.data.message);
    }
  };

  const withdraw = async (data) => {
    try {
      const response = await axios.post(
        `${http}/api/v1/payment/withdraw`,
        data
      );
      return response.data;
    } catch (error) {
      return toast.error(error.response.data.message);
    }
  };

  const verifyPayment = async (data) => {
    try {
      const response = await axios.patch(`${http}/api/v1/payment`, data);
      return response.data;
    } catch (error) {
      return toast.error(error.response.data.message);
    }
  };

  const UploadImage = async (data) => {
    try {
      const response = await axios.patch(`${http}/api/v1/user/image`, data);
      return response.data;
    } catch (error) {
      return toast.error(error.response.data.message);
    }
  };

  const UpdateKIN = async (data) => {
    try {
      const response = await axios.patch(`${http}/api/v1/kin`, data);
      return response.data;
    } catch (error) {
      return toast.error(error.response.data.message);
    }
  };

  const UpdatePassword = async (data) => {
    try {
      const response = await axios.post(`${http}/api/v1/user/password`, data);
      return response.data;
    } catch (error) {
      return toast.error(error.response.data.message);
    }
  };

  return (
    <EduContext.Provider
      value={{
        Login,
        SignUp,
        getUserData,
        Logout,
        AuthCheck,
        Update,
        UpdateKIN,
        UpdatePassword,
        UploadImage,
        initializePayment,
        verifyPayment,
        withdraw,
        getPaymentHistory,
        forgetPassword,
        resetPassword,
        verifyEmail,
      }}
    >
      {children}
    </EduContext.Provider>
  );
};
