import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { UserContext } from '../useBlogContext/useBlogContext';
import io from 'socket.io-client';
const socket = io.connect("http://localhost:3001");

export const useBlogView = () => {
    const { id } = useParams();
    const blogs = useContext(UserContext).blogs;
    const blogData = blogs.filter((blogItem) => {
        return blogItem.id === id;
    });
    const [comments, setComments] = useState('');
    const [userCommentsData, setUserCommentsData] = useState([]);

    const handleComment = (comments) => {
        socket.emit("send_message", { message: comments });
    }
    useEffect(() => {
        socket.on("recieve_message", (data) => {
            setUserCommentsData([...userCommentsData, { message: data.message }]);
        })
    }, [socket])

    return {
        blogData, comments, setComments, handleComment, userCommentsData, setUserCommentsData
    }
}
