let request = getRequestObject();

// return an HTTP request object
function getRequestObject() {
    if(window.XMLHttpRequest) {
        return (new XMLHttpRequest());
    }
}

function sendGetRequest(requestUrl, responseHandler) {
    request.onreadystatechange = function() {
        handleResponse(request, responseHandler);
    };
    request.open('GET', requestUrl, true);
    request.send(null); // for POST only   
};

function handleResponse(request, responseHandler) {
    if((request.readyState === 4) && (request.status === 200)) {
        responseHandler(request);
    }
}

document.querySelector('button').addEventListener('click', function() {
    sendGetRequest("data.json", function() {
        let data = request.responseText;
        console.log(JSON.parse(data).jobTitle);
        document.getElementById('content').innerHTML = `
                                                       <div class="load"> 
                                                        <p>Name: ${JSON.parse(data).name}</p> 
                                                        <p>Position: ${JSON.parse(data).jobTitle}</p> 
                                                       </div>
                                                       `;
    });
    
});



