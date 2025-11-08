import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import UserContext from './UserContext';

function App() {
  const userData = { name: "James", age: 30, bio: "A passionate React developer." };

  return (
    <UserContext.Provider value={userData}>
      <Header />
      <MainContent />
      <UserProfile />
      <Footer />
    </UserContext.Provider>
  );
}

export default App;
