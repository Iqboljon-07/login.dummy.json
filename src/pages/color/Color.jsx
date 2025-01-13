import React, { useEffect, useState } from "react";

function Color() {
  const [size, setSize] = useState("medium");

  const [background, setBackground] = useState("#fffffF");
  const [name, setName] = useState("");
  let str = ["laylo", "sabina", "rayhon"];

  useEffect(() => {
    const interval = setInterval(() => {
      let random = Math.floor(Math.random() * str.length);
      setName(str[random]);
    }, 1000);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      let random = "#" + Math.random().toString(16).slice(2, 8);
      setBackground(random);
      console.log(random);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: background }} className="login">
      <h1>{name} </h1>
    </div>
  );
}

export default Color;
