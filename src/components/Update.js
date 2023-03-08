import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Update extends Component {
	constructor(props) {
		super(props);

		this.state = {
			sno:'',
			brand: '',
			model: '',
			price: '',
			top_speed:''
		};

	}
	handleSnoChange = (event) => {
		this.setState({ sno: event.target.value });
	  };
	
	  handleBrandChange = (event) => {
		this.setState({ brand: event.target.value });
	  };
	
	  handleModelChange = (event) => {
		this.setState({ model: event.target.value });
	  };
	
	  handlePriceChange = (event) => {
		this.setState({ price: event.target.value });
	  };
	
	  handleTopspeedChange = (event) => {
		this.setState({ top_speed: event.target.value });
	  };
	
	  
	
	  handleSubmit = (event) => {
		event.preventDefault();
		const data = {
			sno: this.state.sno,
			brand: this.state.brand,
			model: this.state.model,
			price: this.state.price,
			top_speed: this.state.top_speed,
			
		  };
		
		  axios.post('http://127.0.0.1:8080/post', data)
	  };



	render() {
		return (
			<div className="register">
				<form onSubmit={this.handleSubmit}>
					<h2>Update Auto_Pad</h2>
					<div className="sno">
						<input
							type="number"
							placeholder="SNO"
							name="sno"
							value={this.state.sno}
							onChange={this.handleSnoChange}
						/>
					</div>
					<div className="brand">
						<input
							type="text"
							placeholder="Brand"
							name="brand"
							value={this.state.brand}
							onChange={this.handleBrandChange}
						/>
					</div>

					

					<div className="model">
						<input
							type="text"
							placeholder="Model"
							name="model"
							value={this.state.model}
							onChange={this.handleModelChange}
						/>
					</div>
					<div className="price">
						<input
							type="number"
							placeholder="Price"
							name="price"
							value={this.state.price}
							onChange={this.handlePriceChange}
						/>
					</div>
					
					<div className="top_speed">
						<input
							type="number"
							placeholder="Top_Speed"
							name="top_speed"
							value={this.state.top_speed}
							onChange={this.handleTopspeedChange}
						/>
					</div>
					<button type="submit"> Update </button>
				</form>

				<Link to="/">Go back</Link>
			</div>
		);
	}
}

export default Update;
