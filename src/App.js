import { useState } from 'react';
import { UserContext } from './context/user';
import Login from './components/login/Login';

function App() {
  const [user, setUser] = useState(null);

  if (!user) return <Login setUser={setUser} />;

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <header className="App-header"></header>
      </div>
    </UserContext.Provider>
  );
}

export default App;
