import {useState} from "react";
import React from 'react';
import './addPost.css'
import {useDispatch, useSelector} from "react-redux";
import {postAdded} from "../../features/posts/postSlice";

const AddPost = ({setOpenModal}) => {
    const dispatch = useDispatch()


    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [err, setErr] = useState(null)

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleContent = (e) => setContent(e.target.value)

    const postsLength = useSelector((state) => state.posts.length)
    console.log(postsLength)

    const clickEvent = () =>{
        if (title && content){
            dispatch(
                postAdded({
                    id: postsLength + 1,
                    title,
                    content
                })
            )

            setErr(null)

        }else setErr('error')

        setTitle('')
        setContent('')
        setOpenModal(false)
    }


    return (
        <div className='background-modal'>
            <div className='container-modal'>
                <h1>Add Blog</h1>
                <div className="form">
                    <input
                        type="text"
                        placeholder='title'
                        className='title'
                        onChange={handleTitle}
                        value={title}
                    />
                    <textarea
                        placeholder='content'
                        className='content'
                        onChange={handleContent}
                        value={content}
                    ></textarea>
                </div>
                <div className="btns">
                    <button className="cancel" onClick={()=>{setOpenModal(false)}}>
                        Cancel
                    </button>
                    {err && err}
                    <button className="access" onClick={clickEvent}>
                        Save
                    </button>
                </div>
            </div>
        </div>

    );
};

export default AddPost;