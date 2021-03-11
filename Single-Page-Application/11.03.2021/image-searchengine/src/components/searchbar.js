import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="input-group mb-3 mt-3 ">
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary" type="button" id="searchBtn">Search</button>
                        </div>
                        <input type="text" className="form-control" placeholder="Search Word" aria-label=""
                            aria-describedby="basic-addon1" />
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBar;