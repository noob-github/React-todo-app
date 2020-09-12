import React, { Component } from "react";
import styles from "../css/alltodo.module.css";
import { Link } from "react-router-dom";
class Altodo extends Component {
  constructor(props) {
    super(props);
    this.mydiv = React.createRef();
    this.mydivarray = [];
  }
  render() {
    return (
      <div>
        {this.props.todo.map((todoitem, index) => (
          <div key={index} className="todoitem">
            <div key={index} id={toString(index)} className={styles.card}>
              <div key = {index} ref={this.mydiv} className={styles.main}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {todoitem.title}
                {this.props.addref.onclick=()=>{console.log("hello")}}
              </div>
              <Link
                to="#"
                className={styles.done}
                onClick={() => {
                  let element = document.getElementsByClassName("todoitem")[
                    index
                  ];
                  element.style.display = "none";
                }}
              >
                DONE
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Altodo;
