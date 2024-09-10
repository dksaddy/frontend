import axios from "axios";

const postPdf = async ({ formData }) => {
    console.log("Dhukse");
    
  const form = new FormData();
  form.append("courseName", formData.courseName);
  form.append("courseCode", formData.courseCode);
  form.append("trimester", formData.trimester);
  form.append("year", formData.year);
  form.append("examType", formData.examType);
  form.append("pdf", formData.pdf);
  form.append("department", formData.department);

  try {
    const token = JSON.parse(localStorage.getItem("token"));
  const response = await axios.post(`http://localhost:3000/question/post`, form, {
    headers: {
      Authorization: "Baerer " + token,
    },
  });

  return response;

  } catch (error) {
    console.log(error.response.data.message);
    return;
  }
};

export default postPdf;


        
        
        
        
        
        