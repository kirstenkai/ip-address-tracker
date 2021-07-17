import React from "react";
import "./InfoCard.scss";

const InfoCard = (props) => {
  return (
    <div className="infoCard">
      <div className="info-section rightBorder">
        <h4>IP Address</h4>
        <p>{props.ip}</p>
      </div>
      <div className="info-section rightBorder">
        <h4>Location</h4>
        <p>
          {props.city}, {props.country} {props.postalCode}
        </p>
      </div>
      <div className="info-section rightBorder">
        <h4>Timezone</h4>
        <p>
          UTC{props.timezone}
        </p>
      </div>
      <div className="info-section">
        <h4>ISP</h4>
        <p>
          {props.isp}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
