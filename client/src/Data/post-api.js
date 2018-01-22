import axios from "axios";
const postApi = {
  login: credential => axios.post('/api/login', credential).then(data => {
     console.log(`this is a test: ${data}`);
     return data;
  }),
  create: post => axios.post('/api/posts', post).then(results => results.data)
};
export {
postApi as default
};
