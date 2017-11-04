import React from 'react';
import  {Route, Switch} from 'react-router-dom';
import HomePage from './components/home/HomePage'
import LoginPage from './components/login/LoginPage'
import ProfilePage from './components/profile/ProfilePage'
export const Routes = () => (
	<Switch>
		<Route exact path="/login" component={LoginPage} />
		<Route path="/home" component={HomePage} />
		<Route path="/profile" component={ProfilePage} />
		<Route render={()=><h2>404</h2>}/>
	</Switch>
	);