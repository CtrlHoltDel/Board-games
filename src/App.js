import { useState, useEffect } from "react";
import { UserContext } from "./context/user";
import { Route, Switch } from "react-router";
import Login from "./components/login/Login";
import Header from "./components/header/Header";
import Reviews from "./components/reviews/Reviews";
import "./styles/reusable/reusable.css";
import Review from "./components/review/Review";
import AddReview from "./components/addreview/AddReview";
import Profile from "./components/user/Profile";

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
          <Route exact path="/reviews/:reviewId" component={Review} />
          <Route exact path="/add_review">
            {(props) => <AddReview user={user} />}
          </Route>
          <Route exact path="/community/:username" component={Profile} />
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;
