async function queryServers(serverType, query) {
    const serverUrl = `/${serverType}?q=${query}`;
    const backupUrl = `/${serverType}_backup?q=${query}`;
    
    const request1 = getJSON(serverUrl);
    const request2 = getJSON(backupUrl);
    
    const response = await Promise.race([request1, request2]);
    return response;
}

async function googleSearch(query) {
    const timeoutPromise = new Promise((resolve) =>
        setTimeout(resolve, 80, Error('timeout'))
    );
    
    const webSearch = queryServers('web', query);
    const imageSearch = queryServers('image', query);
    const videoSearch = queryServers('video', query);

    const response = await Promise.race([timeoutPromise, Promise.all([webSearch, imageSearch, videoSearch])]);

    if (response instanceof Error) {
        throw response;
    }

    return { webResults: response[0], imageResults: response[1], videoResults: response[2] };
}
