import React from "react";

class Filters extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="filters">
                <div className="active" onClick={(e) => {this.props.changeFilters("active")}}>Active</div>
                <div className="completed" onClick={(e) => {this.props.changeFilters("completed")}}>Completed</div>
                <div className="allItems" onClick={(e) => {this.props.changeFilters("all")}}>Show All</div>
            </div>
        )
    }
}
export default Filters;