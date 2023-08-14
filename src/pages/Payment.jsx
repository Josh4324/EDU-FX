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
        <div style={{ marginTop: "100px" }} className="reg-text1">
          Payment Page
        </div>

        <form onSubmit={handleImageUpdate} className="rform">
          <div className="rbox">
            <div className="text1">Bank Details</div>

            <div className="text">Account Name - Adesanya Joshua Ayodeji </div>
            <div className="text">Account Number - 0173768670 </div>
          </div>

          <div className="rbox">
            <div className="text1">Crypto Detail</div>

            <div className="text">
              Only accepts stable coins - BUSD, USDT, USDC{" "}
            </div>
            <div className="text">Chains Accepted - BSC and POLYGON</div>
            <div className="text">
              Wallet Address - 0x169f4B5f29aE1aC63bdFadD9e8f26de2fac3F83F
            </div>
          </div>

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
