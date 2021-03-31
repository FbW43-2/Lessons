export const getResult = (searchWord) => {
    return new Promise((resolve, reject) => {
        fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchWord}`,{
            mode: 'cors'
        })
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