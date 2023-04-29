import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Leftnav = () => {
  const [categoriys, setCategoriys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategoriys(data?.default))
      .catch((err) => {
        console.log("the error happend" + err);
      });
  }, []);
  return (
    <div>
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
