import React from 'react';

class Candidates extends React.Component{
    constructor(){
        super();
        this.state = {
            candidateName : [],
            newName:[]
        }
        this.handleClick = this.handleClick.bind(this);
        this.changeClick = this.changeClick.bind(this);
    }

    
    changeClick(event){
        this.setState({...this.state,candidateName:event.target.value})
    }
    
    handleClick(event){
        this.setState({newName:[...this.state.newName,this.state.candidateName],candidateName:""})
    }
    render(){
        return(
        <>
            <h2>Candidate List</h2>
            <input type='text' value={this.state.candidateName} onChange={this.changeClick}></input>
            <button onClick={this.handleClick}>Submit</button>
            <ul>
                 {this.state.newName.map((candidate)=>(
                        <li key={candidate}>{candidate}</li>
                ))} 
                {/* <li>{this.state.newName}</li> */}
            </ul>
        </>
        );
    }
}

export default Candidates;