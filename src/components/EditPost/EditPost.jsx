import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {postUpdated} from "../../features/posts/postSlice";

const EditPost = () => {
    const {pathname} = useLocation()
    const postId = parseInt(pathname.replace("/edit-post/", ""))

    const post = useSelector((state) => state.posts.find((post) => post.id === postId))

    const dispatch = useDispatch()
    const history = useNavigate()

    const [title, setTitle] = useState(post.title)
    const [content, setContent] = useState(post.content)
    const [err, setErr] = useState(null)

    const handleTitle = (e) => setTitle(e.target.value)
    const handleContent = (e) => setContent(e.target.value)

    const clickEvent = () => {
        if (title && content){
            dispatch(
                postUpdated({
                    id: postId,
                    title,
                    content
                })
            )
            setErr(null)
            history('/')
        }else setErr('error')

        setTitle('')
        setContent('')
    }
    return (
        <div className='container'>
            <h1>Edit Blog</h1>
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
                {err && err}
                <button className="access" onClick={clickEvent}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default EditPost;