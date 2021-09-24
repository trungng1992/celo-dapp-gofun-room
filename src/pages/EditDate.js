import React, {useState, useEffect} from 'react';
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";


import "react-datepicker/dist/react-datepicker.css";

const EditDate = props => {
    
    const rooms = props.rooms
    const key = props.match.params.id

    let room = rooms[key];

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')
    const [date, setDate] = useState(new Date())

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
    
    

    // const {
    //     name,
    //     price,
    //     imageURL,
    //     availableDate,
    // } = room;
      

    const submitHandler = (event) => {
        event.preventDefault();
        if (image == "") {
            setImage(room.imageURL.join(","));
        }

        console.log(room.imageURL.join(","));

        if (price == "") {
            setPrice(room.price / 1000000000000000000);
        }

        console.log(price);
        console.log(date)
        props.editRoom(date, image, price, key);
        setImage('');
        setPrice('');
        setDate('')
      }



    // setName(room.name)

    return (
        <section className="addroom-container">
            <div className="roomlist-center">
            <div className="section-addroom"><h4>Edit Date Of Room</h4></div>
            <form onSubmit = {submitHandler}>
                <div className="filter-room">
                    <div className="form-group">
                        <label htmlFor="name">Room Name</label>
                        <input name="name" className="add-room-input form-control" defaultValue={room.name} onChange={(e)=>setName(e.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <input name="image" className="add-room-input form-control" required defaultValue={room.imageURL.join(",")} onChange={(e)=>setImage(e.target.value)}/>
                    </div>
                </div>
                
                <div className="filter-room">
                    <div className="form-group">
                        <label htmlFor="dateAvailable">Date Available</label>
                        <DatePicker selected={date} className="add-room-input  form-control" onChange={(date) => setDate(date)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input type="number" name="price" id="price" onChange={(e)=>setPrice(e.target.value)} defaultValue={room.price/1000000000000000000} className="add-room-input form-control" />
                    </div>
                </div>
                <div className="filter-room-btn">
                    <div className="explore-btn">
                        <button className="btn-add-room">Submit</button>
                    </div>
                </div>
                
            </form>
        </div>
        </section>
    )
};

export default EditDate;
