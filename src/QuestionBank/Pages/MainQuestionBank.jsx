import React, { useState, useEffect } from "react";
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
import Checkbox from "@mui/material/Checkbox";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
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

  //State for UI---------------------------------------------------
  const [isAccordionExpanded1, setAccordionExpanded1] = useState(false);
  const [isAccordionExpanded2, setAccordionExpanded2] = useState(false);
  const handleAccordionToggle1 = (event, expanded) => {
    setAccordionExpanded1(expanded);
  };
  const handleAccordionToggle2 = (event, expanded) => {
    setAccordionExpanded2(expanded);
  };
  //---------------------------------------------------------------

  const [question, setQuestion] = useState([]);
  const [checkedItemsTrimester, setCheckedItemsTrimester] = useState([]);
  const [checkedItemsYear, setCheckedItemsYear] = useState([]);
  const [departmentRadio, setDepartmentRadio] = useState('');
  const [examTypeRadio, setExamTypeRadio] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); // Search term state

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCheckboxChangeTrimester = (item) => {
    const updatedCheckedItems = checkedItemsTrimester.includes(item)
      ? checkedItemsTrimester.filter((i) => i !== item)
      : [...checkedItemsTrimester, item];

    setCheckedItemsTrimester(updatedCheckedItems);
    console.log('Clicked item:', item);
    console.log('Updated checked items:', updatedCheckedItems);
  };

  const handleCheckboxChangeYear = (item) => {
    const updatedCheckedItems = checkedItemsYear.includes(item)
      ? checkedItemsYear.filter((i) => i !== item)
      : [...checkedItemsYear, item];

    setCheckedItemsYear(updatedCheckedItems);
    console.log('Clicked item:', item);
    console.log('Updated checked items:', updatedCheckedItems);
  };

  const handleDepartment = (event) => {
    setDepartmentRadio(event.target.value);
    setAccordionExpanded1(false);
  };

  const handleExamType = (event) => {
    setExamTypeRadio(event.target.value);
    setAccordionExpanded2(false);
  };


  const fetchQuestions = async () => {
    try {
      const token = "Bearer " + JSON.parse(localStorage.getItem("token"));

      // Make the API call with all selected filters
      const response = await axios.post(
        'http://localhost:3000/question/filteredQuestions',
        {
          department: departmentRadio,
          examType: examTypeRadio,
          trimester: checkedItemsTrimester,
          year: checkedItemsYear,
          search: searchTerm,
        },
        {
          headers: {
            Authorization: token
          }
        }
      );

      // Update state with the fetched data
      setQuestion(response.data);
      console.log(response.data);

    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  // useEffect that triggers on any filter change
  useEffect(() => {
    fetchQuestions();
  }, [departmentRadio, examTypeRadio, checkedItemsTrimester, checkedItemsYear, searchTerm]);


  const fetchQuestion = async () => {
    try {
      const token = "Bearer " + JSON.parse(localStorage.getItem("token"));
      const response = await axios.get("http://localhost:3000/question/getpdf", {
        headers: {
          Authorization: token,
        },
      });

      console.log('Initial fetch response data:', response.data);
      setQuestion(response.data);
    } catch (error) {
      console.error("Error fetching question: ", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };



  return (
    <div>
      <form action="" method="POST" onSubmit={handleSubmit}>
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
              <Item sx={{ marginRight: '2.5%', height: '88vh', }}>
                <UploadBar fetch={fetchQuestion} />

                <TextField
                  id="outlined-basic"
                  label={
                    <Box display="flex" alignItems="center">
                      <SearchIcon/>
                      <Typography variant="body2">
                        Search Question
                      </Typography>
                    </Box>
                  }
                  variant="outlined"
                  sx={{ width: "70%" }}
                  onChange={handleSearch}
                />

                {!question.length && (
                  <>
                    <div style={{ marginTop: '10%', }}>
                      <h1 style={{ margin: 0 }}>No Questions Available</h1>
                      <img src="design\brain.gif" alt="GIF" height={100} />
                    </div>
                  </>
                )}

                <div className="cardHolder">
                  {question.map((item, index) => (
                    <Card
                      key={index}
                      name={item.course_name}
                      code={item.course_code}
                      type={item.exam_type}
                      trimester={item.trimester}
                      year={item.year}
                      department={item.department}
                      path={item.path}
                      questionID={item.id}
                      owner={item.uid}
                      userImg={item.profile_picture}
                      fetch={fetchQuestion}
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