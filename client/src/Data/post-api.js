import axios from "axios";
const postApi = {
  login: credential => axios.post('/api/login', credential),
  getUser: () => axios.get('/api/user_data', data => {
    console.log(typeof(data.username));
    return data;
  }),
  create: post => axios.post('/api/posts', post).then(results => results.data),
  getPosts: () => axios.get('/api/posts/').then(results => results.data)
};
export {
postApi as default
};
