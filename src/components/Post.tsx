
import * as React from 'react';

import { faRetweet, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const style = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    padding: '10px 15px'
}

const styleImg = {
    backgroundColor: '#eee',
    display: 'flex',
    marginButton: '-10px',
    marginLeft: '-15px'
}

const styleLike = {
    cursor: 'pointer',
    flex: 1,
    padding: '10px 15px',
    textAlign: 'center',
} as React.CSSProperties

class Post extends React.Component {
    public render() {

        return (
            <div style={style}>
                <img src='http://placekitten.com/g/200/300' />
                <div style={styleImg}>
                    <div style={styleLike}> <FontAwesomeIcon icon={faThumbsUp} /> Like</div>
                    <div style={styleLike}> <FontAwesomeIcon icon={faRetweet} /> Compartir</div>
                </div>
            </div>
        );
    }
}

export default Post;