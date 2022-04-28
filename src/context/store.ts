import ThunkMiddleware from 'redux-thunk'
import { combineReducers } from "redux"
import { configureStore } from '@reduxjs/toolkit'

import { authReducer } from './reducers/authReducer'



const rootReducer = combineReducers({
    auth: authReducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(ThunkMiddleware)
})

export type AppRootState = ReturnType<typeof rootReducer>

export default store