import React, { useContext, useState } from 'react'
import { UserContext } from '../useBlogContext/useBlogContext';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export const useBlogCreate = () => {
    const blogs = useContext(UserContext).blogs;
    const setBlogs = useContext(UserContext).setBlogs;
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      id: uuidv4(),
      title: '',
      description: '',
      image: null,
      imagePreview: '',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setFormData({
          ...formData,
          image: file,
          imagePreview: URL.createObjectURL(file),
        });
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission (e.g., save to backend or display in the console)
      console.log(formData);
      setBlogs([...blogs, formData]);
      navigate('/')
    };
    return {
        formData,setFormData,handleImageChange,handleInputChange,handleSubmit
    }
}
