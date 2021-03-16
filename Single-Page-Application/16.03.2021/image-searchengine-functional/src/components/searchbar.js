import React, {useState} from 'react';

import getPhotos from '../api'

const SearchBar = (props) => {

    const initState = {
        searchWord: ''
    }

    const [state, setState] = useState(initState);

    const searchBtnClick = () => {
        // create Api method
        // call api method to do the search
        getPhotos(state.searchWord).then(data => {
            console.log(data);
            props.save(data.hits)
        })
    }

    // render() {
        // console.log(this.state.searchWord);
        return (
            <div className="container">
                <div className="row">
                    <div className="input-group mb-3 mt-3 ">
                        <div className="input-group-prepend">
                            <button onClick={searchBtnClick} className="btn btn-outline-secondary" type="button">Search</button>
                        </div>
                        <input 
                        value={state.searchWord}
                        onChange={e => {setState({searchWord: e.target.value})}}
                        type="text" 
                        className="form-control" 
                        placeholder="Search Word" 
                        aria-label=""
                        aria-describedby="basic-addon1" />
                    </div>
                </div>
            </div>
        )
    // }
}

export default SearchBar;