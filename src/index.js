import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import Title from "./title";
import Filters from "./filters";
import TodoItems from "./todoItems"

// let elem=React.createElement("h3", {}, "Hello React");

// ToDoList structure
// ToDoApp
//  - TodoHeader
//  - TodoList
//    -Item 1  + edit / remove button
//    -Item 2
//     ...
//    -Item N
//  - TodoFilter
//    - complete
//    - active
//    - all

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            itemList: [], 
            input:"",
            showList:[],
            filters: "all",
        };

        this.changeFilter = this.changeFilter.bind(this);
        this.isChecked = this.isChecked.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    getValue = (event) => {  //use onChange to get value
        let value = event.target.value
        this.setState({ input: value })
    }

    addTodo = (e) => {
        if(e.key === "Enter") {
            this.setState( prevState => {
                let itemList = prevState.itemList;
                itemList.push({
                    id: Date.now(),
                    completed: false,
                    text:this.state.input,
                    current:"active"
                });
                console.log(itemList)
                return { itemList: itemList }

            });
            event.target.value = "";
        }
    }

    removeTodo(id) {
        this.setState( prevState => {
            let itemList = prevState.itemList;
            let newArr = itemList.filter( (element) => {
                    if ( element.id !== id ){
                        console.log(element.id)
                        return element;
                    }
                });
            console.log(newArr)
            return { itemList: newArr }
        });
    }

    isChecked(id){  //change state
        this.setState( prevState => {  
            let itemList = prevState.itemList;
            let newArr = itemList.filter( (element) => {
                if ( id === element.id ){
                    return element;
                }
            });
                const index = itemList.findIndex(e => e.id === newArr[0].id);
                if (index != -1) {
                    if (itemList[index].id === newArr[0].id){
                        if(newArr[0].completed === false){
                            itemList[index].completed = true;
                            itemList[index].current = "completed";
                            console.log(newArr[0])
                        } else if (newArr[0].completed === true){
                            itemList[index].completed = false;
                            itemList[index].current = "active";
                            console.log(newArr[0])
                        } 
                    }
                }              
            return { itemList: itemList }
        });
    }

    changeFilter(filter){  //store filter status
        this.setState({filters: filter})
    }

    render(){
        
        let filters = this.state.filters;
        let itemList = this.state.itemList;
        let newList = [];
        if( filters === "active" ){
            newList = itemList.filter( (element) => {
                if ( element.current === "active" ){
                    return element;
                }
            });  console.log(newList)
        }else if ( filters === "completed" ){
            newList = itemList.filter( (element) => {
                if ( element.current === "completed" ){
                    return element;
                }
            }); console.log(newList)
        } else {
            newList = itemList;
        }

        return(
            <div>
                <Title />
                <input id="saIput" type="text" placeholder="add a new todo..." onChange={this.getValue} onKeyPress={this.addTodo}/>
                <Filters changeFilters={this.changeFilter} />
                <TodoItems newList={newList} isChecked={this.isChecked} removeTodo={this.removeTodo}/>
            </div>
        )
    }
}
export default App;

ReactDOM.render(<App/>, document.querySelector("#root"));