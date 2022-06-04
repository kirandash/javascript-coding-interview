// Write an example of fetching data with XMLHttpRequest.
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://catfact.ninja/fact");
xhr.send();
xhr.onload = () => {
    if(xhr.status !== 200) {
        console.error(`Error: ${xhr.status} ${xhr.statusText}`)
    } else {
        console.log(xhr.response);
    }
}

xhr.onerror = () => {
    console.error("xhr request failed");
}
