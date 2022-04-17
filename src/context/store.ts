import ThunkMiddleware from 'redux-thunk'
import { combineReducers } from "redux"
import { configureStore } from '@reduxjs/toolkit'



const rootReducer = combineReducers({
   
})

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(ThunkMiddleware)
})

export type AppRootState = ReturnType<typeof rootReducer>

export default store