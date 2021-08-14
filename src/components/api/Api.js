import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentList from "../studentList/StudentList.js";

export default function Api() {
  const [students, setStudentsState] = useState([]);

  const url = "https://api.hatchways.io/assessment/students";

  useEffect(() => {
    getStudentData();
  }, []);
  const getStudentData = () => {
    axios
      .get(url)
      .then((response) => {
        const allStudent = response.data.students;
        setStudentsState(
          allStudent.map((item) => {
            const itemNew = item;
            itemNew.tags = [];
            return itemNew;
          })
        );
      })
      .catch((error) => console.error(`Error: ${error}`));
  };
  return <StudentList students={students} />;
}
