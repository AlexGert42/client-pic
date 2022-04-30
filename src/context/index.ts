import store from '@context/store'
import { authUser, loginUser, RegisterUser, LoginOrRegister } from '@context/reducers/authReducer'


export const ActionCreators = {
    authUser,
    loginUser,
    RegisterUser,
    LoginOrRegister,
}

export const context = store