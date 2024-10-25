import { Box, Button, Input } from '@mui/material';
import React from 'react'
import { Send } from '@mui/icons-material';
import { useBlogView } from '../../useHooks/useBlogView/useBlogView';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

const BlogView = () => {
  const { blogData, comments, setComments, handleComment, userCommentsData } = useBlogView();
  return (
    blogData[0] &&
    <div>
      <div>
        <Link to="/">
          <ArrowBackIcon sx={{ position: 'absolute', top: '70px', left: '10px', zIndex: 10, color: 'white' }} />
        </Link>
        <Box
          component="img"
          src={'../assests/default.png'}
          alt="default"
          sx={{ width: '100%', height: '300px', position: 'absolute', left: 0, top: '45px' }}
        />
        <div style={{ position: 'absolute', left: '20px', top: '280px' }}>
          <div className='flex justify-center items-center'>
            <Box
              component="img"
              src={blogData[0].imagePreview?blogData[0].imagePreview:'../assests/default.png'}
              alt="default"
              sx={{ width: '150px', height: '150px', border: '5px solid white', borderRadius: '50%' }}
            />
            <div className='text-2xl font-bold ml-[5px]'>{blogData[0].title.length > 10 ? blogData[0].title.slice(0, 10) + '...' : blogData[0].title}</div>
          </div>
        </div>
        <div className='text-lg font-normal mt-[450px] text-justify'>{blogData[0].description}</div>
      </div>
      <div className='text-xl font-bold my-[20px]'>
        Send comments to a User
      </div>
      <div>
        <Input
          value={comments}
          onChange={(e) => { setComments(e.target.value) }}
          placeholder='add comments'
        />
        <Button ><Send onClick={() => {
          handleComment(comments);
          setComments('');
        }} /></Button>
      </div>
      <div className='my-[20px]'>
        {
          userCommentsData.map((item) => {
            return item.message;
          })
        }
      </div>

    </div>
  )
}
export default BlogView;
