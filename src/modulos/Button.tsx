
import * as React from 'react';

const style = {
    backgroundColor: '#00D182',
    border: '0px',
    borderRadius: '4px',
    color: '#fff',
    padding: '10px 15px',
}
class Button extends React.Component{
    public render() {
        return (
            <button {...this.props } style={style}/>
        );
    }
}

export default Button;