import React, { Component } from "react";
import axios from "axios";
import "./JokeList.css";
import Joke from "./Joke";
import { v4 as uuidv4 } from "uuid";

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10,
  };
  constructor(props) {
    super(props);
    //parse joke from localstorage, return empty array if localstorage is empty
    this.state = {
      jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
      loading: false,
    };
    this.seenJokes = new Set(this.state.jokes.map(j => j.text));
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    //if jokes in empty
    if (this.state.jokes.length === 0) {
      this.getJokes(); //not overiding jokes in localstorage
    }
  }
  async getJokes() {
    try {
      //Load Jokes
      let jokes = [];
      while (jokes.length < this.props.numJokesToGet) {
        let res = await axios.get("https://icanhazdadjoke.com/", {
          headers: { Accept: "application/json" },
        });
        let newJoke = res.data.joke;
        if (!this.seenJokes.has(newJoke)) {
          jokes.push({ id: uuidv4(), text: newJoke, votes: 0 });
        } else {
          console.log("Found a duplicate");
          console.log(newJoke);
        }
      }
      //existing st.jokes combined with new fetched jokes
      this.setState(
        st => ({
          jokes: [...st.jokes, ...jokes],
          loading: false,
        }), //callback function to save new jokes to local storage
        () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
      );
    } catch (e) {
      alert(e);
      this.setState({ loading: false });
    }
  }
  handleVote(id, delta) {
    this.setState(
      st => ({
        jokes: st.jokes.map(j => (j.id === id ? { ...j, votes: j.votes + delta } : j)),
      }),
      //after setstate runs to update to local storage
      () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
    );
  }
  handleClick() {
    this.setState({ loading: true }, this.getJokes);
  }
  render() {
    if (this.state.loading) {
      return (
        <div className="JokeList-spinner">
          <i className="far fa-8x fa-laugh fa-spin"></i>
          <h1 className="JokeList-title">Loading....</h1>
        </div>
      );
    }
    let jokes = this.state.jokes.sort((a, b) => b.votes - a.votes);
    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">
            <span>Dad</span> Jokes
          </h1>
          <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" />
          <button className="JokeList-getmore" onClick={this.handleClick}>
            Fetch Jokes
          </button>
        </div>

        <div className="JokeList-jokes">
          {jokes.map(j => (
            <Joke key={j.id} votes={j.votes} text={j.text} upvote={() => this.handleVote(j.id, 1)} downvote={() => this.handleVote(j.id, -1)} />
          ))}
        </div>
      </div>
    );
  }
}
export default JokeList;
