export const getResult = (searchWord) => {
    return Promise((resolve, reject) => {
        fetch(`https://de.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchWord}&format=json&srlimit=10`)
        .then(response =>{
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