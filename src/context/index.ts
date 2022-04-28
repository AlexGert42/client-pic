import store from '@context/store'
import { authUser, loginUser } from '@context/reducers/authReducer'


export const ActionCreators = {
    authUser,
    loginUser,
}

export const context = store