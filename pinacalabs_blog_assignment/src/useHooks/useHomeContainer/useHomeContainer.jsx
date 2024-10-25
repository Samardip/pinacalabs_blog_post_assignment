import React, { useState } from 'react'

export const useHomeContainer = () => {
    const [blogs, setBlogs] = useState([
        {
            id: '1',
            imagePreview: "../assests/default.png",
            title: "Beautiful Scenery",
            description: "This is a beautiful scenery with a magnificent view of mountains and sky."
        },
        {
            id: '2',
            imagePreview: "../assests/default.png",
            title: "Beautiful Scenery",
            description: "This is a beautiful scenery with a magnificent view of mountains and sky."
        },
        {
            id: '3',
            imagePreview: "../assests/default.png",
            title: "Beautiful Scenery",
            description: "This is a beautiful scenery with a magnificent view of mountains and sky."
        },
        {
            id: '4',
            imagePreview: "../assests/default.png",
            title: "Beautiful Scenery",
            description: "This is a beautiful scenery with a magnificent view of mountains and sky."
        },
        {
            id: '5',
            imagePreview: "../assests/default.png",
            title: "Beautiful Scenery",
            description: "This is a beautiful scenery with a magnificent view of mountains and sky."
        },
        {
            id: '6',
            imagePreview: "../assests/default.png",
            title: "Beautiful Scenery",
            description: "This is a beautiful scenery with a magnificent view of mountains and sky."
        },
        {
            id: '7',
            imagePreview: "../assests/default.png",
            title: "Beautiful Scenery",
            description: "This is a beautiful scenery with a magnificent view of mountains and sky."
        },
        {
            id: '8',
            imagePreview: "../assests/default.png",
            title: "Beautiful Scenery",
            description: "This is a beautiful scenery with a magnificent view of mountains and sky."
        },
        {
            id: '9',
            imagePreview: "../assests/default.png",
            title: "Beautiful Scenery",
            description: "This is a beautiful scenery with a magnificent view of mountains and sky."
        },
        {
            id: '10',
            imagePreview: "../assests/default.png",
            title: "Beautiful Scenery",
            description: "This is a beautiful scenery with a magnificent view of mountains and sky."
        }
    ]);
    return {
        blogs, setBlogs
    }
}
