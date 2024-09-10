import axios from "axios";

const getQuestion = async () => {
  const token = "Baerer " + JSON.parse(localStorage.getItem("token"));
  const response = await axios.get("http://localhost:3000/question/getpdf", {
    headers: {
      Authorization: token,
    },
  });
  console.log("it is getting the value");
  return response;
};

export default getQuestion;
