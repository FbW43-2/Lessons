import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/gallery';
import SearchBar from './components/searchbar';


class App extends React.Component {

    state = {
        photos: []
    }

    savePhotos = (results) => {
        this.setState({ photos: results })
    }

    render() {
        return (
            <>
                <SearchBar save={this.savePhotos} />
                <Gallery photos={this.state.photos} />
            </>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'))