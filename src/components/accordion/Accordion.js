import "./Accordion.css";
import React, { useState, useRef } from "react";
import Plus from "./button/Plus";
import Minus from "./button/Minus";
import Tags from "../tag/Tags";

const Accordion = (props) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setButton, setButtonState] = useState(false);

  const content = useRef(null);

  const toggleAccordion = (e) => {
    e.preventDefault();
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setButtonState(setActive === "active" ? false : true);
  };
  return (
    <div className="accordion__container">
      <div className="col-3">
        <div className="accordion__picture">
          <img src={props.src} alt="pic" />
        </div>
      </div>
      <div className="col-9 accordion__data">
        <div className="d-flex">
          <div className="accordion__data__fullname">
            <strong>{props.fullname}</strong>
          </div>
          <div className="accordion__button">
            <button
              onClick={toggleAccordion}
              className={`accordion ${setActive}`}
            >
              <div>
                {setButton ? (
                  <Minus width={20} fill={"#777"} />
                ) : (
                  <Plus width={20} fill={"#777"} />
                )}
              </div>
            </button>
          </div>
        </div>

        <div className="accordion__data__list">
          <p>{props.email}</p>
          <p>{props.company}</p>
          <p>{props.skill}</p>
          <p>{props.average}</p>

          <Tags
            addTag={props.addTag}
            tag={props.tag}
            id={props.id}
            placeholder="Add a tag"
          />
        </div>

        <div
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          className="accordion__content"
        >
          <ul>
            {props.content.map((grade, index) => {
              return <li key={index}>{`Test ${index + 1}: ${grade}%`}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
