import { useState } from 'react';
import { UserContext } from './context/user';
import Login from './components/login/Login';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { Route, Switch } from 'react-router';
import Reviews from './components/reviews/Reviews';
import { useEffect } from 'react';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('storedUser');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  if (!user) return <Login setUser={setUser} />;

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/reviews" component={Reviews} />
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;
