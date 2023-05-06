import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    streetName: '',
}

export const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setName: (state, action)=>{
            state.name = action.payload
        },
        setStreetName: (state, action)=>{
            state.streetName = action.payload
        }
    }
})

export const {setName, setStreetName} = userSlice.actions
export default userSlice.reducer