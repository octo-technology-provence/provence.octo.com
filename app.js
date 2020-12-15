navigator.serviceWorker.register('/sw.js', { scope: '/' }).then(function(reg) {
    // registration worked
}).catch(function(error) {
    // registration failed
});
