import React from 'react';
import ReactDom from 'react-dom';

class ShopItem extends React.Component{
	render(){
		return(
			<tr>
				<td>{this.props.value}</td>
				<td>bbb</td>
			</tr>
		)
	}
} 

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			items: ['ttt','yyy','ggg','hhh'],
			others:123456		
		};
		this.testClick = this.testClick.bind(this);
	}
	
	testClick(){
		const data = this.state.items;
		data.push('ooxx');
		this.setState({items:data});
	}
	
	render(){
		return(
			<div>
				<table>
					<tbody>
					{this.state.items.map( item =>(
						<ShopItem value={item} />
					))}
					</tbody>
				</table>
				<button onClick={this.testClick}>Click me</button>
			</div>	
		)
	}
} 

ReactDom.render( <App />, document.getElementById('root'));