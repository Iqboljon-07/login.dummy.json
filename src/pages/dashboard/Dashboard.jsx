import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import user from "../../assets/user.jpg";
import office from "../../assets/office.jpg";

function Dashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  if (!localStorage.getItem("accessToken")) {
    return <Navigate to="/login" />;
  }

  useEffect(() => {
    (async () => {
      try {
        let response = await axios.get("https://dummyjson.com/auth/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setData(response.data);
      } catch (err) {
        console.error(err);
        // localStorage.removeItem("accessToken");
      }
    })();
  }, []);

  console.log(data);
  return (
    <div className="dashboard">
      <div className="dashboard_item">
        <img src={user} alt="" />

        <div className="user">
          <h1>{`${data?.firstName} ${data?.lastName} `} </h1>
          <p>address: {data?.address.address} </p>
          <p>email: {data?.email} </p>
          <p>phone: {data?.phone} </p>

          <p>username: {data?.username} </p>
          <p>role: {data?.role} </p>
          <p>birthDate:{data?.birthDate} </p>
          <b>company:{data?.company.department} </b>
          <b>company-name:{data?.company.name} </b>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("accessToken");
            navigate("/login");
          }}
        >
          Logging out
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
