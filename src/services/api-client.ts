import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '692b761995ac4962951b2ae7e978155b'
    }
})