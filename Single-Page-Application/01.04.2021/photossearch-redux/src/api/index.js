
export const getData = (searchWord) => {
    return new Promise((resolve, reject) => {
        fetch(`https://pixabay.com/api/?key=12000491-41fc68d8c365df909e022ceb6&q=${searchWord}`).then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            } else {
                reject(response.status)
            }
        }).catch(error => {
            reject(error)
        })
    })
}