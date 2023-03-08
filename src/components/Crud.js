import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Crud extends Component {

	render() {
		return (
			
			<div className="register">
			        
				<form className='box1' onSubmit={this.displayLogin}>
					<h2 className='text'>Auto_Pad</h2>
					<div>
				<Link to="/Create1">
					<input type="submit" value="Add New Car" /></Link>
				<Link to="/Update">
				<input type="submit" value="Update Car Details" />
				</Link>
				<Link to="/Delete">
				<input type="submit" value="Delete Car Detail" />
				</Link>
				<Link to="/show">
					<input type="submit" value="Show Car Details" />
					</Link>
					</div>
				</form>

			</div>
		);
	}
}

export default Crud;