import React, { useState, useContext } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, Modal, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import axios from 'axios';
import "./Card.css";
import UpdatePdf from './UpdatePdf';
import { AuthContext } from "../../Auth/AuthContext";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#00000000',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
}));

function Card(props) {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const auth = useContext(AuthContext);

    const handleOpenAddModal = () => {
        setIsAddModalOpen(true);
    };

    const handleCloseAddModal = () => {
        setIsAddModalOpen(false);
    };

    const handleModalClose = (event, reason) => {
        // Prevent closing on backdrop click
        if (reason !== 'backdropClick') {
            handleCloseAddModal();
        }
    };

    const handleDelete = async () => {
        try {
            const token = "Bearer " + JSON.parse(localStorage.getItem("token"));

            const response = await axios.post(
                'http://localhost:3000/question/delete',
                {
                    pdfPath: props.path,
                    qID: props.questionID
                },
                {
                    headers: {
                        Authorization: token
                    }
                }
            );
            console.log(response.data);
            props.fetch();
        } catch (error) {
            console.error('Error fetching questions:', error);
        }

    };




    return (
        <Box
            sx={{
                flexGrow: 1,
                borderRadius: "10px",
                width: "75%",
                margin: "2% 12.5%",
                boxShadow: "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
                transition: "0.5s linear",
                '&:hover': {
                    transform: "scale(1.01)",
                    border: "1px solid #78000080"
                },
            }}
        >
            <Grid container spacing={1}>
                <Grid item xs={8}>
                    <Item>
                        <h2>{props.name}</h2>
                        <h3>{props.code}</h3>
                        <p>{props.type} Examination - {props.trimester} {props.year}</p>
                    </Item>
                </Grid>

                <Grid item xs={4}>
                    <Item>
                        <div className='proPic'>
                            {auth.id === props.owner &&
                                (<>
                                    <DeleteIcon onClick={handleDelete} style={{ cursor: 'pointer' }} />
                                    <MoreVertIcon onClick={handleOpenAddModal} style={{ cursor: 'pointer' }} />
                                </>
                                )}
                            <Avatar
                                sx={{ height: 25, width: 25, marginRight: 2, cursor: 'pointer' }}
                                alt="Profile Image"
                                src={`http://localhost:3000/${props.userImg}`}
                                onClick={() => { window.location.href = 'http://localhost:5173/myprofile'; }}
                            />
                        </div>
                    </Item>
                </Grid>

                <Grid item xs={12}>
                    <Item>
                        <div className='downloadBtn'>
                            <Button
                                variant="contained"
                                onClick={() => window.open(`http://localhost:3000/${props.path}`, "_blank")}
                            >
                                <DownloadForOfflineOutlinedIcon sx={{ marginRight: 1 }} /> Download PDF
                            </Button>
                        </div>
                    </Item>
                </Grid>
            </Grid>

            <Modal open={isAddModalOpen} onClose={handleModalClose}>
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "60vh",
                        backgroundColor: "white",
                        borderRadius: "4px",
                    }}
                >
                    <UpdatePdf
                        courseName={props.name}
                        courseCode={props.code}
                        examType={props.type}
                        trimester={props.trimester}
                        year={props.year}
                        department={props.department}
                        path={props.path}
                    />

                    <IconButton
                        onClick={handleCloseAddModal}
                        sx={{
                            position: 'absolute',
                            top: '12px',
                            right: '10px',
                            backgroundColor: '#780000',
                            '&:hover': { background: 'black' }
                        }}
                    >
                        <CloseIcon sx={{ fontSize: 'small', color: '#ffffff' }} />
                    </IconButton>

                </div>
            </Modal>

        </Box>
    );
}

export default Card;
