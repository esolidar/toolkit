const axios = require('axios');

const ROOT_URL = 'https://apidev.testesolidar.com/v1/';

module.exports.login = function () {
  const data = {
    email: 'pedro@esolidar.com',
    password: '123456',
  };

  axios
    .post(`${ROOT_URL}auth`, data)
    .then(function (response) {
      const { data } = response.data;

      window.localStorage.setItem('token', data.token);
      console.log(data.token);
    })
    .catch(function (error) {
      console.error(error);
    });
};
