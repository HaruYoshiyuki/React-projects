import sodaImg from "./Soda.png";
import "./Soda.css";
import { Link } from "react-router-dom";
import Message from "./Message";

const Soda = () => {
  return (
    <div className='Soda'>
      <img src={sodaImg} alt='cocacola can' />
      <Message>
        <h1>SODA IS MY FAVORITE</h1>
        <h3>But now i drink sparkling water instead</h3>
        <p>(i still miss soda but i don't wanna get fat)</p>
        <Link to='/'>Go Back</Link>
      </Message>
      <img src={sodaImg} alt='cocacola can' />
    </div>
  );
};
export default Soda;
