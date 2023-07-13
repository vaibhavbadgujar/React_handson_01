import React,{Component} from "react"

export class firstclasscomponent extends Component {
    render(){
        return (
            <div className="container2">
            <h1>This is created using class Component</h1>
            <p className="para1">This is done using external CSS</p>
            <p style={{color:"blue"}}>This is done using inline CSS</p>
        </div>
    )
    }
}
export default firstclasscomponent