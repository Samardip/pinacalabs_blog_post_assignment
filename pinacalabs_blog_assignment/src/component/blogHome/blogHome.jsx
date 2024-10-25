import React from 'react';
import BlogCard from '../../common/card/card';
import { Button, Pagination } from '@mui/material';
import { Link } from 'react-router-dom';
import { useBlogHome } from '../../useHooks/useBlogHome/useBlogHome';

const BlogHome = () => {
  const {blogs, pages, handlePageChange, pageCardCount} = useBlogHome();
  return (
    <div className='flex flex-col justify-start gap-5 min-h-screen bg-white dark:bg-gray-900 z-0'>
      <div className='flex justify-between items-center'>
        <div className='text-xl font-bold'>My Blogs</div>
        <Link to={'/post/create'}>
          <Button variant="contained" >Add Blog +</Button>
        </Link>
      </div>
      {
        blogs.length === 0 ?
          <div className="flex justify-center items-center text-center h-[300px]">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">No Blogs Found</h1>
          </div>
          :
          <>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {
              blogs.slice((pages-1)*pageCardCount,pages*pageCardCount).map((blogItem) => {
                return <Link to={`/post/${blogItem.id}`}>
                  <BlogCard
                    key={blogItem.id}
                    imgSrc={blogItem.imagePreview}
                    title={blogItem.title}
                    description={blogItem.description}
                  />
                </Link>
              })
            }
          </div>
          <div className='flex justify-end'>
          <Pagination count={Math.ceil(blogs.length/pageCardCount)} variant="outlined" shape="rounded" onChange={handlePageChange}/>
          </div>
          </>
      }
    </div>
  )
}

export default BlogHome;
