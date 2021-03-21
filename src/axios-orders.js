import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-shop-a428f-default-rtdb.firebaseio.com/'
});

export default instance;