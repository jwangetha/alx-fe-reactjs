import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="James" age={30} bio="A passionate React developer." />
      <Footer />
    </div>
  );
}

export default App;
