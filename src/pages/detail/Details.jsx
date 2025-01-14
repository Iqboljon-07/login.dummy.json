import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosHome } from "react-icons/io";

function Details() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  //   const param = useParams();
  //   console.log(param);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);

  return (
    <div className="details">
      <div className="details_item">
        <div className="svg">
          <IoIosHome
            onClick={() => {
              navigate("/");
            }}
          />
        </div>

        <div className="details_item1">
          <>
            {data?.images?.map((data, inx) => (
              <div key={inx}>
                <img src={data} alt="" />
              </div>
            ))}
          </>
          <div className="brand">
            <h1>{data?.brand} </h1>
            <p>{data.title} </p>
            <h4>{data.price} </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
