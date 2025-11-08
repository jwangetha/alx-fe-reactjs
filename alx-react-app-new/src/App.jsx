import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

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
