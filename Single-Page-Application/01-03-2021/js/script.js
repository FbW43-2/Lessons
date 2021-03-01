// get HTML elements
const searchBtn = document.getElementById('searchBtn');
const searchInp = document.getElementById('searchInp');

// add click event listener to serach button
searchBtn.addEventListener('click', () => {
    //alert("Hi FBW43-2");

    const url = 'https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76&x-algolia-application-id=latency';
    const keyWord = searchInp.value;
    const data = {
        "requests":[
            {"indexName":"ikea","params":"query="+keyWord+"&hitsPerPage=20&page=1" }
        ]
    };

    fetch(url, {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(response => {
        console.log(response);
    })


});

