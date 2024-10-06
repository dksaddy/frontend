import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import PeopleIcon from "@mui/icons-material/People";
import ForumIcon from "@mui/icons-material/Forum";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import StorefrontIcon from "@mui/icons-material/Storefront";
import WorkIcon from "@mui/icons-material/Work";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <Box>
      {/* Background section */}
      <Box position="relative" top={-82} zIndex={-2}>
        <Box position="relative">
          <img
            src="./design/UIU.jpg"
            style={{
              height: "102vh",
              width: "100%",
              position: "absolute",
              top: "0px",
              zIndex: "-1",
            }}
            alt="University Campus"
          />
          <Box
            sx={{
              height: "102vh",
              width: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              zIndex: 1,
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Typography variant="h4" sx={{ color: "white !important" }}>
              Welcome to Student & Alumni Connect
            </Typography>
            <Typography variant="h1" sx={{ color: "white !important", textAlign: 'center' }}>
              Empowering Future & Past Generations
            </Typography>
            <br />
            <br />
            <Button
              component={Link}
              to="/signup"
              variant="contained"
              sx={{ height: "60px", width: "200px", zIndex: 2 }}
            >
              Join Now
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Services section */}
      <Box>
        <Typography variant="h2" textAlign="center">
          CONNECT, LEARN, GROW
        </Typography>
        <Typography variant="subtitle1" color="secondary" textAlign="center">
          Bridging the Gap Between Students and Alumni
        </Typography>

        <Container sx={{ marginTop: "50px" }} maxWidth="lg">
          <Grid container spacing={6}>
            {/* Service 1: Student Network */}
            <Grid item xs={12} sm={4}>
              <Box textAlign="center">
                <PeopleIcon sx={{ fontSize: "80px", color: "primary.main" }} />
                <Typography variant="h4" color="primary">
                  Student Network
                </Typography>
                <Typography variant="subtitle1" textAlign="justify">
                  Connect with peers, join study groups, and collaborate on
                  projects. The platform allows you to network with like-minded
                  individuals for academic growth and professional development.
                </Typography>
              </Box>
            </Grid>
            {/* Service 2: Alumni Mentorship */}
            <Grid item xs={12} sm={4}>
              <Box textAlign="center">
                <SchoolIcon sx={{ fontSize: "80px", color: "primary.main" }} />
                <Typography variant="h4" color="primary">
                  Alumni Mentorship
                </Typography>
                <Typography variant="subtitle1" textAlign="justify">
                  Get guidance from successful alumni who have walked the same
                  path. Seek career advice, participate in webinars, or engage
                  in one-on-one mentorship programs to unlock opportunities.
                </Typography>
              </Box>
            </Grid>
            {/* Service 3: Question Bank */}
            <Grid item xs={12} sm={4}>
              <Box textAlign="center">
                <ForumIcon sx={{ fontSize: "80px", color: "primary.main" }} />
                <Typography variant="h4" color="primary">
                  Question Bank
                </Typography>
                <Typography variant="subtitle1" textAlign="justify">
                  Share and access previous exam questions. This repository helps
                  students prepare for exams by giving them access to a range of
                  past papers.
                </Typography>
              </Box>
            </Grid>

            {/* Service 4: ToLet Section */}
            <Grid item xs={12} sm={4}>
              <Box textAlign="center">
                <HomeWorkIcon sx={{ fontSize: "80px", color: "primary.main" }} />
                <Typography variant="h4" color="primary">
                  ToLet for Students
                </Typography>
                <Typography variant="subtitle1" textAlign="justify">
                  Looking for a bachelor flat, a shared room, or a seat? The
                  ToLet section helps students find accommodations easily,
                  facilitating their housing needs.
                </Typography>
              </Box>
            </Grid>

            {/* Service 5: Marketplace */}
            <Grid item xs={12} sm={4}>
              <Box textAlign="center">
                <StorefrontIcon
                  sx={{ fontSize: "80px", color: "primary.main" }}
                />
                <Typography variant="h4" color="primary">
                  Marketplace
                </Typography>
                <Typography variant="subtitle1" textAlign="justify">
                  Buy and sell common goods or lab equipment. The marketplace
                  provides a space for students to trade, ensuring their
                  academic and daily needs are met.
                </Typography>
              </Box>
            </Grid>

            {/* Service 6: Job Portal */}
            <Grid item xs={12} sm={4}>
              <Box textAlign="center">
                <WorkIcon sx={{ fontSize: "80px", color: "primary.main" }} />
                <Typography variant="h4" color="primary">
                  Job Portal
                </Typography>
                <Typography variant="subtitle1" textAlign="justify">
                  Alumni assist students by sharing job opportunities and
                  providing career advice. Students can explore internships and
                  job openings to start their professional journey.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Statistics section */}
      <Box marginY={5}
        sx={{
          backgroundColor: "",
          color: "white",
          padding: "50px 0",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" textAlign="center" marginBottom={5}>
            Join Our Ever-Growing Community
          </Typography>
          <Grid container spacing={5} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <Box textAlign="center">
                <Typography variant="h1">5,000+</Typography>
                <Typography variant="h5">Students</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box textAlign="center">
                <Typography variant="h1">1,000+</Typography>
                <Typography variant="h5">Alumni Mentors</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box textAlign="center">
                <Typography variant="h1">500+</Typography>
                <Typography variant="h5">Career Opportunities</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonial or Goal section */}
      <Box 
        sx={{
          backgroundColor: "",
          paddingY: "50px",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" color="primary" textAlign="center">
            Our Goal
          </Typography>
          <Typography variant="subtitle1" textAlign="justify" marginTop={4}>
            Our platform is designed to bridge the gap between students and
            alumni, fostering a community where both groups can connect, share
            knowledge, and grow together. By providing mentorship opportunities,
            collaborative projects, career resources, housing options, and more,
            we aim to empower the next generation of leaders.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
