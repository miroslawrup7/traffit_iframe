const iframe = document.querySelector("#iframe");

window.addEventListener('message', function(event) {
    if (event.origin === 'https://miroslawrup7.github.io/traffit7_5/dist/') {
        iframe.height = event.data;
    }
});






