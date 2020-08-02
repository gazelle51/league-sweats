const axios = require('axios');
const logger = require('./logger');

const createClient = (baseUrl, headers) => {
  const options = {
    baseURL: baseUrl,
    headers: headers,
  };

  const client = axios.create(options);

  client.interceptors.request.use(
    (config) => {
      logger.info(`Making ${config.method} request to ${config.baseURL}${config.url}`);
      return config;
    },
    (error) => {
      logger.error(error);
      return Promise.reject(error);
    }
  );

  client.interceptors.response.use(
    (response) => {
      logger.info(
        `Successful ${response.config.method} request to ${response.config.baseURL}${response.config.url}`
      );
      return response;
    },
    (error) => {
      logger.error(
        `Unsuccessful ${error.config.method} request to ${error.config.baseURL}${error.config.url}`
      );
      return Promise.reject(error);
    }
  );

  return client;
};

class ApiClient {
  constructor(baseUrl, headers) {
    this.client = createClient(baseUrl, headers);
  }

  get(url, conf = {}) {
    return this.client
      .get(url, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }

  delete(url, conf = {}) {
    return this.client
      .delete(url, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }

  head(url, conf = {}) {
    return this.client
      .head(url, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }

  options(url, conf = {}) {
    return this.client
      .options(url, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }

  post(url, data = {}, conf = {}) {
    return this.client
      .post(url, data, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }

  put(url, data = {}, conf = {}) {
    return this.client
      .put(url, data, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }

  patch(url, data = {}, conf = {}) {
    return this.client
      .patch(url, data, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }
}

module.exports = {
  ApiClient,
};

// const client = new ApiClient('https://oc1.api.riotgames.com/lol/summoner/v4/summoners/by-name', {
//   'X-Riot-Token': 'RGAPI-ce5034e5-34b3-4a63-ba5c-beeba6806a31',
// });

// client.get('/gazelle51');
