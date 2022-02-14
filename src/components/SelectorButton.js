import { useState } from "react";



function SelectorButton(props) {

    // ADULT BUTTONS 

    const [Adult, setAdult] = useState(0);

    const incAdult = () => {
        if (Adult < 10) {
            setAdult(Number(Adult) + 1);
        }
    };

    const decAdult = () => {
        if (Adult > 0) {
            setAdult(Adult - 1);
        }
    }

    const handleChangeAdult = (e) => {
        setAdult(e.target.value);
        console.log(e.target.value);
        props.onAdultChange(e.target.value);
    }

    // CHILDREN BUTTONS 


    const [Child, setChild] = useState(0);

    const incChild = () => {
        if (Child < 10) {
            setChild(Number(Child) + 1);
        }
    };

    const decChild = () => {
        if (Child > 0) {
            setChild(Child - 1);
        }
    }


    const handleChangeChild = (e) => {
        setChild(e.target.value);
        props.onChildChange(e.target.value);
    }


    return (
        <div className="SelectorButtons">
            
            
                <label>Adults</label>
                <button className="amount-btn" type="button" onClick={decAdult}>-</button>
                <input className="button-input" type="text" value={Adult} onChange={handleChangeAdult} />
                <button className="amount-btn" type="button" onClick={incAdult}>+</button>

                <label>Children</label>
                <button className="amount-btn" type="button" onClick={decChild}>-</button>
                <input className="button-input" type="text" value={Child} onChange={handleChangeChild} />
                <button className="amount-btn" type="button" onClick={incChild}>+</button>
            
            
        </div>
    );
}
export default SelectorButton;