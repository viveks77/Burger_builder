import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://temp-project-86847.firebaseio.com/'
});

export default instance;