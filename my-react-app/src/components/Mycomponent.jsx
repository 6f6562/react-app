import React from "react";
import Childcomponent from "./Childcomponent";

class Mycomponent extends React.Component{

    sum = (a, b) => {
        return a + b;
    }

    render(){
        let parent = "This is my parent";
        return (
            <div>
                1231231231
                <Childcomponent myProp = {parent} sum = {this.sum}> </Childcomponent>
            </div>
        );
    }
}
export default Mycomponent;