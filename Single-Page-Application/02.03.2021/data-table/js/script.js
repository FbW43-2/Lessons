fetch('https://jsonplaceholder.typicode.com/users').then(response => {
    if(response.status === 200) {
        response.json().then(results => {
            // write the rest of the code
            console.log(results);
            const data = {
                "headings": [
                    "Name",
                    "UserName",
                    "Email",
                    "Address",
                    "Phone",
                    "Website",
                    "Company"
                ],
                "data": results.map(element => [
                    element.name,
                    element.username,
                    element.email,
                    element.address.street + " ,"+ element.address.suite + " ," + element.address.zipcode + " ," + element.address.city,
                    element.phone,
                    element.website,
                    element.company.name
                ])
            }
            const myTable = document.getElementById('basic');
            const dataTable = new DataTable(myTable, {data});
        })
    }
})


