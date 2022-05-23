import { useState } from "react";


export const EditBox = (props) => {
    const maxChar = 500;
    const rows = 1;
    const [remainedChar, setRemainedChar] = useState(500);
    const [isEditable, setEditable] = useState(false);

    const handleChange = (e) => {
        setRemainedChar(maxChar - e.target.value.length);
    };
    const handleFocus= (e) => {
        setEditable( true);
    }
    const handleBlur = (e) => {
        props.route(e.target.value, props.index)


        setEditable( false);
    }

    return (
        <div className="editbox">
            <div className="custom-label" >
                <div className = "editbox-label">
                </div>
            </div>
            <textarea
                rows={rows}
                maxLength={maxChar}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                className={`editbox-textarea ${isEditable ? "text-edit active-box" : ""} `}
                required={true}
                style={{resize: "vertical"}}
            ></textarea>
            <div className={`edit-bottom  d-flex justify-content-end text-detail ${isEditable ? "" : "invisible"}`}>
                <i className="remained-char">
                    {remainedChar}/{maxChar}
                </i>
            </div>
        </div>
    );
};

export default EditBox;