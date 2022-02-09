import React from "react";
import SelectorButton from "./SelectorButton";
 

function Selector(){


    return (
        <div className="selector">
          <div className="selectors-container">

            <div className="rating">
                <input id="radio1" type="radio" name="star" value="5" className="star" />
                <label htmlFor="radio1"><i className="fas fa-star "></i></label>
                <input id="radio2" type="radio" name="star" value="4" className="star" />
                <label htmlFor="radio2"><i className="fas fa-star "></i></label>
                <input id="radio3" type="radio" name="star" value="3" className="star" />
                <label htmlFor="radio3"><i className="fas fa-star "></i></label>
                <input id="radio4" type="radio" name="star" value="2" className="star" />
                <label htmlFor="radio4"><i className="fas fa-star "></i></label>
                <input id="radio5" type="radio" name="star" value="1" className="star" />
                <label htmlFor="radio5"><i className="fas fa-star "></i></label>
            </div>

            <SelectorButton/>

          </div>
        </div>
    )
}

export default Selector;