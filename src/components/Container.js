import React, { Component, useState } from 'react';
import Header from './Header';
import HotelCard from './HotelCard';
import SelectorButton from './SelectorButton';

class Container extends Component {
    constructor() {
        super();
        this.state = {
            name: 'React',
            data: null,
            filteredList: null,
        };
    }

    componentDidMount = () => {
        fetch('https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({ data, filteredList: data })
            })
    }

    // FILTER ON STAR RATING CHANGE

    changeStar = (e) => {
        const { data, name } = this.state;
        console.log(e.target.value);
        const newList = data.filter(i=> i.starRating == e.target.value)
        this.setState({filteredList: newList})
    }

    // FILTER ON ADULT CHANGE

    adultChange = (e) => {
        const { data, filteredList } = this.state;
        console.log(e.target.value);
        const newList = data.filter(i => i.starRating == e.target.value)
        this.setState({ filteredList: newList })
    }

    // FILTER ON CHILDREN CHANGE

    childChange = (e) => {
        const { data, filteredList } = this.state;
        console.log(e.target.value);
        const newList = data.filter(i => i.starRating == e.target.value)
        this.setState({ filteredList: newList })
    }

    
    render() {
        console.log(this.state.data);
        const { data, filteredList } = this.state;

        
        return (
            <div>
                <Header />

                {/* // SELECTOR BUTTONS */}
                <div className="selector">
                    <div className="selectors-container">

                        <div className="rating" onChange={this.changeStar}>
                            <input id="radio1" type="radio" name="star" value="5" className="star"/>
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

                        <SelectorButton onAdultChange={this.adultChange} onChildChange={this.childChange}/>
                    </div>
                </div>
                {this.state.data &&
                   filteredList.map((item, index) => {
                        return <HotelCard key={index} details={item}/>
                    })}

            </div>
        );
    }
}

export default Container;
