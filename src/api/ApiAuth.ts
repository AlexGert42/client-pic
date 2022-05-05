import { authorization } from "@utils/index"
import axios from "axios"
import Cookies from "js-cookie"


const instance = axios.create({
    baseURL: 'http://localhost:8000/api/v1/auth/'
})


const apiAuth = {
    async authUser() {
        return await instance.get('users/me/', authorization())
    },
    async loginUser(data: any) {
        const loginUser = await instance.post('token/login/', data)
        Cookies.set('token', loginUser.data.auth_token)
        return await this.authUser()
    },  
    async RegisterUser(data: any) {
        return await instance.post('users/', data)
    },  
    async ResetPassword(data: any) {
        console.log(data);
        
        return await instance.post('users/reset_password/', data)
    },
    async ResetPasswordConfirm(data: any) {
        console.log(data);
        
        return await instance.post('users/reset_password_confirm/', data)
    },

    

}

export default apiAuth                                                                                                 