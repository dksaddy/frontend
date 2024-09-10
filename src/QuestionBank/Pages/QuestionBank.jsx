import React from "react";
import {
  Box, Container, Grid,
  Accordion, AccordionSummary, AccordionDetails,
  FormControlLabel, RadioGroup, Radio,
  TextField, Checkbox,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import UploadBar from "../Component/UploadBar";
import { department, trimester, year } from '../Component/StyleAndData';
import { useQuery } from "@tanstack/react-query";
import getQuestion from "../Function/getQuestion";
import Card from '../Component/Card'

const QuestionBank = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["getQuestion"],
    queryFn: getQuestion,
  });

  const [departmentExpanded, setDepartmentExpanded] = React.useState(false);
  const [examTypeExpanded, setExamTypeExpanded] = React.useState(false);
  const [selectedDepartment, setSelectedDepartment] = React.useState('');
  const [selectedExamType, setSelectedExamType] = React.useState('');
  const [selectedTrimesters, setSelectedTrimesters] = React.useState([]);
  const [selectedYear, setSelectedYear] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleToggleDepartmentAccordion = () => setDepartmentExpanded(prev => !prev);
  const handleToggleExamTypeAccordion = () => setExamTypeExpanded(prev => !prev);

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
    setDepartmentExpanded(false);
  };

  const handleExamTypeChange = (event) => {
    setSelectedExamType(event.target.value);
    setExamTypeExpanded(false);
  };

  const handleTrimesterChange = (event) => {
    const value = event.target.value;
    setSelectedTrimesters(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  const handleYearChange = (event) => {
    const value = event.target.value;
    setSelectedYear(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  const handleSearchChange = (event) => setSearchQuery(event.target.value);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error occurred. Please try again later.</h1>;

  return (
    <Container maxWidth="xl">
      <Box marginTop={2}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            {/* Department Accordion */}
            <Accordion expanded={departmentExpanded}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="department-content"
                id="department-header"
                onClick={handleToggleDepartmentAccordion}
              >
                <h4 style={{ margin: 0 }}>
                  Department:
                  <span style={{ color: 'blue', marginLeft: 5 }}>{selectedDepartment}</span>
                </h4>
              </AccordionSummary>
              <AccordionDetails>
                <RadioGroup
                  aria-labelledby="department-radio-group"
                  name="radio-buttons-group"
                  value={selectedDepartment}
                  onChange={handleDepartmentChange}
                >
                  {department.map((item, index) => (
                    <FormControlLabel
                      key={index}
                      value={item}
                      control={<Radio />}
                      label={item}
                    />
                  ))}
                </RadioGroup>
              </AccordionDetails>
            </Accordion>

            {/* Exam Type Accordion */}
            <Accordion style={{ marginTop: 10 }} expanded={examTypeExpanded}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="exam-type-content"
                id="exam-type-header"
                onClick={handleToggleExamTypeAccordion}
              >
                <h4 style={{ margin: 0 }}>
                  Exam Type:
                  <span style={{ color: 'blue', marginLeft: 5 }}>{selectedExamType}</span>
                </h4>
              </AccordionSummary>
              <AccordionDetails>
                <RadioGroup
                  aria-labelledby="exam-type-radio-group"
                  name="radio-buttons-group"
                  value={selectedExamType}
                  onChange={handleExamTypeChange}
                >
                  <FormControlLabel value="MID" control={<Radio />} label="MID" />
                  <FormControlLabel value="FINAL" control={<Radio />} label="FINAL" />
                </RadioGroup>
              </AccordionDetails>
            </Accordion>

            {/* Trimester Accordion */}
            <Accordion style={{ marginTop: 10 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="trimester-content"
                id="trimester-header"
              >
                <h4 style={{ margin: 0 }}>Trimester</h4>
              </AccordionSummary>
              <AccordionDetails>
                {trimester.map((item, index) => (
                  <div key={index}>
                    <Checkbox
                      value={item}
                      checked={selectedTrimesters.includes(item)}
                      onChange={handleTrimesterChange}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>

            {/* Year Accordion */}
            <Accordion style={{ marginTop: 10 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="year-content"
                id="year-header"
              >
                <h4 style={{ margin: 0 }}>Year</h4>
              </AccordionSummary>
              <AccordionDetails>
                {year.map((item, index) => (
                  <div key={index}>
                    <Checkbox
                      value={item}
                      checked={selectedYear.includes(item)}
                      onChange={handleYearChange}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
          </Grid>

          <Grid item xs={9}>
            <UploadBar />
            <TextField
              sx={{ width: '70%', margin: '2% 15%' }}
              label="Search Course || Course Code"
              value={searchQuery}
              onChange={handleSearchChange}
            />

            <div style={{ overflowY: 'scroll', overflowX: 'hidden', height: '60vh', }}>
              {data?.data?.map((item, index) => (

                <Card
                  key={index}
                  name={item.course_name}
                  code={item.course_code}
                  trimester={item.trimester}
                  year={item.year}
                  type={item.exam_type}
                  owner={item.uid}
                  userImg={item.profile_picture}
                  path={item.path}
                  id={item.id}
                />

              ))}
            </div>

          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default QuestionBank;
