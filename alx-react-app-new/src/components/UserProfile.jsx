import React from "react";

function UserProfile({ name, age, bio }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "15px",
        margin: "20px auto",
        width: "250px",
        textAlign: "center",
        boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        {name}
      </h2>

      <p
        style={{
          color: "gray",
        }}
      >
        Age: {age}
      </p>

      <p
        style={{
          fontStyle: "italic",
        }}
      >
        {bio}
      </p>
    </div>
  );
}

export default UserProfile;
