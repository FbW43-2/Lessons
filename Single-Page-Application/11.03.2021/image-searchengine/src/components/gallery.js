import React from 'react';


class Gallery extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.photos.map(element =>

                        <div key={element.id} className="card p-3" style={{width: '18rem'}}>
                            <img className="card-img-top" height="150" src={element.previewURL} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{element.user}</h5>
                                <p className="card-text" style={{minHeight:'70px'}}>{element.tags}</p>
                                <a href="#" className="btn btn-primary" >preview</a>
                            </div>
                        </div>

                    )}
                </div>
            </div>
        )
    }
}

export default Gallery;