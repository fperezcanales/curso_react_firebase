
import * as React from 'react';
import Button from 'src/modulos/Button';
import Card from 'src/modulos/Card';


import ProfileImg from 'src/components/Profile';

const style = {
    container: {
        padding: '15px'
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '100px',
    }
}

class Profile extends React.Component{
    public render() {
        return (
            <div style={style.container}>
                <div style={style.row}>
                    <ProfileImg />
                    <Button>Agregar</Button>
                </div>
                <div style={style.row}>
                    <Card><img src='http://placekitten.com/100/100' /></Card>
                    <Card><img src='http://placekitten.com/100/100' /></Card>
                    <Card><img src='http://placekitten.com/100/100' /></Card>
                </div>
                <div style={style.row}>
                    <Card><img src='http://placekitten.com/100/100' /></Card>
                    <Card><img src='http://placekitten.com/100/100' /></Card>
                    <Card><img src='http://placekitten.com/100/100' /></Card>
                </div>
            </div>
        );
    }
}

export default Profile;