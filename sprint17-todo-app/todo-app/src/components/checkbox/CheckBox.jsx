import React, { useState, useEffect } from "react";
import "./CheckBox.css";

const CheckBox = (props) => {
    const { checked: initialChecked = false, onChange } = props;

    const [checked, setChecked] = useState(!!initialChecked);
    
    const handleCheckBoxChange = (e) => {
        setChecked(e.target.checked);
    };

    useEffect(() => {
        if (onChange) {
            onChange(checked);
        }
    }, [checked, onChange]);

    return (
        <div className="round">
            <input
                checked={checked}
                onChange={handleCheckBoxChange}
                type="checkbox"
            />
            <label
                className={`checkbox ${checked ? "checkbox--active" : ""}`}
            ></label>
        </div>
    );
};

export default CheckBox;