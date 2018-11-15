import * as React from 'react';
import { Route } from 'react-router';

import { connect } from 'react-redux';
import { decrementar, incrementar, setear } from './reducer';

import './App.css';

// import UserForm from './modulos/form/UserForm';
import Navbar from './components/Navbar';
import Login from './containers/Auth/Login';
import Register from './containers/Auth/Register';
import NewsFeed from './containers/NewsFeed/index';


import miThunk from './thunk';



class App extends React.Component<IProps, IState> {

	public constructor(props) {
		super(props);
		this.props.miThunk('lala');
	}
	public handleSetear = (e: any) => {
		// const { setear } = this.props;
		const { valor } = this.state;
		this.props.setear(Number(valor));
	}

	public handleChange = (e: any) => {
		const { value } = e.target;
		this.setState({ valor: value });

	}
	public handleSubmit = (e: any) => {

		alert(JSON.stringify(e));
	}
	public render() {
		// const { incrementar, decrementar, valor } = this.props;

		return (
			<div>
				<Route exact={true} path='/' component={Login} />
				<Route exact={true} path='/register' component={Register} />
				<Route path='/app' component={Navbar} />
				<Route exact={true} path='/app/newsfeeds' component={NewsFeed} />
			</div>
		);
	}

}
interface IState {
	valor: number;
}
interface IProps {
	setear: any;
	incrementar: any;
	decrementar: any;
	valor: any;
	miThunk: any;
}
const mapStateToProps = (state: any) => {
	// tslint:disable-next-line:no-console
	console.log(state);
	return {
		valor: state.contador
	}
}
const mapDispatchToProps = (dispatch: any) => ({
	decrementar: () => dispatch(decrementar()),
	incrementar: () => dispatch(incrementar()),
	miThunk: (payload: any) => dispatch(miThunk(payload)),
	setear: (payload: any) => dispatch(setear(payload)),
})
export default connect(mapStateToProps, mapDispatchToProps)(App);