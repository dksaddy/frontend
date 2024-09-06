import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InsertDriveFileSharpIcon from "@mui/icons-material/InsertDriveFileSharp";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const currentYear = new Date().getFullYear();


function UpdatePdf(props) {

    const filePath = props.path;
    const fileName = filePath.split(/[/\\]/).pop(); // Works for both Unix and Windows paths
    
    



    return (
        <div>
            <Box component="form" method="POST" sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>

                    <Grid item xs={8}>
                        <Item sx={{ display: 'flex', alignItems: "center", margin: "1% 5%", boxShadow: "none" }}>
                            <InsertDriveFileSharpIcon sx={{ fontSize: "3rem", color: "#E5252A" }} />
                            <h2>Update Question</h2>
                        </Item>
                    </Grid>

                    <Grid item xs={12}>
                        <Item
                            sx={{
                                border: "2px dashed",
                                margin: "0 2%",
                                boxShadow: "none",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            <p style={{ color: 'black' }}><strong>File Name: </strong>{fileName}</p>
                        </Item>
                    </Grid>

                    <Grid item xs={12}>
                        <Item sx={{ boxShadow: "none" }}>
                            {/* Custom File Input */}
                            <input
                                accept="application/pdf"
                                style={{ display: 'none' }}
                                id="contained-button-file"
                                type="file"
                                name='pdfFile'
                            />
                            <label htmlFor="contained-button-file">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    component="span"
                                    sx={{ width: '50%' }}>
                                    Upload A PDF
                                </Button>
                            </label>
                        </Item>
                    </Grid>

                    <Grid item xs={12}>
                        <Item sx={{ boxShadow: "none", marginTop: 1 }}>
                            <TextField
                                id="outlined-basic"
                                label="Course Name"
                                value="Software Engineering"
                                variant="outlined"
                                sx={{ width: "100%" }}
                                name='courseCode'
                                required
                            />
                        </Item>
                    </Grid>

                    <Grid item xs={12}>
                        <Item sx={{ boxShadow: "none" }}>
                            <TextField
                                id="outlined-basic"
                                label="Course Code"
                                value="CSE 1212"
                                variant="outlined"
                                sx={{ width: "100%" }}
                                name='courseCode'
                                required
                            />
                        </Item>
                    </Grid>

                    <Grid item xs={6}>
                        <Item sx={{ boxShadow: "none" }}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                        Trimester
                                    </InputLabel>
                                    <NativeSelect
                                        defaultValue={"Summer"}
                                        inputProps={{
                                            name: 'trimester',
                                            id: 'uncontrolled-native',
                                        }}
                                    >
                                        <option value={"Fall"}>Fall</option>
                                        <option value={"Spring"}>Spring</option>
                                        <option value={"Summer"}>Summer</option>
                                    </NativeSelect>
                                </FormControl>
                            </Box>
                        </Item>
                    </Grid>

                    <Grid item xs={6}>
                        <Item sx={{ boxShadow: "none" }}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                        Department
                                    </InputLabel>
                                    <NativeSelect
                                        defaultValue={"CE"}
                                        inputProps={{
                                            name: 'trimester',
                                            id: 'uncontrolled-native',
                                        }}
                                    >
                                        <option value={"CSE"}>CSE</option>
                                        <option value={"EEE"}>EEE</option>
                                        <option value={"CE"}>CE</option>
                                        <option value={"BSDS"}>BSDS</option>
                                        <option value={"MSCSE"}>MSCSE</option>
                                        <option value={"BBA"}>BBA</option>
                                        <option value={"BBA in AIS"}>BBA in AIS</option>
                                        <option value={"MBA"}>MBA</option>
                                        <option value={"EMBA"}>EMBA</option>
                                        <option value={"Econoimics"}>Econoimics</option>
                                        <option value={"MS Econoimics"}>MS Econoimics</option>
                                        <option value={"BSSEDS"}>BSSEDS</option>
                                        <option value={"BSSMSJ"}>BSSMSJ</option>
                                        <option value={"English"}>English</option>
                                        <option value={"B. Pharm"}>B. Pharm</option>
                                    </NativeSelect>
                                </FormControl>
                            </Box>
                        </Item>
                    </Grid>

                    <Grid item xs={6}>
                        <Item sx={{ boxShadow: "none" }}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                        Exam Type
                                    </InputLabel>
                                    <NativeSelect
                                        defaultValue={"MID"}
                                        inputProps={{
                                            name: 'examType',
                                            id: 'uncontrolled-native',
                                        }}
                                    >
                                        <option value={"MID"}>MID</option>
                                        <option value={"FINAL"}>FINAL</option>
                                    </NativeSelect>
                                </FormControl>
                            </Box>
                        </Item>
                    </Grid>

                    <Grid item xs={6}>
                        <Item sx={{ boxShadow: "none" }}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                        Year
                                    </InputLabel>
                                    <NativeSelect
                                        defaultValue={currentYear}
                                        inputProps={{
                                            name: 'age',
                                            id: 'uncontrolled-native',
                                        }}
                                    >
                                        <option value={currentYear}>{currentYear}</option>
                                        <option value={currentYear - 1}>{currentYear - 1}</option>
                                        <option value={currentYear - 2}>{currentYear - 2}</option>
                                        <option value={currentYear - 3}>{currentYear - 3}</option>
                                    </NativeSelect>
                                </FormControl>
                            </Box>
                        </Item>
                    </Grid>

                    <Grid item xs={12}>
                        <Item sx={{ boxShadow: "none" }}>
                            <Button variant="contained" sx={{ width: "100%", height: "6vh", marginBottom: "0.7%" }}>
                                Update
                            </Button>
                        </Item>
                    </Grid>

                </Grid>
            </Box>
        </div>
    )
}


export default UpdatePdf;