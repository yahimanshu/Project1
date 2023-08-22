const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
   
    const res = await fetch('https://fakestoreapi.com/products');
    const final = await res.json();
    console.log(final)
    return final;
});

const Productslice = createSlice({
    name: 'products' ,
    initialState: {
        data: null,
        status: 'idle',
        error: null,
      },
      reducers: {},
      extraReducers: (builder) => {
        builder
          .addCase(fetchProducts.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
          })
          .addCase(fetchProducts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
      },
    
});

export default Productslice.reducer;





