import "./Tags.css";
import React, { useState } from "react";

const Tags = (props) => {
  const [tag, setTagState] = useState("");

  const handleChange = (e) => {
    setTagState(e.target.value);
  };

  const addInputText = (e) => {
    if (e.keyCode === 13) {
      setTagState("");
      props.addTag(props.id, tag);
    }
  };
  return (
    <div>
      {props.tag.map((tagList) => {
        return (
          <span
            className=" w3-tag w3-gray"
            key={props.id}
          >{` ${tagList} `}</span>
        );
      })}
      <div>
        <input
          type="text"
          value={tag}
          placeholder={props.placeholder}
          onKeyDown={addInputText}
          onChange={handleChange}
          className="tags__input"
        ></input>
      </div>
    </div>
  );
};

export default Tags;
