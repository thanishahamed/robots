import React, {Component} from 'react';


class ErrorBoundary extends Component{
	constructor(props){
		super(props);
		this.state = {
			isErrorFound : false
		}
	}

	componentDidCatch(error,info){
		this.setState({isErrorFound:true});
	}

	render(){
		if(this.state.isErrorFound){
			return (<h1>Oops There is an error</h1>);
		}else{
			return (this.props.children);
		}
	}
}



export default ErrorBoundary;