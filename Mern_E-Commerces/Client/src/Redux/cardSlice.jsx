import { createSlice } from "@reduxjs/toolkit";
// import {message} from "antd";


const cartSlice = createSlice({
    name:"mycart",
    initialState:{
        cart:[]
    },
    reducers:{
        addtocart:(state,actions)=>{
            const proData= state.cart.filter(key=>key.id==actions.payload.id);
            console.log(proData);
            if(proData.length>=1)
            {
                alert("Product Already Added!");
            }
            else{
                state.cart.push(actions.payload);
                alert("Product Succesfully Added!");
            }
        }
    }
})
export const {addtocart}= cartSlice.actions;
export default cartSlice.reducer;
