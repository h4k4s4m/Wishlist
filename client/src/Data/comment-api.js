import axios from "axios";
const commentApi = {
  login: credential => axios.post('/api/login', credential),
  getUser: () => axios.get('/api/user_data', data => {
    console.log(typeof(data.username));
    return data;
  }),
  create: post => axios.post('/api/comments', post).then(results => results.data),
  getAll: () => axios.get('/api/comments').then(results => results.data)
};
export {
commentApi as default
};
