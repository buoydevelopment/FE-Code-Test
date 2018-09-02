import config from './config.json';

const ENVIRONMENT = process.env.ENV || 'dev';
const envConfig = config[ENVIRONMENT];
const BASE_URL = envConfig.baseURL;

const toQueryString = (queryParameters) => {
    let objectKeys = Object.keys(queryParameters || {});
    let queryString = '';

    if (objectKeys.length) {
        queryString = '?' + objectKeys
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryParameters[key])}`)
        .join('&');
    }

    return queryString;  
};

export default (options) => {
    const { serviceName, queryParameters } = options;
    const SERVICE_NAME = envConfig.endpoints[serviceName];
    const serviceUrl = `${BASE_URL}${SERVICE_NAME}${toQueryString(queryParameters)}`;

    return fetch(serviceUrl, {method: 'GET'});
};
