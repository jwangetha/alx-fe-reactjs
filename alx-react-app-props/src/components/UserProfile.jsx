import { useContext } from 'react';
import UserContext from '../context/UserContext';

const UserProfile = () => {
  const userData = useContext(UserContext);

  return (
    <div style={{ padding: 12, borderRadius: 8, border: "1px solid #e5e7eb", maxWidth: 360 }}>
      <h2>{userData.name}</h2>
      <p>Email: {userData.email}</p>
    </div>
  );
};

export default UserProfile;
