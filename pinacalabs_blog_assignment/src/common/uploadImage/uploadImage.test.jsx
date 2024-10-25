import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { UploadImage } from './uploadImage';

const mockFile = new File(['upload image'], 'default.png', { type: 'image/png' });

describe('UploadImage component', () => {
    it('should render the upload button', () => {
        const mockHandleImageChange = jest.fn();
        const formData = { image: null, imagePreview: null };
        
        render(<UploadImage handleImageChange={mockHandleImageChange} formData={formData} />);
        
        // Check if the Upload Image button is rendered
        const uploadButton = screen.getByText(/upload image/i);
        expect(uploadButton).toBeInTheDocument();
    });

    it('should display image preview after file is selected', () => {
        const mockHandleImageChange = jest.fn();
        const formData = { image: mockFile, imagePreview: 'https://via.placeholder.com/150' }; // Mock preview URL
        
        render(<UploadImage handleImageChange={mockHandleImageChange} formData={formData} />);
        
        // Find the image input field and simulate file upload
        const fileInput = screen.getByLabelText('Upload Image');
        fireEvent.change(fileInput, {
            target: { files: [mockFile] },
        });
        
        // Check if the mock image preview is displayed
        const imagePreview = screen.getByAltText('Image Preview');
        expect(imagePreview).toBeInTheDocument();
        expect(imagePreview).toHaveAttribute('src', formData.imagePreview);
    });
});
