const getPhotos = (searchWord) => {
    
    return new Promise((resolve , reject) => {
        const url = 'https://pixabay.com/api/?key=12000491-41fc68d8c365df909e022ceb6' + '&q=' + searchWord;
        console.log(url);
        fetch(url).then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                    resolve(data)
                })
            } else {
                reject(response.status)
            }
        })
    })
}

export default getPhotos;