import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";
 
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
          };
     
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
      }
       
      addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
              text: this._inputElement.value, //this object contains the entered text and unique value set with current time
              key: Date.now()
            };
         
            this.setState((prevState) => {
              return { 
                items: prevState.items.concat(newItem) //setting the item property
              };
            });
           
            this._inputElement.value = "";
          }
           
          console.log(this.state.items);
             
          e.preventDefault(); //to make sure that our state isnt modified
     
      }
      deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
       
        this.setState({
          items: filteredItems
        });
      }


  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} //accessing DOM via refs
             placeholder="Enter Note or ToDo">
            </input>
            <button type="submit">Add Note</button>
          </form>
        </div>
        <TodoItems entries={this.state.items}
                    delete={this.deleteItem}/>
      </div>
    );
  }
}
 
export default TodoList;