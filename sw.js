self.addEventListener('fetch', function(event) {
    if (event.request.url.includes('/emoji/v2/72x72/1f506.png')) {
        const request = new Request('https://abs.twimg.com/emoji/v2/72x72/1f506.png', {
            method: 'GET',
            headers: event.request.headers,
        });
        event.respondWith(
            fetch(request)
                .then(response => {
                    return response;
                })
        );
    }
});
