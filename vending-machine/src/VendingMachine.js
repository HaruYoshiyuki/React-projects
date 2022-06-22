import VendingMachineImg from "./VendingMachine.png";
import "./VendingMachine.css";
import { Link } from "react-router-dom";
import Message from "./Message";

const VendingMachine = () => {
  return (
    <div className='VendingMachine' style={{ backgroundImage: `url(${VendingMachineImg})` }}>
      <Message>
        <h1>Hello I am a vending machine. what would you like to eat?</h1>
      </Message>
      <Message>
        <Link to='/soda'>Soda</Link>
        <Link to='/chips'>Chips</Link>
        <Link to='/sardines'>Sardines</Link>
      </Message>
    </div>
  );
};
export default VendingMachine;
