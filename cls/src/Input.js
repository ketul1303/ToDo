import React from 'react';
    
class User extends React.Component{

    constructor(){
        super();
        this.state = {
            userName: ""
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleUpClick = this.handleUpClick.bind(this)
    }

    handleClick(event){
        this.setState({...this.state,userName:event.target.value})
    }

    handleUpClick(){
       this.setState( {...this.state,userName:this.state.userName.toUpperCase()});
    }

    render(){
        return(
            <>
            <h2>User</h2>
            <input value={this.state.userName} onChange={this.handleClick}/><br></br>
            <button className='btn' onClick={this.handleUpClick}>Upper Case</button>
            </>
        )
    }
}

// export default User;
export default User;
