import React from "react";

class ToDo extends React.Component{
    constructor(){
        super();
        this.state = {
            task:"",
            list:[]  
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.resetHandle = this.resetHandle.bind(this);
    }

    handleChange(event){
        this.setState({...this.state,task:event.target.value})
    }

    handleClick(){
        this.setState({
            task:"",
            list:[...this.state.list,this.state.task]
        })
    }
    resetHandle(){
        this.setState({...this.state,list:[]})
    }
    
    render(){
        return(
            <>
                <input type="text" value={this.state.task} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Add Todo</button>
                <ul>
                    {
                        this.state.list.map((task) => (
                            <li key={Math.random()}>{task}</li>
                        ))
                    }
                </ul>
                <button onClick={this.resetHandle}>Reset</button>
            </>
        )
    }
}

export default ToDo;