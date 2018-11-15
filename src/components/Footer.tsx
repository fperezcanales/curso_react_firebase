
import * as React from 'react';

import { faRetweet, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const style = {
    button : {
        cursor: 'pointer',
        flex: 1,
        padding: '10px 15px',
        textAlign: 'center',
    },footer : {
        backgroundColor: '#eee',
        display: 'flex',
        marginButton: '-10px',
        marginLeft: '-15px'
    }
} 

class Footer extends React.Component{
    public render() {
        
        return (
            <div style={style.footer}>
                <div style={style.button as React.CSSProperties}> <FontAwesomeIcon icon={faThumbsUp} /> Like</div>
                <div style={style.button as React.CSSProperties}> <FontAwesomeIcon icon={faRetweet} /> Compartir</div>
            </div>
        );
    }
}

export default Footer;