import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/gallery';
import Preview from './components/preview';
import SearchBar from './components/searchbar';


class App extends React.Component {

    state = {
        photos: [],
        choosenImageIndex: null
    }

    savePhotos = (results) => {
        this.setState({ photos: results })
    }

    preivewImage = (idx) =>{
        this.setState({choosenImageIndex: idx})
    }

    render() {
        return (
            <>
                <SearchBar save={this.savePhotos} />
                <Gallery preview={this.preivewImage} photos={this.state.photos} />
                <Preview />
            </>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'))