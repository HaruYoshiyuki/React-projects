import chipsImg from "./Chips.png";
import "./Chips.css";
import { Link } from "react-router-dom";
import Message from "./Message";
import { Component } from "react";

class Chips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bags: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const x = window.innerWidth * Math.random();
    const y = window.innerHeight * Math.random();
    this.setState(prevState => ({
      bags: [...prevState.bags, { x, y }],
    }));
  }
  render() {
    const bags = this.state.bags.map((bag, i) => (
      <img key={i} src={chipsImg} className='bag' style={{ top: `${bag.x}px`, left: `${bag.y}px` }} alt="bag of lay's chips"></img>
    ));
    return (
      <div className='Chips'>
        <Message>
          <h1>Bags eaten: {this.state.bags.length}</h1>
          <button onClick={this.handleClick}>Nom nom nom</button>
          <h1>
            <Link to='/'>Go Back</Link>
          </h1>
        </Message>
        {bags}
      </div>
    );
  }
}
export default Chips;
