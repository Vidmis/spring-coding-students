import React, { useEffect, useState } from "react";
import axios from "axios";

import { Box } from "components";

const About: React.FC = () => {
  // const pazadas = new Promise((resolve, reject) => {
  //   const studentaiMokysisGerai = true;
  //   if (studentaiMokysisGerai) {
  //     resolve("valioo! mokosi!");
  //   } else {
  //     reject("pazadunai");
  //   }
  // });

  // pazadas
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log("Error msg: ", err));

  // const pirmas = new Promise((resolve, reject) => resolve("pirmas"));
  // const antras = new Promise((resolve, reject) => resolve("antras"));
  // const trecias = new Promise((resolve, reject) => resolve("trecias"));

  // Promise.race([pirmas, antras, trecias]).then((res) => console.log(res));
  const [data, setData] = useState();

  const url = "https://reqres.in/api/users";

  const students = {
    name: "cebureks",
    job: "dev",
  };

  axios({
    method: "post",
    url: url,
    data: students,
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  useEffect(() => {
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => console.log("Fetch response: ", data))
    //   .catch((err) => console.log(err));
    // axios
    //   .get(url)
    //   .then((res) => console.log("Axios resposne: ", res))
    //   .catch((err) => console.log(err));
  }, [url]);

  return <Box>about</Box>;
};

export default About;
