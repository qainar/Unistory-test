import {createSlice} from "@reduxjs/toolkit";


const initialState = [
    {id: 1, title: 'Title', content: 'Content'},
    {id: 2, title: 'Another Title', content: 'Another Content'}
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action){
            state.push(action.payload)
        },
        postUpdated(state, action){
            const {id, title, content} = action.payload
            const existPost = state.find((post) => post.id === id)
            if (existPost){
                existPost.title = title
                existPost.content = content
            }
        },
        postDelete(state, action){
            const id = action.payload
            return  state.filter((post) => post.id !== id)
        }
    }
})
export const {postAdded, postUpdated, postDelete} = postSlice.actions
export default postSlice.reducer