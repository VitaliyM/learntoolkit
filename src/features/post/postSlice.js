import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    posts: [],
}

// Установили axios для запросов
// Для запроса и отправки постов используем jsonplaceholder

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (_, { rejectWithValue, dispatch }) => {
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch(setPosts(result.data));
    })

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        }
    },
    extraReducers: {
        [getPosts.fulfilled]: () => console.log('fullfiled'),
        [getPosts.pending]: () => console.log('pending'),
        [getPosts.rejected]: () => console.log('rejected'),
    },
})

export const { setPosts } = postSlice.actions;
export default postSlice.reducer;


// https://jsonplaceholder.typicode.com/posts


//  1:01