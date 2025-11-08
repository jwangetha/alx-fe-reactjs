import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import UserProfile from "./UserProfile";
import Counter from "./Counter";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="James" age={30} bio="A passionate React developer." />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
