import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  //   const onSubmit = (e) => {
  //     e.preventDefault();
  //     const search = e.target[0].value;
  //     console.log(search);

  //   };
  useEffect(() => {
    try {
      axios
        .get("https://dummyjson.com/products", {
          params: {
            limit: 30,
          },
        })
        .then((response) => {
          console.log(response.data);
          setData(response.data.products);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  console.log(search);
  console.log(data);

  const filterData = data?.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
  console.log(filterData);
  return (
    <div className="search">
      <div className="container_search">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value.trim())}
          type="text"
          placeholder="search"
        />
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate(-1)}>back</button>
      </div>
      <div className="search_other">
        {filterData?.map((product) => (
          <div className="search_item" key={product.id}>
            <img src={product.thumbnail} alt="" />
            <h4> {product.title} </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;

// {filterData?.map((product) => (
//     <div key={product.id}>
//       <h3>{product.title}</h3>
//       <p>{product.description}</p>
//       <p>{product.price}</p>
//     </div>
//   ))}
