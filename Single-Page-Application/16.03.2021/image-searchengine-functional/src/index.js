import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/gallery';
import Preview from './components/preview';
import SearchBar from './components/searchbar';


const App = () =>  {

    const initState = {
        photos: [],
        choosenImageIndex: null
    }

    const [state, setState] = useState(initState);

    const savePhotos = (results) => {
        setState({ photos: results, choosenImageIndex: null })
    }

    const preivewImage = (idx) =>{
        // class component setState will change only the property that is written on the
        // curly brackets
        // but on functional components setState will override the complete old state
        setState({...state, choosenImageIndex: idx})
        
    }

    // render() {
        console.log(state);
        return (
            <>
                <SearchBar save={savePhotos} />
                
                {state.photos.length && state.choosenImageIndex !== null ? 
                <Preview photoUrl={state.photos[state.choosenImageIndex].largeImageURL}/> 
                : null  }

                <Gallery preview={preivewImage} photos={state.photos} />
                
            </>
        )
    // }
}


ReactDOM.render(<App />, document.getElementById('root'))