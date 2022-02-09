import React from "react";
import Styles from "../App.css";
import Pic1 from "../images/pic1.png";
import Pic2 from "../images/pic2.png";
import Pic3 from "../images/pic3.png";
import Pic4 from "../images/pic4.png";
import Pic5 from "../images/pic5.png";

function Header() {
    return (
        <div className="Header">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Pic1} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={Pic2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={Pic3} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={Pic4} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Pic5} className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
