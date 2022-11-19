import {configureStore} from '@reduxjs/toolkit'
import postReducer from '../src/features/posts/postSlice'

export default configureStore({
    reducer: {
        posts: postReducer
    },
    devTools: true
})