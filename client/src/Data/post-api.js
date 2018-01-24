import axios from "axios";
const postApi = {
  findAllByAccount: accountID => axios.get(`/api/posts/${accountID}`),
  create: post => axios.post('/api/posts', post).then(results => results.data),
  getPosts: () => axios.get('/api/posts/').then(results => results.data)
};
export {
postApi as default
};
