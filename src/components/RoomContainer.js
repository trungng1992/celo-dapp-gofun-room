import React, {useState, useEffect} from 'react';
import RoomList from './RoomList'
import Loading from './Loading'
import Rooms from '../pages/Rooms'

const RoomContainer = props => {
    return (
        <div>
            <RoomList rooms={props.rooms} />
        </div>
    )
}

export default RoomContainer;