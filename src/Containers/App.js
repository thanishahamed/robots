import React, {Component} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';


// const state = {
// 	robots: 'robots',
// 	searcfield: ''
// }


class App extends Component{

	constructor(){
		super();
		this.state = {
			robots:[],
			searchfield:''
		}
		// console.log('constructor')
	}

	onSearchChange = (event) => {
		this.setState({searchfield : event.target.value});
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
			return (response.json());
		}).then(users=>{
			this.setState({robots:users});
		});
		// console.log('componentDidMount')

	}

	render(){
		const filteredRobots = this.state.robots.filter((robot)=>{
			return(
				robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
			);
		});

		if(this.state.robots.length === 0){
			// console.log('render');
			return (<h1>Loading...</h1>);
				
		}else{
			// console.log('render');
			return(
			<div className='tc'>
	            <h1>{'Robot Friends'.toUpperCase()}</h1>
	            <SearchBox searchChange = {this.onSearchChange}/>
	            <Scroll>
	            	<ErrorBoundary>
	            		<CardList robots={filteredRobots}/>
	            	</ErrorBoundary>
	            </Scroll>
        	</div>
		);
		}
		
		
	}
}

export default App;