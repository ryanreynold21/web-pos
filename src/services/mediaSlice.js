import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // brandPhoto : [],
    // userPhoto : [],
    // productPhoto : [],
    // stock : [],
    photo : []
}

export const mediaSlice = createSlice({
    name : 'media',
    initialState,
    reducers : {
        addphoto : (state,{payload}) => {
            state.photo = payload
        }
        // addBrandPhoto : (state,{payload}) => {
        //     state.brandPhoto = payload
        // },
        // addProductPhoto : (state,{payload}) => {
        //     state.productPhoto = payload
        // },
        // addUserPhoto : (state,{payload}) => {
        //     state.userPhoto = payload
        // },    
    }
})

export const {addphoto} = mediaSlice.actions;
export default mediaSlice.reducer