import React, { Component } from "react";
 
class TodoItems extends Component {
  constructor(props) {
        super(props);
     
        this.createTasks = this.createTasks.bind(this);
      }
  createTasks(item) { //to turn the entries to JSX elements, listening to the click and associating with a event handler delete
    return <li onClick={() => this.delete(item.key)} 
              key={item.key}>{item.text}</li>
  }
  delete(key) {
    this.props.delete(key);
  }
 
  render() { //taking the list of todo items passed as entries
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return ( //to show the list of elements on screen
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};
 
export default TodoItems;