import {configureStore} from '@reduxjs/toolkit';
import postReducer from '/Users/ankitadixit/Desktop/Mars_Dev_training/React/my-react-redux/src/features/posts/postsSlice.js'
import useReducer from '/Users/ankitadixit/Desktop/Mars_Dev_training/React/my-react-redux/src/features/users/usersSlice.js'

export const store = configureStore({
    reducer:{
        posts: postReducer,
        users:useReducer

    }
})