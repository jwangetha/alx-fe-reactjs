import React from "react";

const UserProfile = (props) => {
  return (
    <div style={{ padding: 12, borderRadius: 8, border: "1px solid #e5e7eb", maxWidth: 360 }}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
