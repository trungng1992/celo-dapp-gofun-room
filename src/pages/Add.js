import React, {useState, useEffect} from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const Add = props => {

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [desscription, setDescription] = useState('')
  const [services, setServices] = useState('')
  const [location, setLocation] = useState('')
  const [category, setCategory] = useState('')
  const [capacity, setCapacity] = useState('')
  const [size, setSize] = useState('')
  const [price, setPrice] = useState('')
  const [date, setDate] = useState(new Date())

  const submitHandler = (event) => {
    event.preventDefault();
    props.addToRoom(name, image, desscription, services, location, category, capacity, size, price, date);
    setName('');
    setImage('');
    setDescription('');
    setServices('');
    setCapacity('');
    setLocation('');
    setCategory('');
    setSize('');
    setPrice('');
    setDate('')
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  return (
    <section className="addroom-container">
        <div className="roomlist-center">
            <div className="section-addroom"><h4>Add New Room For Rent</h4></div>
            <form onSubmit = {submitHandler}>
                <div className="filter-room">
                    <div className="form-group">
                        <label htmlFor="name">Room Name</label>
                        <input name="name" className="add-room-input form-control" required onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <input name="image" className="add-room-input form-control" required onChange={(e)=>setImage(e.target.value)}/>
                    </div>
                </div>
                <div className="filter-room">
                    <div className="form-group">
                        <label htmlFor="category">Services</label>
                        <select name="services" id="services" className="add-room-input form-control"onChange={(e)=>setServices(e.target.value)}>
                            <option value="all">All</option>
                            <option value="Wifi">Wifi</option>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Smoking">Smoking</option>
                            <option value="Smoking">Pet</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select name="category" id="category" className="add-room-input form-control" onChange={(e)=>setCategory(e.target.value)}>
                            <option value="all">All</option>
                            <option value="single">single</option>
                            <option value="double">double</option>
                            <option value="family">family</option>
                            <option value="presidential">presidential</option>
                        </select>
                    </div>
                </div>
                <div className="filter-room">
                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <input name="location" className="add-room-input form-control"  onChange={(e)=>setLocation(e.target.value)} required onChange={(e)=>setLocation(e.target.value)}/>
                    </div>
                </div>
                <div className="filter-room">
                    <div className="form-group">
                        <label htmlFor="capacity">Capacity</label>
                        <input type="number" name="capacity" id="capacity" onChange={(e)=>setCapacity(e.target.value)} className="add-room-input form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="size">Size</label>
                        <input type="number" name="size" id="size" onChange={(e)=>setSize(e.target.value)} className="add-room-input form-control" />
                    </div>
                </div>
                <div className="filter-room">
                    <div className="form-group">
                        <label htmlFor="dateAvailable">Date Available</label>
                        <DatePicker selected={date} className="add-room-input  form-control" onChange={(date) => setDate(date)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input type="number" name="price" id="price" onChange={(e)=>setPrice(e.target.value)} className="add-room-input form-control" />
                    </div>
                </div>
                <div className="filter-room">
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea type="number" name="description" id="description" onChange={(e)=>setDescription(e.target.value)} className="add-room-input form-control"></textarea>
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

);
}

export default Add;