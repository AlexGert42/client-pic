import { authorization } from "@utils/index"
import axios from "axios"


const instance = axios.create({
    baseURL: 'http://localhost:8000/'
})

const apiAuth = {
    
}

export default apiAuth