const getToDos = () => {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/todos').then(response => {
            if(response.status === 200) {
                response.json().then(data => {
                    resolve(data);
                })
            } else {
                reject(response.status)
            }
        })
    })
}

export default getToDos;