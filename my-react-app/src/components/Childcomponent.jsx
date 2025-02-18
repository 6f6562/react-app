import React from "react";
class Childcomponent extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            Name: 'abc',
            Address: "HCM"
        })
    }

    handleOnchangeInput = (event) =>{
        this.setState({
            Name: event.target.value
        })
    }

    handleOnSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state);
    }
    

    render(){
        let {myProps, sum} = this.props;
        return(
            <>
            <div>
                My name is : {this.state.Name}
                <br />
                Address: {this.state.Address} 
            </div>
            <form action="" onSubmit={(event) => this.handleOnSubmit(event)}>
                <input type="text" onChange={(event) => this.handleOnchangeInput(event)} value={this.state.Name}/>
                <br />
                <button>Submit</button>

            </form>
            </>
        )
    }
}
export default Childcomponent