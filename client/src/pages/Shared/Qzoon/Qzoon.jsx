import React from "react";
import Qzoon1 from "../../../assets/qZone1.png";
import Qzoon2 from "../../../assets/qZone2.png";
import Qzoon3 from "../../../assets/qZone3.png";
const Qzoon = () => {
  return (
    <div style={{ backgroundColor: "lightgray" }} className="w-full rounded">
      <h4 className="ms-2">Q-Zoon</h4>
      <img style={{ maxWidth: "100%" }} src={Qzoon1} alt="" />
      <img style={{ maxWidth: "100%" }} src={Qzoon2} alt="" />
      <img style={{ maxWidth: "100%" }} src={Qzoon3} alt="" />
    </div>
  );
};

export default Qzoon;
