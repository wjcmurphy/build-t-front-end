import {environment} from '../environments';
import {isEmpty} from 'lodash';
import axios from 'axios';

class AppService {

  constructor() {
    this.http = axios.create({
      baseURL: environment.apiMain,
    });

    this.http.defaults.withCredentials = true;
    this.http.defaults.params = {};
  }

  init(accessToken = '') {
    this.setAccessToken(accessToken);
  }

  setAccessToken(accessToken) {
    if (!isEmpty(accessToken)) {
      this.http.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
    } else {
      delete this.http.defaults.headers.common['Authorization'];
    }
  }

  reset() {
    delete this.http.defaults.headers.common['Authorization'];
    this.http.defaults.params = {};
  }

  getOptions() {
    return this.http.defaults.headers;
  }
}

export default AppService;
