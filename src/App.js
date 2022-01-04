import "./App.css";
import AddUser from "./Components/AddUser";
import EditUser from "./Components/EditUser";
import AllUsers from "./Components/AllUsers";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import NotFound from "./Components/NotFound";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/AllUsers" component={AllUsers} exact></Route>
        <Route path="/AddUser" component={AddUser} exact></Route>
        <Route path="/EditUser/:id" component={EditUser}></Route>
        <Route component={NotFound}></Route>
      </Switch>

      {/* <CodeForInterview/>
      <AllUsers/>
      <AddUser/> */}
    </div>
  );
}

export default App;
