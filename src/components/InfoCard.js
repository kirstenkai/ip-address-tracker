import React from "react";

const InfoCard = (props) => {
  return (
    <div>
      <h4>IP Address</h4>
  <p>{props.ip}</p>
      <h4>Location</h4>
  <p>{props.city}, {props.country} {props.postalCode}</p>
      <h4>Timezone</h4>
  <p>UTC{props.timezone}</p>
      <h4>ISP</h4>
  <p>{props.isp}</p>
    </div>
  );
};

export default InfoCard;
