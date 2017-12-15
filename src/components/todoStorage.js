// const STORAGE_KEY = 'todos-vuejs';
import axios from 'axios';
import Q from 'q';
import qs from 'qs';

const API_URL = 'http://172.16.21.223/vue-test-api/';

axios.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  if (config.method === 'post') {
    config.data = qs.stringify({
      ...config.data,
    });
  }
  return config;
}, error => Promise.reject(error));


function requestApi(url, params, method = 'get') {
  return Q.Promise((resolve, reject) => {
    axios[method](`${API_URL}${url}.php`, params).then((response) => {
      const json = response.data;
      if (parseInt(json.code, 10) === 0) {
        resolve(json.data);
      } else {
        reject(json.message);
      }
    }).catch((error) => {
      console.error(error);
      reject('获取数据失败');
    });
  });
}

export default {
  fetch() {
    return requestApi('fetch');
  },
  save(todos) {
    return requestApi('save', {
      data: JSON.stringify(todos),
      action: 'save',
    }, 'post');
  },
  add(todo) {
    return requestApi('save', {
      data: JSON.stringify(todo),
      action: 'add',
    }, 'post');
  },
  remove(todo) {
    return requestApi('save', {
      data: todo.id,
      action: 'remove',
    }, 'post');
  },
  modify(todo) {
    return requestApi('save', {
      data: JSON.stringify(todo),
      action: 'modify',
    }, 'post');
  },
};
