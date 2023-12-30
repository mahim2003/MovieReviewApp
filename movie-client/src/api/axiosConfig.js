import axios from 'axios';

export default axios.create({
   baseURL: 'https://2fb9-162-217-238-42.ngrok-free.app', 
   headers: {"ngrok-skip-browser-warning":"true"}
});