import { useState, useEffect } from "react";
import { UserContext } from "./context/user";
import { Route, Switch } from "react-router";
import Login from "./components/login/Login";
import Header from "./components/header/Header";
import Reviews from "./components/reviews/Reviews";
import "./styles/reusable/reusable.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("storedUser");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  if (!user) return <Login setUser={setUser} />;

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Header setUser={setUser} user={user} />
        <Switch>
          <Route exact path="/reviews" component={Reviews} />
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;
