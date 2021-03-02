fetch('https://jsonplaceholder.typicode.com/users').then(response => {
    if(response.status === 200) {
        response.json().then(results => {
            // write the rest of the code
            
        })
    }
})