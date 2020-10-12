import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Altodo from "./components/Altodo";
import Footer from "./components/Footer";
class App extends Component {
  constructor(props) {
    super(props);
    this.addref = null;
    this.state = {
      title: "",
      description: "",
      div: null,
      bool: false,
      todo: [],
    };
  }
  setTitle(val) {
    this.setState({ title: val });
  }
  setDescription(val) {
    this.setState({ description: val });
  }
  addTodo = () => {
     new Promise((res, rej) => {
      this.setState({
        todo: [
          ...this.state.todo,
          {
            title: this.state.title,
            description: this.state.description,
          },
        ],
      });
      setTimeout(() => res(), 10);
    }).then(() => {
      // console.log(this.state.todo);
      // console.log("typeof", typeof this.state.todo);
      this.setState({ title: "", description: "" });
      this.setState({ bool: true });
      setTimeout(() => {
        this.setState({ bool: false });
      }, 100);
    });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar
            setInput={(val) => this.setTitle(val)}
            input={this.state.title}
            desc={this.state.description}
            setTextarea={(val) => this.setDescription(val)}
            addref={(element) => {
              this.addref = element;
            }}
            add={this.addTodo}
          />
          <Altodo
            title={this.state.title}
            description={this.state.description}
            addref = {this.addref}
            bool={this.state.bool}
            todo={this.state.todo}
          />
          <Footer/>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
