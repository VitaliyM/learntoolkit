import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    posts: [],
}

// Установили axios для запросов
// Для запроса и отправки постов используем jsonplaceholder

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (_, { rejectWithValue }) => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    })

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        }
    }
})

export const { setPosts } = postSlice.actions;
export default postSlice.reducer;


// https://jsonplaceholder.typicode.com/posts