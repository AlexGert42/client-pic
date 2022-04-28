import apiAuth from "@api/ApiAuth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";





export const authUser = createAsyncThunk('auth/authUser', async (id: string, { getState, dispatch, rejectWithValue }) => {
    try {
       
        const res = await apiAuth.authUser()
        if (res.status === 200) {
            console.log(res)
            
            return { user: res.data }
        }
       
    } catch (error) {
       
        return rejectWithValue({ errors: error })
    }
})

export const loginUser = createAsyncThunk('auth/loginUser', async (data: any, { getState, dispatch, rejectWithValue }) => {
    try {
       
        const res = await apiAuth.loginUser(data)
        if (res.status === 200) {
            console.log(res)
            
            return { user: res.data }
        }
       
    } catch (error) {
       
        return rejectWithValue({ errors: error })
    }
})






const initialState = {
    auth: false,
    email: '',
    first_name: '',
    user_name: '',

    
}


const slice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(authUser.fulfilled, (state, action) => {
            if (action.payload?.user) {
                return {
                    ...state,
                    auth: true,
                    email: action.payload.user.email,
                    first_name: action.payload.user.first_name,
                    user_name: action.payload.user.user_name,
                }
            }
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            if (action.payload?.user) {
                return {
                    ...state,
                    auth: true,
                    email: action.payload.user.email,
                    first_name: action.payload.user.first_name,
                    user_name: action.payload.user.user_name,
                }
            }
        });
    }
})


export const authReducer = slice.reducer

export const {  } = slice.actions