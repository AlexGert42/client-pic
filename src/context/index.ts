import store from '@context/store'
import { authUser, loginUser, RegisterUser, LoginOrRegister, ResetPassword, ResetPasswordConfirm, } from '@context/reducers/authReducer'


export const ActionCreators = {
    authUser,
    loginUser,
    RegisterUser,
    LoginOrRegister,
    ResetPassword,
    ResetPasswordConfirm,
}

export const context = store