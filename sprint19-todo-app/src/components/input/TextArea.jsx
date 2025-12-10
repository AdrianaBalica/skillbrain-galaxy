import React from "react";
import "./Input.css";

const TextArea = (props) => {
    const { className, ...rest } = props;
    return <textarea className={`primary-input textarea ${className || ""}`} rows="3" {...rest} />;
};

export default TextArea;