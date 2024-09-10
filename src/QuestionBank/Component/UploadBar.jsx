import React from 'react'
import Button from '@mui/material/Button';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import { modalStyle, uploadBarStyle } from './StyleAndData'
import AddPdf from './AddPdf';

function UploadBar() {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);

    const handleModalClose = (event, reason) => {
        if (reason !== "backdropClick") {
            setOpen(false);
        }
    };

    return (
        <div style={uploadBarStyle}>
            <Modal
                open={open}
                onClose={handleModalClose}
            >
                <Box sx={modalStyle}>
                    <IconButton
                        onClick={handleModalClose}
                        sx={{
                            backgroundColor: '#780000',
                            position: 'absolute',
                            top: 5,
                            right: 5,
                            '&:hover': { background: 'black' },
                        }}
                    >
                        <CloseIcon sx={{ fontSize: 'small', color: '#ffffff' }} />
                    </IconButton>

                    <AddPdf />

                </Box>
            </Modal>

            <InsertDriveFileIcon sx={{ fontSize: 55, color: 'red' }} />
            <Button variant="contained" onClick={handleOpen}>ADD PDF</Button>
        </div>
    )
}

export default UploadBar