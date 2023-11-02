const iframe = document.querySelector("#iframe");

window.addEventListener('message', function(event) {
    if (event.origin === 'http://localhost:3000') {
        iframe.height = event.data;
    }
});






