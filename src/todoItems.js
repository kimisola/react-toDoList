import React from "react";


class TodoItems extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <ul>
                { this.props.newList.map((item) => 
                    <li key={item.id}>
                        <div className="label">
                            <input type="checkbox" onChange={(e) => {this.props.isChecked(item.id) }} checked={item.completed}/>
                            <div style={item.completed ? {textDecoration:"line-through"} : {} }> {item.text} </div>  
                        </div>
                        <div className="buttons">
                            <button className={item.id} type="button" > EDIT </button>
                            <button className={item.id} type="button" onClick={(e) => this.props.removeTodo(item.id)}> X </button>
                        </div>
                    </li>) }
                </ul>
            </div>
        )
    }
}
export default TodoItems;
