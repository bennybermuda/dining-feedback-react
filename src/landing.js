import React, {useState} from 'react';
import Login from './login';

export default function Dashboard(props) {
	
	return (
		<div class="join-container">
			<header class="join-header">
				<h1><i class="fas fa-smile"></i> Dining Feedback</h1>
			</header>
			<main class="join-main">
				<form action="chat.html">
					<div class="form-control">
						<label for="username">User Option</label>
						<select name="user-option" id="user-option">
							<option value="Student">Student</option>
							<option value="Dining Ambassador" id="DA">Dining Ambassador</option>
						</select>
						<div id="loginfield" style={{display:'none'}}>
							<Login/>
						</div>
						
						
						
					</div>
					<div class="form-control">
						<label for="room">Dining Hall</label>
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
					<button type="submit" class="btn">Join Chat</button>
				</form>
			</main>
		</div>
	);

	}		