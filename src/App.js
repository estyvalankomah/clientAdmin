import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import CarList from "./pages/carList/CarList";
import Car from "./pages/car/Car";
import NewCar from "./pages/newCar/NewCar";

function App() {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/cars">
            <CarList />
          </Route>
          <Route path="/product/:productId">
            <Car />
          </Route>
          <Route path="/newCar">
            <NewCar />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
