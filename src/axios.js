import axios from 'axios'

const BE_URL=process.env.REACT_APP_BE_BASE_URL

if(!BE_URL) console.log("ERROR: Could not connect to the server.")

const instance = axios.create({
    baseURL: `${BE_URL}/api/v1/`
})

export default instance