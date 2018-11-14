
import * as React from 'react';

import {Link} from 'react-router-dom';
import Container from '../../components/Container';

import Button from '../../modulos/Button';
import Card from '../../modulos/Card';
import Center from '../../modulos/Center';

import Input from '../../modulos/Input';

import Title from '../../modulos/Title';

/* const style = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    padding: '10px 15px'
} */

class Login extends React.Component{
    public render() {
        
        return (
            <Container center={true}>
				<Card>
					<Title>Iniciar session</Title>
					<Input label='Correo' placeholder='ingrese correo'/>
					<Input label='Contrasenia' placeholder='ingrese contrasenia'/>
					<Button block={true}>Enviar</Button>
					<Center>
						<Link to='/register'>Ir al registro</Link>
					</Center>
				</Card>
			</Container>
        );
    }
}

export default Login;