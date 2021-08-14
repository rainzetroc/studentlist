import "./StudentList.css";
import React, { useState } from "react";
import NameFilter from "../filter/name/NameFilter";
import TagFilter from "../filter/tags/TagFilter";
import Accordion from "../accordion/Accordion";

const StudentList = (props) => {
  const [searchTerm, setSearchTermState] = useState("");
  const [searchTag, setSearchTagState] = useState("");

  const handleChange = (e) => {
    setSearchTermState(e.target.value);
  };

  const handleTag = (e) => {
    setSearchTagState(e.target.value);
  };

  const addTag = (id, tag) => {
    const index = props.students.findIndex((item) => {
      return item.id === id;
    });

    if (index === -1) return;

    props.students[index].tags.push(tag);
  };
  const displayStudentList = (props) => {
    const { students } = props;

    return students
      .filter((result) => {
        return (
          result.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          result.lastName.toLowerCase().includes(searchTerm.toLowerCase())
        );
      })
      .filter((result) => {
        if (searchTag === "") {
          return result;
        }
        let hasTag = false;
        result.tags.forEach((tag) => {
          if (tag.includes(searchTag)) {
            hasTag = true;
          } else {
            hasTag = false;
          }
        });
        return hasTag;
      })

      .map((student) => {
        let total = 0;
        for (let i = 0; i < student.grades.length; i++) {
          total += parseInt(student.grades[i]);
        }
        const avg = total / student.grades.length;
        //   console.log(student);
        // console.log(student.tags);
        return (
          <div className="student" key={student.id}>
            <Accordion
              src={student.pic}
              fullname={`${student.firstName.toUpperCase()} ${student.lastName.toUpperCase()}`}
              email={`Email: ${student.email}`}
              company={`Company: ${student.company}`}
              skill={`Skill: ${student.skill}`}
              average={`Average: ${avg} `}
              content={student.grades}
              id={student.id}
              addTag={addTag}
              tag={student.tags}
            />
          </div>
        );
      });
  };
  return (
    <>
      <NameFilter
        placeholder="Search by name"
        handleSearchTerm={handleChange}
      />
      <TagFilter placeholder="Search by tag" handleTag={handleTag} />
      {displayStudentList(props)}
    </>
  );
};

export default StudentList;
