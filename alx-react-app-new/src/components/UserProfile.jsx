import React from "react";

function UserProfile({ name, age, bio }) {
  return (
    <div style={{ border: '2px solid gray', borderRadius: '10px', padding: '10px', margin: '10px' }}>
      <h2 style={{ color: 'blue' }}>{name}</h2>
      <p>Age: <strong>{age}</strong></p>
      <p>{bio}</p>
    </div>
  );
}

export default UserProfile;
