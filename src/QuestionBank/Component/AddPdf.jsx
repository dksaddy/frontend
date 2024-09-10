import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import postPdf from "../Function/postPdf";
import { Box, Grid } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { department, trimester, year } from '../Component/StyleAndData';

function AddPdf() {

    const [formData, setFormData] = useState({
        pdf: null,
        courseName: "",
        courseCode: "",
        department: "",
        trimester: "",
        year: "",
        examType: "",
    });

    const mutation = useMutation({
        mutationFn: () => {
            postPdf({ formData });
        },

        onSuccess: () => {
           console.log('Succes');
        },
    });



    // Handle file input change
    const handleFileChange = (event) => {
        const file = event.target.files[0]; // Get the first selected file
        setFormData((prevState) => ({
            ...prevState,
            pdf: file,
        }));
    };

    // Handle text input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => {
            return {
                ...prevState,
                [name]: value,
            }
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        mutation.mutate();
    }

    if (mutation.isError) {
        console.log(mutation.error.message);

    }


    return (
        <Box component="form" onSubmit={handleSubmit} >
            <h2 style={{ margin: 10 }}>Upload Question</h2>

            <div style={{ border: '2px dashed', display: 'flex', flexDirection: 'column', margin: '2% 0 2% 1.5%', width: '96%' }}>
                {/* Display Image Name and Size */}
                {formData.pdf ?
                    (
                        <div>
                            <p style={{ textAlign: 'center' }}><strong>File Name:</strong> {formData.pdf.name}</p>
                            <p style={{ textAlign: 'center' }}><strong>File Size:</strong> sfdgdjfg</p>
                        </div>
                    )
                    :
                    (
                        <div>
                            <p style={{ textAlign: 'center', marginTop: '2%' }}><strong>File Name:</strong></p>
                            <p style={{ textAlign: 'center' }}><strong>File Size:</strong></p>
                        </div>
                    )
                }
            </div>

            {/* Custom File Input */}
            <input
                accept="application/pdf"
                style={{ display: 'none' }}
                id="contained-button-file"
                type="file"
                onChange={handleFileChange}
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span" sx={{ margin: '0 0 2% 25%', width: '50%' }}>
                    Upload Image
                </Button>
            </label>


            <TextField
                label="Course Name"
                sx={{ margin: '1% 1.5%', width: '96%' }}
                onChange={handleInputChange}
                name='courseName'
            />
            <TextField
                label="Course Code"
                sx={{ margin: '1% 1.5%', width: '96%' }}
                onChange={handleInputChange}
                name='courseCode' />


            <Grid container spacing={2} sx={{ padding: 2 }}>
                <Grid item xs={3}>
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Department
                        </InputLabel>
                        <NativeSelect
                            inputProps={{
                                name: 'department',
                                id: 'uncontrolled-native',

                            }}
                            onChange={handleInputChange}
                        >
                            <option value={"None"}>None</option>
                            {department.map((item, index) => (
                                <option value={item} key={index}>{item}</option>
                            ))}
                        </NativeSelect>
                    </FormControl>
                </Grid>

                <Grid item xs={3}>
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Trimester
                        </InputLabel>
                        <NativeSelect
                            inputProps={{
                                name: 'trimester',
                                id: 'uncontrolled-native',
                            }}
                            onChange={handleInputChange}
                        >
                            <option value={"None"}>None</option>
                            {trimester.map((item, index) => (
                                <option value={item} key={index}>{item}</option>
                            ))}
                        </NativeSelect>
                    </FormControl>
                </Grid>

                <Grid item xs={3}>
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Year
                        </InputLabel>
                        <NativeSelect
                            inputProps={{
                                name: 'year',
                                id: 'uncontrolled-native',
                            }}
                            onChange={handleInputChange}
                        >
                            <option value={"None"}>None</option>
                            {year.map((item, index) => (
                                <option value={item} key={index}>{item}</option>
                            ))}
                        </NativeSelect>
                    </FormControl>
                </Grid>

                <Grid item xs={3}>
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Exam Type
                        </InputLabel>
                        <NativeSelect
                            inputProps={{
                                name: 'examType',
                                id: 'uncontrolled-native',
                            }}
                            onChange={handleInputChange}
                        >
                            <option value={"None"}>None</option>
                            <option value={"MID"}>MID</option>
                            <option value={"FINAL"}>FINAL</option>

                        </NativeSelect>
                    </FormControl>
                </Grid>
            </Grid>


            <Button
                type='submit'
                variant="contained"
                sx={{ margin: '2% 0 2% 25%', width: '50%' }}
            >
                Add Question
            </Button>


        </Box>
    )
}

export default AddPdf