// const STORAGE_KEY = 'todos-vuejs';
import axios from 'axios';
import Q from 'q';
import qs from 'qs';

const API_URL = 'http://172.16.21.244/vue-test-api/';

axios.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  if (config.method === 'post') {
    config.data = qs.stringify({
      ...config.data,
    });
  }
  return config;
}, error => Promise.reject(error));

export default {
  fetch() {
    return Q.Promise((resolve, reject) => {
      axios.get(`${API_URL}fetch.php`).then((response) => {
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
  },
  save(todos) {
    return Q.Promise((resolve, reject) => {
      axios.post(`${API_URL}save.php`, {
        data: JSON.stringify(todos),
        action: 'save',
      }).then((response) => {
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
  },
  add(todo) {
    return Q.Promise((resolve, reject) => {
      axios.post(`${API_URL}save.php`, {
        data: JSON.stringify(todo),
        action: 'add',
      }).then((response) => {
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
  },
  remove(todo) {
    return Q.Promise((resolve, reject) => {
      axios.post(`${API_URL}save.php`, {
        data: todo.id,
        action: 'remove',
      }).then((response) => {
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
  },
  modify(todo) {
    return Q.Promise((resolve, reject) => {
      axios.post(`${API_URL}save.php`, {
        data: JSON.stringify(todo),
        action: 'modify',
      }).then((response) => {
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
  },
};
