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
            <button
                type="submit"
                value="Get posts"
                className='getPostsBtn'
                onClick={() => dispatch(getPosts())}
            >Get posts</button>
            <div className='showPostTitle'>
                {
                    posts?.map( (post) => (
                        <div className='postLine'>&#8658; {post.title}</div>
                    ) )
                }
            </div>
        </div>
    )
}

export default Posts