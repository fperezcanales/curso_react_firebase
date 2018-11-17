
import * as React from 'react';

const style = {
    img: {
        borderRadius: '100%'
    }
}
class ProfileImg extends React.Component{
    public render() {
        
        return (
            <div>
                <img style={style.img} src='http://placekitten.com/100/100' />
            </div>
        );
    }
}

export default ProfileImg;