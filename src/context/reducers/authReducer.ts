import apiAuth from "@api/ApiAuth";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";





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

export const RegisterUser = createAsyncThunk('auth/RegisterUser', async (data: any, { getState, dispatch, rejectWithValue }) => {
    try {
       
        const res = await apiAuth.RegisterUser(data)
        if (res.status === 201) {
            return true
        }
       
    } catch (error) {
       
        return rejectWithValue({ errors: error })
    }
})

export const ResetPassword = createAsyncThunk('auth/ResetPassword', async (data: any, { getState, dispatch, rejectWithValue }) => {
    try {
       
        const res = await apiAuth.ResetPassword(data)
        if (res.status === 200) {
            console.log(res)
            return
            
        }
       
    } catch (error) {
       
        return rejectWithValue({ errors: error })
    }
})

export const ResetPasswordConfirm = createAsyncThunk('auth/ResetPasswordConfirm', async (data: any, { getState, dispatch, rejectWithValue }) => {
    try {
       
        const res = await apiAuth.ResetPasswordConfirm(data)
        if (res.status === 200) {
            console.log(res)
            return
            
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

    login: true,

    create_user: false,
 
}


const slice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        LoginOrRegister(state, action: PayloadAction<{value: boolean}>) {
            state.login = action.payload.value
        },
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
        builder.addCase(RegisterUser.fulfilled, (state, action) => {
            if (action.payload) {
                return {
                    ...state,
                    login: true,
                    create_user: true
                }
            }
        });
        builder.addCase(ResetPassword.fulfilled, (state, action) => {
            if (action.payload) {
                return {
                    ...state,
                }
            }
        });
        builder.addCase(ResetPasswordConfirm.fulfilled, (state, action) => {
            if (action.payload) {
                return {
                    ...state,
                }
            }
        });
    }
})


export const authReducer = slice.reducer

export const { LoginOrRegister } = slice.actions