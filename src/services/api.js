import axios from 'axios'
export const key ='4b9a7e058ab33d62bd028debd8d68db243ba80ae'
const api = axios.create({
    baseURL: `https://api-ssl.bitly.com/v4/`,
    headers:{
       'Authorization': `Bearer ${key}`
    }
})

export default api

