
import * as React from 'react';
import Footer from './Footer';

const style = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    padding: '10px 15px',
    textAlign: 'center'
} as React.CSSProperties

class Post extends React.Component {
    public render() {

        return (
            <div style={style}>
                <img src='http://placekitten.com/g/200/300' />
                <Footer />
            </div>
        );
    }
}

export default Post;