import { Box, Button } from '@mui/material'
import React from 'react'

export const UploadImage = ({ handleImageChange, formData }) => {
    return (
        <><Button
            variant="contained"
            component="label"
        >
            Upload Image
            <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImageChange}
            />
        </Button>
            {formData.image && (
                <>
                    <Box
                        component="img"
                        src={formData.imagePreview}
                        alt="Image Preview"
                        sx={{ width: '100%', height: 'auto', mt: 2 }}
                    />
                </>
            )}</>
    )
}
