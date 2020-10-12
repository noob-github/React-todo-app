import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../css/navbar.module.css";
class Navbar extends Component {
  render() {
    return (
      <div className={styles.nav}>
        <h1>Todo app !</h1>
        <sub>Now Create Todo with ease</sub>
        <div className={styles.form} id="hidden">
          <input
            type="text"
            id="title"
            value={this.props.input}
            placeholder="Title"
            onChange={(event) => {
              this.props.setInput(event.target.value);
            }}
          />
          {/* <textarea
            id="desc"
            placeholder="Description"
            value={this.props.desc}
            onChange={(event) => {
              this.props.setTextarea(event.target.value);
            }}
          /> */}
          <div>
            <Link
            ref={this.props.addref}
              className={styles.add}
              to="#"
              id="add'"
              onClick={() => {
                this.props.add();
              }}
            >
              Add
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
