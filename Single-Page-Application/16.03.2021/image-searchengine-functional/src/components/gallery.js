import React from 'react';


const Gallery = (props) => {

    const previewBtnClick = (index) => {
        console.log(index);
        props.preview(index);
    }
    // render() {
        return (
            <div className="container">
                <div className="row">
                    {props.photos.map((element, idx) =>

                        <div key={element.id} className="card p-3" style={{width: '18rem'}}>
                            <img className="card-img-top" height="150" src={element.previewURL} alt={element.tags} />
                            <div className="card-body">
                                <h5 className="card-title">{element.user}</h5>
                                <p className="card-text" style={{minHeight:'70px'}}>{element.tags}</p>

                                <button 
                                onClick={() =>{previewBtnClick(idx)}}  
                                className="btn btn-primary" 
                                >
                                    preview
                                </button>
                            </div>
                        </div>

                    )}
                </div>
            </div>
        )
    // }
}

export default Gallery;