

import React, { useEffect, useRef, useState, useContext } from "react";

import Card from "../Component/Card";
import UploadBar from "../Component/UploadBar";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


import { AuthContext } from "../../Auth/AuthContext";

import Checkbox from "@mui/material/Checkbox";
import axios from "axios";

import "./MainQuestionBank.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const department = [
  "CSE", "EEE", "CE", "BSDS", "MSCSE",
  "BBA", "BBA in AIS", "MBA", "EMBA",
  "Econoimics", "MS Econoimics", "BSSEDS", "BSSMSJ", "English", "B. Pharm",
];
const trimester = ["FALL", "SUMMER", "SPRING"];
const currentYear = new Date().getFullYear();
const year = [currentYear, currentYear - 1, currentYear - 2, currentYear - 3];

function MainQuestionBank() {


  const auth = useContext(AuthContext);

  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const ref = useRef([]);
  useEffect(() => {
    ref.current.click();
  }, [search]);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };
  const handleSubmit = async (event) => {
   
    event.preventDefault();
    
    try {
      const token = "Bearer " + JSON.parse(localStorage.getItem("token"));
      const response = await axios.get(
        `http://localhost:3000/question/getquestions/${search}`,

        {
          headers: {
            Authorization: token,
          },
        }
      );

      // Update state with the fetched data
      setQuestion(response.data);
      console.log(response.data);
      
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <Item
                sx={{
                  boxShadow: "none",
                  marginLeft: '10%',
                  display: "flex",
                  flexDirection: "column",
                  gap: "2vh",
                  padding: 0,
                }}
              >
                <div>
                  <Accordion expanded={isAccordionExpanded1} onChange={handleAccordionToggle1}>
                    <AccordionSummary
                      sx={{}}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <h3 style={{ marginRight: 5 }}>Department</h3>
                      <h3 style={{ color: 'blue' }}>{departmentRadio && departmentRadio}</h3>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <FormControl>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          name="radio-buttons-group"
                        >
                          {department.map((item, index) => (
                            <FormControlLabel
                              value={item}
                              control={<Radio />}
                              label={item}
                              key={index}
                              onChange={handleDepartment}
                            />
                          ))}

                        </RadioGroup>
                      </FormControl>
                    </AccordionDetails>
                  </Accordion>
                </div>

                <div>
                  <Accordion expanded={isAccordionExpanded2} onChange={handleAccordionToggle2}>
                    <AccordionSummary
                      sx={{ height: 0 }}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <h3 style={{ marginRight: 5 }}>Exam Type</h3>
                      <h3 style={{ color: 'blue' }}>{examTypeRadio && examTypeRadio}</h3>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <FormControl>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          name="radio-buttons-group"
                        >
                          <FormControlLabel value="MID" control={<Radio />} label="MID" onChange={handleExamType} />
                          <FormControlLabel value="FINAL" control={<Radio />} label="FINAL" onChange={handleExamType} />
                        </RadioGroup>
                      </FormControl>
                    </AccordionDetails>
                  </Accordion>
                </div>

                <div>
                  <Accordion>
                    <AccordionSummary
                      sx={{ height: 0 }}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <h3>Trimester</h3>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      {trimester.map((item, index) => (
                        <div key={index}>
                          <Checkbox
                            checked={checkedItemsTrimester.includes(item)}
                            onChange={() => handleCheckboxChangeTrimester(item)}
                            value={item}
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                </div>

                <div>
                  <Accordion>
                    <AccordionSummary
                      sx={{ height: 0 }}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <h3>Year</h3>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      {year.map((item, index) => (
                        <div key={index}>
                          <Checkbox
                            checked={checkedItemsYear.includes(item)}
                            onChange={() => handleCheckboxChangeYear(item)}
                            value={item}
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Item>
            </Grid>

            <Grid item xs={9}>

                <TextField
                  id="outlined-basic"
                  label={
                    <Box display="flex" alignItems="center">
                      <SearchIcon />
                      <Typography variant="body2" sx={{ marginLeft: 1 }}>
                        Search Question
                      </Typography>
                    </Box>
                  }
                  variant="outlined"
                  sx={{ width: "70%" }}
                  onChange={handleSearch}
                />

                <div className="cardHolder">
                  {question.map((item, index) => (
                    <Card
                      key={index}
                      name={item.course_name}
                      code={item.course_code}
                      type={item.exam_type}
                      trimester={item.trimester}
                      year={item.year}
                      path={item.path}
                      questionID ={item.id}
                      owner ={item.uid}
                      userImg ={item.profile_picture}
                      fetch ={fetchQuestion}
                    />
                  ))}
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </form>
    </div>
  );
}

export default MainQuestionBank;