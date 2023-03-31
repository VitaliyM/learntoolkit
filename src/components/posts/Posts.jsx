import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../features/post/postSlice';
import './posts.css';


const Posts = () => {

    const dispatch = useDispatch();
    const posts = useSelector((state) => state.post.posts)

    return (
        <div className='postsBlock'>
            <h1 className='postsBlockHeader'>Redux Toolkit Async Thunk</h1>
            <form className='inputBlock'>
                <input
                    type="button"
                    value="Get posts"
                    className='getPostsBtn'
                    onClick={ () => dispatch(getPosts()) }

                    />
                <input
                    type="text"
                    ame="Post title"
                    placeholder='Post title'
                    className='inputPostTitle' />
            </form>
        </div>
    )
}

export default Posts