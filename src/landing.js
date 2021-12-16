import React from 'react';
import Login from './login';


export default class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		var typeEle = document.getElementById("user-option");
		var type = typeEle.options[typeEle.selectedIndex].text;
		var hallEle = document.getElementById("room");
		var hall = hallEle.options[hallEle.selectedIndex].text;
		this.props.setHall(hall);
		this.props.setType(type);
		this.props.onLogin();
	}

	handleChange(e) {
		console.log('select type of student event triggered')
		const name = e.target.value;
		console.log(name);
		if (name === 'Dining Ambassador'){
			document.getElementById("loginfield").style.display = "block";
		} else {
			document.getElementById("loginfield").style.display = "none";
		}
	}

	//used to be a form
	//action="chat.html"
	render() {
		return (
			<div className="join-container">
				<header className="join-header">
					<h1><i className="fas fa-smile"></i> Dining Feedback</h1>
				</header>
				<main className="join-main">
				
						<div className="form-control">
							<label>User Option</label>
							<select name="user-option" id="user-option" onChange={this.handleChange}>
								<option value="Student">Student</option>
								<option value="Dining Ambassador" id="DA">Dining Ambassador</option>
							</select>
							<div id="loginfield" style={{display:'none'}}>
								<Login/>			
							</div>
							
							
							
						</div>
						<div className="form-control">
							<label>Dining Hall</label>
							<select name="room" id="room">
								<option value="Branner">Branner</option>
								<option value="Stern">Stern</option>
								<option value="Casper">Casper</option>
								<option value="Florence Moore">Florence Moore</option>
								<option value="Ricker">Ricker</option>
								<option value="Wilbur">Wilbur</option>
								<option value="Lagunita">Lagunita</option>
								<option value="Arrillaga Family Dining">Arrillaga Family Dining</option>
							</select>
						</div>
						<button type="submit" className="btn" onClick={this.handleClick}>Join Chat</button>
					
				</main>
			</div>
		);
	}
	

}		