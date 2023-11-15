import { Component } from "react";



class ErrorHandling extends Component{
    constructor(props){
        super(props)
        this.state = {
            hasError : false
        }
    }


componentDidCatch(error, info){
    this.setState({hasError:true})
};

render(){
    if (this.state.hasError) {

        return <h1>Oooops. Put in correct Location</h1>
    }
    return this.props.children
}
}


export default ErrorHandling;