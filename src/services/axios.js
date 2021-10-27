import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-clone-backend-krd.herokuapp.com'
})

export default instance;