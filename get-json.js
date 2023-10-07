async function getJSON(path = '', params = {}) {
    const url = buildUrl(path, params);
    const res = await fetchData(url);
    return handleResponse(res);
}

function buildUrl(path, params) {
    const queryString = Object.keys(params)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&');
    return `${path}?${queryString}`;
}

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    } catch (error) {
        throw new Error(`Failed to fetch data: ${error.message}`);
    }
}

function handleResponse(res) {
    if (res.error) {
        throw new Error(`Request error: ${res.error}`);
    }
    return res.data;
}
