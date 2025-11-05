import React from "react";
import UserProfile from "./UserProfile";

function MainContent() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
      <UserProfile name="Jane Doe" age={28} bio="Frontend developer passionate about UI design." />
    </main>
  );
}

export default MainContent;
