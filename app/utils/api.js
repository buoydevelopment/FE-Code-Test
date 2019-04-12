async function responseWithHeaders(response, headers) {
  let responseLoadedWithHeaders = {};
  headers.forEach(header => {
    responseLoadedWithHeaders = {
      ...responseLoadedWithHeaders,
      [header]: response.headers.get(header),
    };
  });
  responseLoadedWithHeaders.response = await response.json();
  return responseLoadedWithHeaders;
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export default async function request(url, options) {
  // eslint-disable-next-line no-undef
  const fetchResult = fetch(url, options);
  const response = await fetchResult;
  checkStatus(response);
  return responseWithHeaders(response, ['Authorization']);
}
