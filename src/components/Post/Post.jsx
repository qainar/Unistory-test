import React, {useState} from 'react';
import './post.css'
import {useDispatch, useSelector} from "react-redux";
import AddPost from "../AddPost/AddPost";
import {Link} from "react-router-dom";
import {postDelete} from "../../features/posts/postSlice";

const Post = () => {
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false)
    const post = useSelector((state) => state.posts)

    const deleteData = (id) => {
        dispatch(postDelete(id))
    }
    return (
        <div className='container'>
            {open && <AddPost setOpenModal={setOpen}/>}
            <h1>Blog</h1>

            <div className="list">
                {post.map(({id, title, content}, i) => (
                    <div className="item" key={id}>
                        <h4>{title}</h4>
                        <div>
                            {content}
                        </div>
                        <Link to={`/edit-post/${id}`}>
                            <button>Link</button>
                        </Link>
                        <button onClick={()=>{deleteData(id)}}>Delete</button>
                    </div>
                ))}

            </div>


            <button className='add-post' onClick={()=>{setOpen(true)}}>
                Add post +
            </button>


        </div>
    );
};

export default Post;