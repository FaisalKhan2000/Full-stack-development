import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status); //checking the status of user of user has login or not

  useEffect(() => {
    //TODO: make it more easy to understand

    // if (authStatus ===true){
    //     navigate("/")
    // } else if (authStatus === false) {
    //     navigate("/login")
    // }

    //let authValue = authStatus === true ? true : false

    if (authentication && authStatus !== authentication) {
      navigate("/login"); // pages where auth is required, if authStatus is false , then show the login page
    } else if (!authentication && authStatus !== authentication) {
      navigate("/"); // pages where auth is not required, if authStatus is true, which is not equal to authentication then we should hode hide the login, signup page usinf this logic
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}
