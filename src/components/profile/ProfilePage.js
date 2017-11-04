import React, {Component} from 'react';
import {ProfileDisplay} from './ProfileDisplay';

class ProfilePage extends Component {

	state =
	{
		user: {
			nombre: null,
			imagen: null,
			email: null,
		}
	}

	componentWillMount(){
		let user = localStorage.getItem("user");
		if (!user){
			this.props.history.push("/login")
		}
		else {
			user = JSON.parse(user);
			this.setState({user})
			
		
		}
	}


	signOut = () => {
		localStorage.removeItem("user");
		this.props.history.push("/login")
	};

	render(){
		return(
				<div>
					<ProfileDisplay 
					signOut={this.signOut}
					nombre={this.state.user.nombre}
					imagen={this.state.user.imagen}
					email={this.state.user.email}
					/>
					
				</div>
			);
	}
}

export default ProfilePage;