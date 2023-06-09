import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Leftnav = () => {
  const [categoriys, setCategoriys] = useState([]);
  useEffect(() => {
    fetch("https://server-muhammadabdulmannan2022.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategoriys(data))
      .catch((err) => {
        console.log("the error happend" + err);
      });
  }, []);
  return (
    <div
      style={{
        position: "sticky",
        top: "180px",
        left: "0",
        height: "calc(100vh - 180px)",
        overflowY: "scroll",
        scrollbarWidth: "none",
      }}
    >
      <h4>All Categoriy</h4>
      {console.log(categoriys)}
      <div className="ps-4">
        {categoriys.map((categoriy) => (
          <p style={{ fontWeight: "bold" }} key={categoriy.id}>
            <Link
              to={`/category/${categoriy.id}`}
              className="text-decoration-none text-secondary"
            >
              {categoriy.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Leftnav;
