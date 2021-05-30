import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
    state.items = [...state.items,action.payload];
    },
    
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
        let newbasket = [...state.items];
      newbasket.splice(index,1);
      state.items = newbasket;
  },
   
    updatequantity: (state, action)=>{
      const index = state.items.findIndex(item => item.id === action.payload.id);
      
      if(index>0)
      {
        if(action.payload.quantity > 1){
          state.items[index].quantity = action.payload.quantity;
        }
      }
    },
    
    setTotalPrice: (state, action)=>{
      const index = state.items.findIndex(item => item.id === action.payload.id);
      state.items[index].totalprice = action.payload.totalprice;
    }
  }
});

export const { addToBasket, removeFromBasket,updatequantity,setTotalPrice} = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectQuantity = (state) => state.basket.quantity;
export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item.totalprice , 0);
export const selectTotalItems = (state) => state.basket.items.reduce((totalItems, item) => totalItems + item.quantity + 1 , 0);


export default basketSlice.reducer;
