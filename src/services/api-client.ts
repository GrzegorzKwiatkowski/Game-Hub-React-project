import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '90951a91ed4c48a584653873f9524954'}
})