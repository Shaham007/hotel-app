import React, { Component } from "react";
import Styles from "../App.css";
import Pic1 from "../images/pic1.png";
import Pic2 from "../images/pic2.png";
import Pic3 from "../images/pic3.png";

class HotelCard extends Component {

    constructor() {
        super();
        this.state = {
            data: null
        };
    }

    componentDidMount = () => {
        fetch('https://obmng.dbm.guestline.net/api/roomRates/OBMNG/' + this.props.details.id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({ data })
            })
    }

    

   render () {

       const { details } = this.props;
       const { data } = this.state;

       return (
           <div>
               
                <div className="HotelCard-main" >
                    <div className="hotelCard">
                        <div className="upper-container">
                            <div className="img-card" >
                                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
                                    <div className="carousel-inner">

                                        {details.images && details.images.map((x, i) => {
                                            return (
                                                <div key={x.url} className={i == 0 ? 'carousel-item active' : 'carousel-item'}>
                                                    <img src={x.url} className="d-block " />
                                                </div>
                                            )
                                        })};

                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <div className="hotelName">
                                <h1 className="infoInner">{details.name}</h1>
                                <p className="infoInner">{details.address1}</p>
                                <p className="infoInner">{details.address2}</p>
                                <p className="infoInner">{details.country}</p>
                                <p className="infoInner">{details.email}</p>
                                <p className="infoInner">{details.telephone}</p>
                            </div>
                            <div className="HotelRating">
                                {Array.from({ length: details.starRating }, () =>
                                    <i className="fas fa-star hotelRoom-star" ></i>
                                )}
                                {Array.from({ length: (5-details.starRating) }, () =>
                                    <i className="fas fa-star " ></i>
                                )}
                            </div>
                        </div>

                        <hr></hr>
                       
                            
                      {data?.rooms && data?.rooms.map((x) => {
                        return (
                            <div>
                                <div className= "hotelInfo-main">
                                   <div className="hotelRoomInfo">
                                       <div className="infoInner"><h3>{x.name}</h3></div>
                                       <div className="infoInner"><p>Adults: {x.occupancy.maxAdults}</p></div>
                                       <div className="infoInner"><p>Children: {x.occupancy.maxChildren}</p></div>
                                       {x.bedConfiguration !== "None" ? <div>Bed: {x.bedConfiguration}</div> : ''}
                                   </div>
                                   <div className="hotelRoomDescription">{x.longDescription}</div>
                                       
                                </div>
                                <hr></hr>
                            </div>

                               )
                           })}
                    </div>
                </div>
            
           </div>
       )
   }
}

export default HotelCard