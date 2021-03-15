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
        this.setState({ photos: results, choosenImageIndex: null })
    }

    preivewImage = (idx) =>{
        this.setState({choosenImageIndex: idx})
    }

    render() {
        console.log(this.state);
        return (
            <>
                <SearchBar save={this.savePhotos} />
                
                {this.state.photos.length && this.state.choosenImageIndex !== null ? 
                <Preview photoUrl={this.state.photos[this.state.choosenImageIndex].largeImageURL}/> 
                : null  }

                <Gallery preview={this.preivewImage} photos={this.state.photos} />
                
            </>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'))