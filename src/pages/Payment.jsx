import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { EduContext } from "../context/context";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Payment() {
  const { UploadImage, getUserData } = useContext(EduContext);
  const imageRef = useRef();
  const navigate = useNavigate();

  const { data } = useQuery("user", getUserData, {
    // Enable caching by setting cacheTime
    cacheTime: 60000, // 1 minute (in milliseconds)
  });

  useEffect(() => {
    console.log(data);
    console.log(data?.data?.hasPaid);
    if (data?.data?.hasPaid === true) {
      navigate("/forex");
    }
  }, []);

  const imageUpdate = useMutation(UploadImage, {
    onSuccess: (data) => {
      console.log(data);
      if (data.code === 200) {
        toast.success("Image upload complete");
        //window.location.reload();
      } else {
        toast.error("An error occured");
      }
    },
  });

  const handleImageUpdate = (evt) => {
    evt.preventDefault();
    toast.info("Updating Information.....");
    const file = imageRef.current.files[0];
    let formData = new FormData();
    console.log(file);
    formData.append("image", file);
    imageUpdate.mutate(formData);
  };

  return (
    <div>
      <div>
        <Link to="/">
          <img className="logo" src="./images/logo.png" alt="logo" />
        </Link>
      </div>

      <div>
        <div className="pay-text1">Payment options</div>

        <div className="pay-box">
          <div className="pay-text2">Olusegun Osundina</div>
          <div className="pay-text2"> 0067427232</div>
          <div className="pay-text2">Access bank</div>
        </div>

        <div className="pay-box">
          <div className="pay-text2">Wallet Address</div>
          <div className="pay-text2 wallet">
            0x8E65b44c8cc04e9999fffcC39dD4CA3bAC580E81
          </div>
          <div className="pay-text2">Deposit BUSD (Binance Smart Chain)</div>
        </div>

        <form onSubmit={handleImageUpdate} className="rform">
          <div style={{ marginTop: "50px" }} className="rbox">
            <label
              style={{ fontSize: "20px", marginBottom: "10px" }}
              className="rlabel"
            >
              Upload Payment Evidence
            </label>
            <input ref={imageRef} type="file" required />
          </div>

          <button className="rbut">Confirm Payment</button>
          <Link to="/forex">
            <button className="but">Get Full Access</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
