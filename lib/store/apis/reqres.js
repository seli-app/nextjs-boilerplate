import axios from 'axios';

const reqres = {
  getUsers: () => axios.get('https://reqres.in/api/users'),
  getColors: () => axios.get('https://reqres.in/api/colors')
};

export default reqres;
