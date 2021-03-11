import React from 'react';

import getPhotos from '../api'

class SearchBar extends React.Component {

    state = {
        searchWord: ''
    }

    searchBtnClick = () => {
        // create Api method
        // call api method to do the search
        getPhotos(this.state.searchWord).then(data => {
            console.log(data);
            this.props.save(data.hits)
        })
    }

    render() {
        // console.log(this.state.searchWord);
        return (
            <div className="container">
                <div className="row">
                    <div className="input-group mb-3 mt-3 ">
                        <div className="input-group-prepend">
                            <button onClick={this.searchBtnClick} className="btn btn-outline-secondary" type="button">Search</button>
                        </div>
                        <input 
                        value={this.state.searchWord}
                        onChange={e => {this.setState({searchWord: e.target.value})}}
                        type="text" 
                        className="form-control" 
                        placeholder="Search Word" 
                        aria-label=""
                        aria-describedby="basic-addon1" />
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBar;