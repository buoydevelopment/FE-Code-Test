export const makeRemoteRequest = function (url) {
    return fetch(url)
        .then(response => response.json())
        .then(responseJson => responseJson)
        .catch(error => (error));
};