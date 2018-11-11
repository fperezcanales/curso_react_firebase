
import * as React from 'react';

class Card extends React.Component{
    public render() {
        
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Card;