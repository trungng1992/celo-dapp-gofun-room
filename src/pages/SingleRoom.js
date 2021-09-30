import React, { Component } from "react";
import defaultBcg from "../images/ocean-room1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import StyledHero from "../components/StyledHero";


import room2 from "../images/details-1.jpeg";
import room3 from "../images/details-3.jpeg";
import room4 from "../images/details-4.jpeg";
import BigNumber from "bignumber.js";
import { ERC20_DECIMALS } from "../utils/utils";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultBcg
    };
  }

  
  render() {
    window.scrollTo(0, 0);

    const room = this.props.rooms[this.props.match.params.id]; 
    const key = this.props.match.params.id;

    if (!room) {
      return (
        <div className="error">
          <h3>Uh Oh! No such room could be found!</h3>
          <Link to="/rooms" className="btn-primary-back">
            Back to rooms
          </Link>
        </div>
      )
    }

    if (!room.isBook == true) {
      return (
        <div className="error">
          <h3>Uh Oh! This room is booked!</h3>
          <Link to="/rooms" className="btn-primary-back">
            Back to rooms
          </Link>
        </div>
      )
    }
    const {
      name,
      description,
      capacity,
      services,
      size,
      price,
      imageURL,
      availableDate,
    } = room;
    
    console.log(room);
    const [mainImg, ...defaultImg] = imageURL;

    console.log(availableDate);
    let _availableDate = new Date(availableDate*1000);

    const bookHandler = (event) => {
      event.preventDefault();
      this.props.rentRoom( room.price, key);
    }

    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back to rooms
            </Link>
          </Banner>
        </StyledHero>
         <section className="single-room">

          <div className="single-room-images">
              <img key="1" src={room2} alt="room1" />
              <img key="2" src={room3} alt="room3" />
              <img key="3" src={room4} alt="room4" />
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>Price : ${price.toString()} USD</h6>
              <h6>Size : {size} sq. ft.</h6>
              <h6>
                max capacity :{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>
                services : {services} included
              </h6>
              <h6>
                date available: {_availableDate.toLocaleDateString("en-US")}
              </h6>
            </article>
          </div>
          <div className="single-room-booking">
            <Link to="" className="btn-primary" onClick={bookHandler}>
                Booking
            </Link>
          </div>
        </section>
      </>
    );
  }
}
