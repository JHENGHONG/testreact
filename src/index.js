import React from 'react';
import ReactDom from 'react-dom';

class Shop extends React.Component{
	render(){
		return(
			<tr>
				<td>{this.props.value}</td>
				<td>123</td>
			</tr>
		)
	}
	
}

class App extends React.Component{
	
	constructor(props){
		super(props);
		this.state={
			items: ['aaa','bbb','ccc']
		};
		this.testClick = this.testClick.bind(this);
	}
	
	testClick() {
		const data = this.state.items;
		data.push('zzz');
		this.setState({items:data});
	}
	
	
	render(){
		return(
			<div>
			<table>
				<tbody>
					{this.state.items.map( item =>(
						<Shop value={item} />
					))}
				</tbody>
			</table>
			<button onClick={this.testClick}>按鈕</button>
			</div>
		)
	}
}


ReactDom.render( <App />,document.getElementById('root'));