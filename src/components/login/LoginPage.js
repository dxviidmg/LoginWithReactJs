import React, {Component} from 'react';
import {LoginDisplay} from './LoginDisplay';


const users = [
	{
		id: 0,
		nombre: "juan",
		email: "juan@hotmail.com",
		password: "j",
		imagen: "http://www.billboard.com/files/media/juan-gabriel-2015-blue-billboard-1548.jpg"
	},
	{
		id: 1,
		nombre: "jose",
		email: "jose@hotmail.com",
		password: "pppppppp",
		imagen: ""		
	},
	{
		id: 2,
		nombre: "rick",
		email: "rick@hotmail.com",
		password: "qwerqwer",
		imagen: ""		
	}
];

function checkUser(login){
	const user = users.filter(u=>u.email === login.email && u.password === login.password);
	if (user.length){
		return user[0];
	}
	else {
		return false;
	}
};

class LoginPage extends Component{

	state = {
		mostrar: false,
		login: {
			mail: null,
			password: null},
		error: null,

	};


// ciclos d vida
	componentWillMount(){
		const user = localStorage.getItem("user")
		if (user){
			this.props.history.push("/login");
		}
	};


	toggleMostrar = () => {
		this.setState({mostrar:!this.state.mostrar});
	};

	saveEmail = (event) => {
		const email = event.target.value;
		this.setState({email});
		console.log(this.state)

	};

	savePassword = (event) => {
		const password = event.target.value;
		this.setState({password})
		console.log (this.state)
	};

	saveInput = (e) => {
		const input = e.target.name;
		const value = e.target.value;
		const login = this.state.login;
		login[input]=value;
		this.setState({login});
		console.log(login)
	};

	onSubmit = (e) => {
		e.preventDefault();
		let user = checkUser(this.state.login);
		if (user){
			user = JSON.stringify(user);
			localStorage.setItem("user", user)
			this.props.history.push("/profile")
		}
		else {
			this.setState({error: "No existes"})
		}
//		console.log("antes: ", user)
//		user = JSON.stringfy(user)
//		console.log("despues: ", user)
//		if (user) {
//			localtorage.setItem("user", user)
//		}
	};

	render (){
		return (
				<div>
					<LoginDisplay
						mostrar={this.state.mostrar}
						toggleMostrar={this.toggleMostrar}
//						saveEmail={this.saveEmail}
//						savePassword = {this.savePassword}
						saveInput={this.saveInput}
						onSubmit={this.onSubmit}
						error={this.state.error}
					/>
				</div>
			);
	}
}


export default LoginPage;