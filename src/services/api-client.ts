import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '6ed1d6474677413dab09a3de7798da2a'
    }
})