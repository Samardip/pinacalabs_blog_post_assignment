import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import { UploadImage } from '../../common/uploadImage/uploadImage';
import { useBlogCreate } from '../../useHooks/useBlogCreate/useBlogCreate';

const BlogCreate = () => {

  const { formData, handleImageChange, handleInputChange, handleSubmit } = useBlogCreate();

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      {/* <div className='flex flex-col md:flex-row w-[100%]'> */}
      {/* <div className='flex flex-col gap-5'> */}
      <TextField
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        fullWidth
        required
      />
      <TextField
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        multiline
        rows={4}
        fullWidth
        required
      />
      {/* </div> */}
      <UploadImage handleImageChange={handleImageChange} formData={formData} />
      {/* </div> */}
      <Button
        type="submit"
        variant="contained"
        color="primary"
      >
        Save
      </Button>
    </Box>
  );
};

export default BlogCreate;
