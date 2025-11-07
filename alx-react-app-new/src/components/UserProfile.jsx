import React from "react";

function UserProfile({ name, age, bio }) {
  const profileStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "15px",
    margin: "20px auto",
    width: "250px",
    textAlign: "center",
    boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
  };

  const nameStyle = { fontSize: "20px", fontWeight: "bold" };
  const ageStyle = { color: "gray" };
  const bioStyle = { fontStyle: "italic" };

  return (
    <div style={profileStyle}>
      <h2 style={nameStyle}>{name}</h2>
      <p style={ageStyle}>Age: {age}</p>
      <p style={bioStyle}>{bio}</p>
    </div>
  );
}

export default UserProfile;
