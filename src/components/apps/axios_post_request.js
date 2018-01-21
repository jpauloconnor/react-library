import React, { Component } from 'react';
import axios from 'axios';
import FriendList from './friendlist';
//TODO in this file
//Create an axios post that grabs the data from the form
const API_BASE = "http://rest.learncode.academy/api/efa/friends";

 
class FriendForm extends Component {

	constructor(props) {
		super(props);
		this.state = { friends: [] }
		axios.get(API_BASE)
			.then( response => {
				this.setState({ friends: response.data });
				this.renderFriendsList(this.state.friends);
			});
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();

		var name = this.refs.name.value;
		var age = this.refs.age.value;
		var friendsTemp = this.state.friends;
		axios.post(API_BASE, { name, age })
			.then( response => {
				friendsTemp.push(response.data);
				this.setState({ friends: friendsTemp });
				this.renderFriendsList(this.state.friends);
				this.refs.name.value = "";
				this.refs.age.value = "";
			});
	}

	renderFriendsList() {
		//console.log(this.state.friends);
		return <FriendList props={ this.state.friends } />
	}

	render() {
		return (
			<div className="main">
				<div className="mainDiv">

					<h1 className="section-title">React Friends List</h1> 

				
					<hr className="key-points" />

					<p>lorem ipsum.</p>
					<ul>
						<li>lorem ipsum</li>
						<li>lorem ipsum</li>
					</ul>

					<hr className="explanation" />

					<p>lorem ipsum.</p>


					<hr className="codepen" /> {/*change to something else, like example or project*/}

						<div className="col-xs-4">
							<form onSubmit={this.handleSubmit.bind(this)}>
								<h3>Enter a Friend!</h3>

								<fieldset className="form-group">
									<label>Friend's Name:</label>
									<input type="text" 
										   ref="name"
										   name="name"
										   className="form-control" 
									/>
								</fieldset>

								<fieldset className="form-group">
									<label>Friend's Age:</label>
									<input type="text" 
										   ref="age"
										   name="age"
										   className="form-control" 
									/>
								</fieldset>

								<button className="btn btn-success" type="submit">Save Friend</button>
							</form>
						</div>
					<div>
						{this.renderFriendsList(this.state.friends)}
					</div>
				</div>
			</div>
		);
	}
}

export default FriendForm;