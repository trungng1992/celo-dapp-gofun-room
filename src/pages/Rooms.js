import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomContainer from '../components/RoomContainer'


const Rooms = props => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Available Rooms">
          <Link to="/" className="btn-primary">
            Return Home
        </Link>
        </Banner>
      </Hero>
      <RoomContainer rooms={props.rooms}/>
    </>
  );
};

export default Rooms;
