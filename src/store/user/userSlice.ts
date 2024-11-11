import {createSlice} from "@reduxjs/toolkit";

interface UserState {
    isAuth: boolean,
    token: string,
    email: string,
    id: string,
    is_active: boolean,
    is_verified: boolean
}

const initialState: UserState = {
    isAuth: false,
    token: '',
    email: '',
    id: '',
    is_active: false,
    is_verified: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authentication(state, action){
            state = action.payload
        }
    }
})

export const { authentication } = userSlice.actions
export default userSlice.reducer