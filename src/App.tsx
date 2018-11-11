import * as React from 'react';

import { connect } from 'react-redux';
import { decrementar, incrementar, setear } from './reducer';

import './App.css';
import UserForm from './modulos/form/UserForm';

class App extends React.Component<IProps, IState> {

	public handleSetear = (e: any) => {
		// const { setear } = this.props;
		const { valor } = this.state;
		this.props.setear(Number(valor));
	}

	public handleChange = (e: any) => {
		const { value } = e.target;
		this.setState({ valor: value });

	}
	public handleSubmit = ( e: any) => {

		alert(JSON.stringify( e));
	}
	public render() {
		// const { incrementar, decrementar, valor } = this.props;

		return (
			<div className="App">
				<UserForm onSubmit={this.handleSubmit } />

				<p>{this.props.valor}</p>
				<button onClick={this.props.incrementar}>Incrementar</button>
				<button onClick={this.props.decrementar}>Decrementar</button>
				<input name='valor' onChange={this.handleChange} />
				<button onClick={this.handleSetear}>Setear</button>

			</div>
		);
	}

}
/*App.propTypes = {
	incrementar: PropTypes.any,
	decrementar: PropTypes.any,
	valor: PropTypes.any,
	setear: PropTypes.any,
}*/
interface IState {
	valor: number;
}

interface IProps {
	setear: any;
	incrementar: any;
	decrementar: any; 
	valor: any;
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
	setear: (payload: any) => dispatch(setear(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);