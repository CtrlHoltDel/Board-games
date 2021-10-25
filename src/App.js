import { useState } from 'react';
import { UserContext } from './context/user';
import Login from './components/login/Login';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  const [user, setUser] = useState(null);

  if (!user) return <Login setUser={setUser} />;

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Header />
        <Home />
      </div>
    </UserContext.Provider>
  );
}

export default App;
