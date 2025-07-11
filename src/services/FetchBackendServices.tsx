import axios from "axios";

const serverURL = import.meta.env.VITE_API_URL
const postData = async (url:any, body:any) => {
    try {
        const response = await axios.post(`${serverURL}/${url}`, body)
        const data = response.data
        return data
    }
    catch(e) {
        return null
    }
}
const getData = async (url:any) => {
    try {
        const response = await axios.get(`${serverURL}/${url}`)
        const data = response.data
        return data
    }
    catch(e) {
        return null
    }
}
export { serverURL, postData, getData }