import React from 'react';
import UserProfile from './UserProfile';

function MainContent() {
  return (
    <main style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
      <UserProfile name="Alice" age="25" bio="Loves traveling and exploring new cultures." />
      <UserProfile name="Brian" age="30" bio="Enjoys hiking, coding, and photography." />
      <UserProfile name="Cynthia" age="28" bio="Passionate about art and architecture." />
    </main>
  );
}

export default MainContent;
