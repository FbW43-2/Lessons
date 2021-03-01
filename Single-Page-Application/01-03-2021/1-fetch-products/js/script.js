// get HTML elements
const searchBtn = document.getElementById('searchBtn');
const searchInp = document.getElementById('searchInp');
const resultUl = document.getElementById('resultUl');

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
        //console.log(response);
        if(response.status === 200) {
            response.json().then(results => {
                console.log(results.results[0].hits);
                // reset the old results on DOM
                resultUl.innerHTML = "";
                // get the results as an array 
                const hits = results.results[0].hits;
                // loop through the results to render them
                for(let i = 0 ; i < hits.length ; i++){
                    // create template html for each result
                    let htmlProduct = `<li class="list-group-item">
                    <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div class="media-body order-2 order-lg-1">
                            <h5 class="mt-0 font-weight-bold mb-2">${hits[i].name}</h5>
                            <p class="font-italic text-muted mb-0 small">${hits[i].description}</p>
                            <div class="d-flex align-items-center justify-content-between mt-1">
                                <h6 class="font-weight-bold my-2">EURO${hits[i].price}</h6>
                            </div>
                        </div><img src="${hits[i].image}" alt="${hits[i].name}" width="200"
                            class="ml-lg-5 order-1 order-lg-2">
                    </div> 
                </li>`;
                // add the result html to container element [resultUl]
                resultUl.innerHTML += htmlProduct;
                }
            })
        }
    })


});

