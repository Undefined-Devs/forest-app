import Router from '../router';
import Axios from 'axios';
import JWTDecode from 'jwt-decode';
import { url} from "../env_files/var";

let authenticated = false;
let decodedToken;

export default {

	async authenticate (options) {

		console.log('Authenticating...');

		let token;

		// reauth
		if (!options) {

			console.log('With token...');

			token = this.getToken();

			if (!token) {
				this.logout();
				return false;
			}
		}

		try {
			let response = await Axios.post(`${url}/users/login`, options);
			await this.onAuthentication(response);
			return true;
		} catch (error) {
			throw error;
		}

	},

	async onAuthentication (response) {

		console.log('Authenticated!', response.data);

		const token = response.data.token.token;
		authenticated = true;
		decodedToken = JWTDecode(response.data.token.token);

		localStorage.setItem('forest-app-jwt', token);
		console.log(response.data.user);
		localStorage.setItem('current-user', JSON.stringify(response.data.user));
		Axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
	},

	logout: function () {
		authenticated = false;
		localStorage.removeItem('forest-app-jwt');
		localStorage.removeItem('current-user');
		Axios.defaults.headers.common['Authorization'] = null;
		window.location = '/';
	},

	isAuthenticated: function () {
		return authenticated;
	},

	getToken: function () {
		return localStorage.getItem('forest-app-jwt');
	},

	getUser: function () {
		return localStorage.getItem('current-user') ? JSON.parse(localStorage.getItem('current-user')) : false;
	},

	getDecodedToken: function () {
		return decodedToken;
	}
};
