import axios from 'axios'

export default function axiosInstance(){
    return(
        axios.create({
            baseURL: 'http://localhost:8080/api',
            timeout: 5000,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
        })
    )
}