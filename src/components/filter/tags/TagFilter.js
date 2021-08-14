import "../Filter.css";
import React from "react";

const TagFilter = (props) => {
  return (
    <div className="tag__filter">
      <input
        type="text"
        placeholder={props.placeholder}
        onChange={props.handleTag}
        className="tag__filter__input"
      ></input>
    </div>
  );
};

export default TagFilter;
