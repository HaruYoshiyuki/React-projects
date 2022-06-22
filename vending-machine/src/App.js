import "./App.css";
import { Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Soda from "./Soda";
import Chips from "./Chips";
import Sardines from "./Sardines";
import Navbar from "./Navbar";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Route exact path='/' render={() => <VendingMachine />}></Route>
      <Route exact path='/soda' render={() => <Soda />}></Route>
      <Route exact path='/chips' render={() => <Chips />}></Route>
      <Route exact path='/sardines' render={() => <Sardines />}></Route>
    </div>
  );
}

export default App;
