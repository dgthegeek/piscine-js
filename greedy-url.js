const urlPattern = /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}(\.[a-zA-Z0-9()]{1,6})?(?:[-a-zA-Z0-9()\[\],@:%_\+.~#?&\/=]*)/g;

function getURL(data) {
    const urls = data.match(urlPattern);
    return urls;
}

function greedyQuery(urls) {
    const filteredUrls = urls.filter(url => {
        const queryParameters = url.match(/\?([-a-zA-Z0-9\[\],()@]*=[-a-zA-Z0-9\[\],()@]*&){2,255}([-a-zA-Z0-9\[\],()@]*=[-a-zA-Z0-9\[\],()@]*)/g);
        return queryParameters !== null;
    });
    return filteredUrls;
}

function notSoGreedy(urls) {
    const filteredUrls = urls.filter(url => {
        const queryParameters = url.match(/\?([-a-zA-Z0-9\[\],()@%]*=[-a-zA-Z0-9\[\],()@%]*&){1,2}([-a-zA-Z0-9\[\],()@%]*=[-a-zA-Z0-9\[\],()@%]*)$/g);
        return queryParameters !== null;
    });
    return filteredUrls;
}
