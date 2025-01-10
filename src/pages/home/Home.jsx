import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Home() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const PargeCount = 4;

  useEffect(() => {
    function test() {
      axios
        .get("https://dummyjson.com/products", {
          params: {
            limit: PargeCount,
          },
        })

        .then((response) => {
          setData(response.data);
          console.log(response.data);
        });
    }
    test();
  }, []);

  console.log(data);
  return (
    <div className="home">
      {data?.products?.map((val) => (
        <div className="product" key={val.id}>
          <img
            onClick={() => navigate(`/product/${val.id}`)}
            src={val.thumbnail}
            alt=""
          />
          <h4> {val.title} </h4>
        </div>
      ))}
    </div>
  );
}

export default Home;

//emilyspass
//emily
