import { createSlice } from '@reduxjs/toolkit';

export const isLoadingslice = createSlice({
    name: 'isLoading',
    initialState: true,
    reducers: {
        setIsLoading: (state, action) => {
            const loading = action.payload
            return loading
        }
    }
})

export const {setIsLoading } = isLoadingslice.actions;

export default isLoadingslice.reducer;
