
import * as React from 'react';
import { Link } from 'react-router-dom';

import { faNewspaper, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const style = {
    link:{
        color: '#555',
        textDecoration: 'none'
    }, navbar: {
        borderBotton: 'solid 1px #aaa',
        padding: '10px 15px'
    }, profile: {
        float: 'right'
    }
}
class Navbar extends React.Component{
    public render() {
        
        return (
            <div style={style.navbar}> 
                <Link style={style.link} to='/app/newsfeeds'><FontAwesomeIcon icon={faNewspaper} />Instacool</Link>
                <div style={style.profile as React.CSSProperties }>
                    <Link style={style.link} to='/app/profile'><FontAwesomeIcon icon={faUser} />Perfil</Link>
                </div>
            </div>
        );
    }
}

export default Navbar;