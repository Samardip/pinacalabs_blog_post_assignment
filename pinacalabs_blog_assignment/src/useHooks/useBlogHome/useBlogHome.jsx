import React, { useContext, useState } from 'react'
import { UserContext } from '../useBlogContext/useBlogContext';
import { useMediaQuery } from '@mui/material';

export const useBlogHome = () => {
    const blogs = useContext(UserContext).blogs;
    const [pages, setPages] = useState(1);
    const handlePageChange = (event, value) => {
        console.log(event, value)
        setPages(value);
    };
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const isMediumScreen = useMediaQuery('(max-width:1200px)');
    const pageCardCount = isSmallScreen ? 5 : isMediumScreen ? 6 : 8
    return {
        blogs, pages, handlePageChange, pageCardCount
    }
}
