import React, {useState} from 'react';
import "./style.css"

const Todos = ({item}) => {

    const [state, setState] = useState("");

    const toggleAccordion = () => {
        setState(state === "" ? "line-through" : "");
    }


    return (
        <div className="card col-sm-7 m-3">
            <div className="card-body">
                <div className="d-flex">
                    <input onClick={toggleAccordion} className="form-check-input" type="checkbox" id="checkboxNoLabel"
                           value=""
                           aria-label="..."/>
                    <h5 className={`ms-3 ${state}`} id="container">{item.input}</h5>
                </div>
            </div>
        </div>
    );
};

export default Todos;