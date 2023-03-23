// Отвечает за инициализацию стейта в наш стор
// и за все функции, которые связаны с этим стейтом
import { createSlice } from "@reduxjs/toolkit";

// Начальное состояние
const  initialState = {
    firstName: '',
    lastName: '',
};


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setFirstname: (state, action) => {
            state.firstName = action.payload
        },
    },
})


export const { setFirstname } = userSlice.actions;
export default userSlice.reducer;