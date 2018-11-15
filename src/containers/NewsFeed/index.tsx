
import * as React from 'react';
import Container from 'src/components/Container';
import Post from 'src/components/Post';


class NewsFeed extends React.Component{
    public render() {
        return (
            <Container>
                <div><Post/></div>
                <div><Post/></div>
            </Container>
        );
    }
}

export default NewsFeed;