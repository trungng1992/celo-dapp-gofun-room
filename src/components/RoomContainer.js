import React from 'react';
import RoomList from './RoomList'

const RoomContainer = props => {
    return (
        <div>
            <RoomList rooms={props.rooms} />
        </div>
    )
}

export default RoomContainer;